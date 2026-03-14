-- Jobzenter – initial schema (run in pgAdmin or psql)
-- Database: Jobzenter, Port: 5434

-- Example table: contact/enquiry submissions from the website
CREATE TABLE IF NOT EXISTS enquiries (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) NOT NULL,
  phone      VARCHAR(50),
  subject    VARCHAR(255),
  message    TEXT,
  source     VARCHAR(100),  -- e.g. 'reach-us', 'study-abroad', 'course-enquiry'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON enquiries (email);

-- Optional: table for course or page-specific metadata (extend as needed)
-- CREATE TABLE IF NOT EXISTS ...

COMMENT ON TABLE enquiries IS 'Contact and enquiry form submissions from the Jobzenter website';
