BEGIN;

TRUNCATE 
    brand_comments,
    brand_requests,
    brand_users RESTART IDENTITY CASCADE;

INSERT INTO brand_users (first_name,last_name,email,password)
VALUES
    ('Test','User','test@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Megan','Wade','megan@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Sophia','Summers','sophia@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Jane','Doe','jane@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('John','Poe','john@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Carrie','Bradshaw','carrie@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Samantha','Jones','samantha@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Charlotte','York','charlotte@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
    ('Miranda','Hobbes','miranda@gmail.com','$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne');

INSERT INTO brand_requests (user_id, product, category, info, date)
VALUES
    (1,'Running Shoes','clothing','I run about 20 miles per week, mostly on concrete. I have very bad knees, so I need lots of padding. My budget is $50.',now());

INSERT INTO brand_comments (request_id,user_id,brand,why)
VALUES 
    (1,4,'Asics','I live and die by ASICS, they are soooOOO comfortable!!! Maybe not super stylish... but if you keep and eye on sales, you can probably find them within your budget.');

COMMIT;