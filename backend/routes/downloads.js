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

// Track download
router.post('/track', async (req, res) => {
  try {
    const {
      document_name,
      document_type,
      downloader_email,
      downloader_name,
      downloader_company,
      downloader_role
    } = req.body;

    const { ip_address, user_agent } = getClientInfo(req);

    const downloadData = {
      document_name,
      document_type,
      downloader_email,
      downloader_name,
      downloader_company,
      downloader_role,
      ip_address,
      user_agent
    };

    const result = await models.trackInvestorDownload(downloadData);

    res.json({
      success: true,
      data: result,
      message: 'Download tracked successfully'
    });

  } catch (error) {
    console.error('Download tracking error:', error);
    res.status(500).json({
      error: 'Failed to track download',
      message: error.message
    });
  }
});

module.exports = router;

