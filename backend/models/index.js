const db = require('../config/database');

// Contact Inquiries
const createContactInquiry = async (data) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    company,
    country,
    subject,
    message,
    inquiry_category,
    urgency,
    preferred_contact,
    newsletter_opt_in,
    ip_address,
    user_agent
  } = data;

  const query = `
    INSERT INTO contact_inquiries (
      first_name, last_name, email, phone, company, country,
      subject, message, inquiry_category, urgency, preferred_contact,
      newsletter_opt_in, ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW())
    RETURNING *
  `;

  const values = [
    first_name, last_name, email, phone, company, country,
    subject, message, inquiry_category, urgency, preferred_contact,
    newsletter_opt_in, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// Career Applications
const createCareerApplication = async (data) => {
  const {
    first_name, last_name, email, phone, location, position,
    experience, company, current_position, education, field_of_study,
    linkedin_url, portfolio_url, resume_url, cover_letter, source,
    willing_to_relocate, salary_expectations, message, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO career_applications (
      first_name, last_name, email, phone, location, position,
      experience, company, current_position, education, field_of_study,
      linkedin_url, portfolio_url, resume_url, cover_letter, source,
      willing_to_relocate, salary_expectations, message, ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, NOW())
    RETURNING *
  `;

  const values = [
    first_name, last_name, email, phone, location, position,
    experience, company, current_position, education, field_of_study,
    linkedin_url, portfolio_url, resume_url, cover_letter, source,
    willing_to_relocate, salary_expectations, message, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// Business Inquiries
const createBusinessInquiry = async (data) => {
  const {
    name, email, company, phone, business_type, revenue_range,
    message, selected_model, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO business_inquiries (
      name, email, company, phone, business_type, revenue_range,
      message, selected_model, ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
    RETURNING *
  `;

  const values = [
    name, email, company, phone, business_type, revenue_range,
    message, selected_model, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// Sales Inquiries
const createSalesInquiry = async (data) => {
  const {
    first_name, last_name, email, company, phone, company_size,
    industry, goals, timeline, budget, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO sales_inquiries (
      first_name, last_name, email, company, phone, company_size,
      industry, goals, timeline, budget, ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
    RETURNING *
  `;

  const values = [
    first_name, last_name, email, company, phone, company_size,
    industry, goals, timeline, budget, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// Waitlist
const addToWaitlist = async (data) => {
  const { name, email, phone, business, interest, ip_address, user_agent } = data;

  const query = `
    INSERT INTO waitlist (name, email, phone, business, interest, ip_address, user_agent, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
    ON CONFLICT (email) DO NOTHING
    RETURNING *
  `;

  const values = [name, email, phone, business, interest, ip_address, user_agent];
  const result = await db.query(query, values);
  
  if (result.rows.length === 0) {
    // Email already exists, fetch the existing record
    const existingQuery = 'SELECT * FROM waitlist WHERE email = $1';
    const existingResult = await db.query(existingQuery, [email]);
    if (existingResult.rows.length > 0) {
      throw new Error('Email already exists in waitlist');
    }
  }
  
  return result.rows[0];
};

module.exports = {
  createContactInquiry,
  createCareerApplication,
  createBusinessInquiry,
  createSalesInquiry,
  addToWaitlist
};

