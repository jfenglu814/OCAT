CREATE TABLE assessments (
  id SERIAL PRIMARY KEY,
  cat_name VARCHAR(50),
  cat_date_of_birth DATE,
  instrument VARCHAR(50),
  score INT,
  risk_level VARCHAR(6),
  created_at DATE,
  deleted_at DATE
);