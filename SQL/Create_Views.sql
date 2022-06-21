CREATE VIEW allCustomers AS
SELECT first_name, last_name, contact_Method 
FROM users 
INNER JOIN memberships ON users.user_id = memberships.Member_ID
