const express = require('express');
const router = express.Router();
const models = require('../models');
const emailService = require('../services/email');

// Helper to get client info from request
const getClientInfo = (req) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] ||
             req.headers['x-real-ip'] ||
             req.connection.remoteAddress ||
             null;
  const userAgent = req.headers['user-agent'] || null;
  return { ip_address: ip, user_agent: userAgent };
};

// Submit form endpoint
router.post('/submit', async (req, res) => {
  try {
    const { formType, formData } = req.body;
    const { ip_address, user_agent } = getClientInfo(req);

    const enrichedData = {
      ...formData,
      ip_address,
      user_agent
    };

    let result;

    switch (formType) {
      case 'contact':
        result = await models.createContactInquiry(enrichedData);
        break;
      case 'career':
        result = await models.createCareerApplication(enrichedData);
        break;
      case 'sales':
        result = await models.createSalesInquiry(enrichedData);
        break;
      case 'solution':
        // Map solution form to business_inquiries table
        const solutionData = {
          name: enrichedData.name,
          email: enrichedData.email,
          company: enrichedData.company || null,
          phone: enrichedData.phone || null,
          business_type: enrichedData.projectType || null,
          revenue_range: enrichedData.budget || null,
          message: enrichedData.requirements || enrichedData.message || null,
          selected_model: enrichedData.currentTech || null,
          ip_address: enrichedData.ip_address,
          user_agent: enrichedData.user_agent
        };
        result = await models.createBusinessInquiry(solutionData);
        break;
      case 'cookie':
      case 'privacy':
      case 'legal':
        // Map cookie, privacy, and legal forms to contact_inquiries table
        const contactData = {
          first_name: enrichedData.name?.split(' ')[0] || enrichedData.name || '',
          last_name: enrichedData.name?.split(' ').slice(1).join(' ') || '',
          email: enrichedData.email,
          phone: enrichedData.phone || null,
          company: enrichedData.company || null,
          country: enrichedData.country || null,
          subject: enrichedData.subject || enrichedData.inquiryType || `${formType} inquiry`,
          message: enrichedData.message || enrichedData.details || '',
          inquiry_category: 'general',
          urgency: 'normal',
          preferred_contact: 'email',
          newsletter_opt_in: false,
          ip_address: enrichedData.ip_address,
          user_agent: enrichedData.user_agent
        };
        result = await models.createContactInquiry(contactData);
        break;
      default:
        return res.status(400).json({ error: `Invalid form type: ${formType}` });
    }

    // Send email notification (non-blocking)
    emailService.sendFormNotification({
      type: formType,
      data: enrichedData,
      subject: `New ${formType} form submission - Annita`
    }).catch(err => {
      console.error('Failed to send email notification:', err);
    });

    // Send confirmation email to user if they provided an email (non-blocking)
    if (enrichedData.email) {
      emailService.sendConfirmationEmail({
        to: enrichedData.email,
        type: formType,
        data: enrichedData
      }).catch(err => {
        console.error('Failed to send confirmation email:', err);
      });
    }

    res.json({
      success: true,
      data: result,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Handle duplicate email error
    if (error.code === '23505' || error.message.includes('already exists')) {
      return res.status(409).json({ error: 'This email is already registered' });
    }

    res.status(500).json({
      error: 'Failed to submit form',
      message: error.message
    });
  }
});

module.exports = router;

