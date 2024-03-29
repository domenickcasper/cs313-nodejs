CREATE TABLE users (
id SERIAL PRIMARY KEY
, name VARCHAR(100) NOT NULL
, username VARCHAR(30)  NOT NULL UNIQUE
, password VARCHAR(500) NOT NULL
);

CREATE TABLE poll (
id SERIAL PRIMARY KEY
, question VARCHAR(5000) NOT NULL
, start_date DATE NOT NULL
, end_date DATE NOT NULL
);

CREATE TABLE input (
id SERIAL PRIMARY KEY
, poll_id INT REFERENCES poll(id)
, input VARCHAR(5000) NOT NULL
, count INT 
, why VARCHAR(5000)
);

INSERT INTO users 
(name, username, password)
VALUES 
('Domenick Casper', 'domenickcasper', 'password');