CREATE DATABASE store_api;

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    featured BOOLEAN DEFAULT false,
    rating NUMERIC(3,1) DEFAULT 4.5,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    company VARCHAR(255) NOT NULL CHECK (company in ('ikea', 'liddy', 'caressa', 'marcos'))
);