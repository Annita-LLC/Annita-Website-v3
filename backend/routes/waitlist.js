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

// Add to waitlist
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, business, interest } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        error: 'Name and email are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    const { ip_address, user_agent } = getClientInfo(req);

    const waitlistData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      business: business?.trim() || null,
      interest: interest || 'general',
      ip_address,
      user_agent
    };

    const result = await models.addToWaitlist(waitlistData);

    res.json({
      success: true,
      message: 'Successfully added to waitlist!',
      data: {
        id: result.id,
        email: result.email
      }
    });

  } catch (error) {
    console.error('Waitlist submission error:', error);

    if (error.message.includes('already exists')) {
      return res.status(409).json({
        error: 'This email is already on the waitlist'
      });
    }

    res.status(500).json({
      error: 'Failed to add to waitlist. Please try again.',
      message: error.message
    });
  }
});

module.exports = router;

