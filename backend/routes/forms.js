const express = require('express');
const router = express.Router();
const models = require('../models');

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
      case 'support':
        result = await models.createSupportIssue(enrichedData);
        break;
      case 'business':
        result = await models.createBusinessInquiry(enrichedData);
        break;
      case 'sales':
        result = await models.createSalesInquiry(enrichedData);
        break;
      case 'pricing':
        result = await models.createPricingInquiry(enrichedData);
        break;
      case 'the100_youth':
        result = await models.createThe100YouthApplication(enrichedData);
        break;
      case 'the100_partner':
        result = await models.createThe100PartnerApplication(enrichedData);
        break;
      case 'the100_mentor':
        result = await models.createThe100MentorApplication(enrichedData);
        break;
      case 'the100_contact':
        result = await models.createThe100ContactInquiry(enrichedData);
        break;
      case 'newsletter':
        result = await models.subscribeToNewsletter(
          enrichedData.email,
          enrichedData.platform,
          ip_address,
          user_agent
        );
        break;
      case 'investor_download':
        result = await models.trackInvestorDownload(enrichedData);
        break;
      default:
        return res.status(400).json({ error: 'Invalid form type' });
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

