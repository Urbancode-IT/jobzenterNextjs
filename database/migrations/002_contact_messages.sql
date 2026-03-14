-- Contact form submissions (Reach Us + Study Abroad)
-- Run in pgAdmin on database Jobzenter after 001_initial.sql

CREATE TABLE IF NOT EXISTS contact_messages (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(255) NOT NULL,
  last_name   VARCHAR(255) NOT NULL DEFAULT '',
  email       VARCHAR(255) NOT NULL,
  phone       VARCHAR(50)  NOT NULL,
  subject     VARCHAR(500) NOT NULL DEFAULT '',
  message     TEXT         NOT NULL DEFAULT '',
  source      VARCHAR(100),  -- 'reach-us' | 'study-abroad' | 'consultation'
  country     VARCHAR(255),
  education_level VARCHAR(255),
  created_at  TIMESTAMPTZ   DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages (email);

COMMENT ON TABLE contact_messages IS 'Contact form and study abroad enquiry submissions';
