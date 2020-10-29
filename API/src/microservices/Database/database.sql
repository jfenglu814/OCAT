-- SQL script to create assessment table
CREATE TABLE assessments (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  cat_name VARCHAR(50) ,
  cat_date_of_birth DATE,
  instrument VARCHAR(50),
  score INT,
  risk_level VARCHAR(6),
  created_at timestamp DEFAULT NOW(),
  deleted_at timestamp
);

-- SQL script to create user table
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  created_at timestamp DEFAULT NOW(),
  UNIQUE (email)
);