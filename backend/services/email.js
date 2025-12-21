const { Resend } = require('resend');
require('dotenv').config();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@annita.com';
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'info@annita.com';
const APP_NAME = process.env.APP_NAME || 'Annita';

/**
 * Send email notification for form submission
 * @param {Object} options - Email options
 * @param {string} options.type - Form type (contact, career, etc.)
 * @param {Object} options.data - Form data
 * @param {string} options.subject - Email subject
 * @returns {Promise<Object>} Resend response
 */
async function sendFormNotification({ type, data, subject }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️  RESEND_API_KEY not configured. Email notifications disabled.');
    return null;
  }

  try {
    const htmlContent = generateFormEmailHTML(type, data);
    const textContent = generateFormEmailText(type, data);

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: subject || `New ${type} form submission - ${APP_NAME}`,
      html: htmlContent,
      text: textContent,
      replyTo: data.email || FROM_EMAIL,
    });

    console.log(`✅ Email notification sent for ${type} form submission:`, result.data?.id);
    return result;
  } catch (error) {
    console.error('❌ Error sending email notification:', error);
    // Don't throw - we don't want email failures to break form submissions
    return null;
  }
}

/**
 * Send confirmation email to form submitter
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.type - Form type
 * @param {Object} options.data - Form data
 * @returns {Promise<Object>} Resend response
 */
async function sendConfirmationEmail({ to, type, data }) {
  if (!process.env.RESEND_API_KEY || !to) {
    return null;
  }

  try {
    const htmlContent = generateConfirmationEmailHTML(type, data);
    const textContent = generateConfirmationEmailText(type, data);

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: to,
      subject: `Thank you for contacting ${APP_NAME}`,
      html: htmlContent,
      text: textContent,
    });

    console.log(`✅ Confirmation email sent to ${to}`);
    return result;
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    return null;
  }
}

/**
 * Generate HTML content for form notification email
 */
function generateFormEmailHTML(type, data) {
  const formatField = (label, value) => {
    if (!value) return '';
    return `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${label}:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(String(value))}</td></tr>`;
  };

  let fields = '';
  
  // Common fields
  if (data.name || (data.first_name && data.last_name)) {
    const fullName = data.name || `${data.first_name} ${data.last_name}`;
    fields += formatField('Name', fullName);
  }
  if (data.email) fields += formatField('Email', data.email);
  if (data.phone) fields += formatField('Phone', data.phone);
  if (data.company) fields += formatField('Company', data.company);

  // Type-specific fields
  switch (type) {
    case 'contact':
      if (data.subject) fields += formatField('Subject', data.subject);
      if (data.message) fields += formatField('Message', data.message);
      if (data.inquiry_category) fields += formatField('Category', data.inquiry_category);
      if (data.urgency) fields += formatField('Urgency', data.urgency);
      break;
    
    case 'career':
      if (data.position) fields += formatField('Position', data.position);
      if (data.location) fields += formatField('Location', data.location);
      if (data.experience) fields += formatField('Experience', data.experience);
      if (data.linkedin_url) fields += formatField('LinkedIn', data.linkedin_url);
      if (data.portfolio_url) fields += formatField('Portfolio', data.portfolio_url);
      if (data.cover_letter) fields += formatField('Cover Letter', data.cover_letter);
      if (data.message) fields += formatField('Message', data.message);
      break;
    
    case 'waitlist':
      if (data.business) fields += formatField('Business', data.business);
      if (data.interest) fields += formatField('Interest', data.interest);
      break;
    
    default:
      // Include all remaining fields
      Object.keys(data).forEach(key => {
        if (!['name', 'first_name', 'last_name', 'email', 'phone', 'company', 'ip_address', 'user_agent'].includes(key)) {
          fields += formatField(key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), data[key]);
        }
      });
  }

  // Metadata
  if (data.ip_address) fields += formatField('IP Address', data.ip_address);
  if (data.user_agent) fields += formatField('User Agent', data.user_agent);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3B82F6; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${type.charAt(0).toUpperCase() + type.slice(1)} Form Submission</h1>
        </div>
        <div class="content">
          <table>
            ${fields}
          </table>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text content for form notification email
 */
function generateFormEmailText(type, data) {
  let text = `New ${type} form submission:\n\n`;
  
  if (data.name || (data.first_name && data.last_name)) {
    const fullName = data.name || `${data.first_name} ${data.last_name}`;
    text += `Name: ${fullName}\n`;
  }
  if (data.email) text += `Email: ${data.email}\n`;
  if (data.phone) text += `Phone: ${data.phone}\n`;
  if (data.company) text += `Company: ${data.company}\n`;
  
  Object.keys(data).forEach(key => {
    if (!['name', 'first_name', 'last_name', 'email', 'phone', 'company', 'ip_address', 'user_agent'].includes(key)) {
      text += `${key.replace(/_/g, ' ')}: ${data[key]}\n`;
    }
  });
  
  return text;
}

/**
 * Generate HTML content for confirmation email
 */
function generateConfirmationEmailHTML(type, data) {
  const name = data.name || (data.first_name ? `${data.first_name} ${data.last_name || ''}`.trim() : 'there');
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3B82F6; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting ${APP_NAME}!</h1>
        </div>
        <div class="content">
          <p>Hi ${escapeHtml(name)},</p>
          <p>We've received your ${type} form submission and will get back to you as soon as possible.</p>
          <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
          <p>Best regards,<br>The ${APP_NAME} Team</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text content for confirmation email
 */
function generateConfirmationEmailText(type, data) {
  const name = data.name || (data.first_name ? `${data.first_name} ${data.last_name || ''}`.trim() : 'there');
  
  return `Hi ${name},

We've received your ${type} form submission and will get back to you as soon as possible.

If you have any urgent questions, please don't hesitate to contact us directly.

Best regards,
The ${APP_NAME} Team`;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

module.exports = {
  sendFormNotification,
  sendConfirmationEmail
};

