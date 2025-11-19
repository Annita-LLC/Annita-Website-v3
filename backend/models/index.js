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

// Support Issues
const createSupportIssue = async (data) => {
  const {
    issue_category, priority, title, description, steps_to_reproduce,
    expected_behavior, actual_behavior, browser, device, email,
    attachments, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO support_issues (
      issue_category, priority, title, description, steps_to_reproduce,
      expected_behavior, actual_behavior, browser, device, email,
      attachments, ip_address, user_agent, status, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 'open', NOW())
    RETURNING *
  `;

  const values = [
    issue_category, priority, title, description, steps_to_reproduce,
    expected_behavior, actual_behavior, browser, device, email,
    attachments, ip_address, user_agent
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

// Pricing Inquiries
const createPricingInquiry = async (data) => {
  const {
    name, email, company, phone, selected_plan, billing_cycle,
    message, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO pricing_inquiries (
      name, email, company, phone, selected_plan, billing_cycle,
      message, ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
    RETURNING *
  `;

  const values = [
    name, email, company, phone, selected_plan, billing_cycle,
    message, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// The 100 Youth Applications
const createThe100YouthApplication = async (data) => {
  const {
    first_name, last_name, email, phone, age, education, institution,
    sector, experience, goals, motivation, availability, references_info,
    ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO the100_youth_applications (
      first_name, last_name, email, phone, age, education, institution,
      sector, experience, goals, motivation, availability, references_info,
      ip_address, user_agent, status, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, 'pending', NOW())
    RETURNING *
  `;

  const values = [
    first_name, last_name, email, phone, age, education, institution,
    sector, experience, goals, motivation, availability, references_info,
    ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// The 100 Partner Applications
const createThe100PartnerApplication = async (data) => {
  const {
    organization_name, contact_person, email, phone, organization_type,
    website, partnership_goals, capabilities, resources, additional_info,
    ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO the100_partner_applications (
      organization_name, contact_person, email, phone, organization_type,
      website, partnership_goals, capabilities, resources, additional_info,
      ip_address, user_agent, status, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'pending', NOW())
    RETURNING *
  `;

  const values = [
    organization_name, contact_person, email, phone, organization_type,
    website, partnership_goals, capabilities, resources, additional_info,
    ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// The 100 Mentor Applications
const createThe100MentorApplication = async (data) => {
  const {
    first_name, last_name, email, phone, expertise_areas, experience_summary,
    availability, motivation, additional_info, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO the100_mentor_applications (
      first_name, last_name, email, phone, expertise_areas, experience_summary,
      availability, motivation, additional_info, ip_address, user_agent, status, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'pending', NOW())
    RETURNING *
  `;

  const values = [
    first_name, last_name, email, phone, expertise_areas, experience_summary,
    availability, motivation, additional_info, ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// The 100 Contact Inquiries
const createThe100ContactInquiry = async (data) => {
  const {
    name, email, phone, subject, message, interest_area,
    ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO the100_contact_inquiries (
      name, email, phone, subject, message, interest_area,
      ip_address, user_agent, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
    RETURNING *
  `;

  const values = [
    name, email, phone, subject, message, interest_area,
    ip_address, user_agent
  ];

  const result = await db.query(query, values);
  return result.rows[0];
};

// Newsletter Subscriptions
const subscribeToNewsletter = async (email, platform, ip_address, user_agent) => {
  const query = `
    INSERT INTO newsletter_subscriptions (email, platform, ip_address, user_agent, subscribed_at, is_active)
    VALUES ($1, $2, $3, $4, NOW(), true)
    ON CONFLICT (email) 
    DO UPDATE SET is_active = true, subscribed_at = NOW()
    RETURNING *
  `;

  const values = [email, platform, ip_address, user_agent];
  const result = await db.query(query, values);
  return result.rows[0];
};

// Investor Downloads
const trackInvestorDownload = async (data) => {
  const {
    document_name, document_type, downloader_email, downloader_name,
    downloader_company, downloader_role, ip_address, user_agent
  } = data;

  const query = `
    INSERT INTO investor_downloads (
      document_name, document_type, downloader_email, downloader_name,
      downloader_company, downloader_role, ip_address, user_agent, download_count, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 1, NOW())
    RETURNING *
  `;

  const values = [
    document_name, document_type, downloader_email, downloader_name,
    downloader_company, downloader_role, ip_address, user_agent
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
  createSupportIssue,
  createBusinessInquiry,
  createSalesInquiry,
  createPricingInquiry,
  createThe100YouthApplication,
  createThe100PartnerApplication,
  createThe100MentorApplication,
  createThe100ContactInquiry,
  subscribeToNewsletter,
  trackInvestorDownload,
  addToWaitlist
};

