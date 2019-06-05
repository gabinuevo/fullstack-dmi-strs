DROP DATABASE IF EXISTS  connectdmi;

CREATE DATABASE connectdmi;

\c connectdmi

CREATE TABLE strings (
    id SERIAL PRIMARY KEY,
    string text NOT NULL UNIQUE
);

INSERT INTO strings 
    (string)
VALUES 
    ('SAMPLE STRING 1'),
    ('SAMPLE STRING 2'),
    ('SAMPLE STRING 3'),
    ('SAMPLE STRING 4'),
    ('SAMPLE STRING 5');