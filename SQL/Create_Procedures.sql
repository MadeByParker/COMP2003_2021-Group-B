CREATE PROCEDURE findCustomerByName (@FirstName VARCHAR(50), @LastName VARCHAR(50))
AS BEGIN

SELECT first_name, Last_name, email, contact_Method
from users
INNER JOIN memberships on users.user_id = memberships.Member_ID

WHERE first_name = @FirstName AND Last_name = @LastName

END

CREATE PROCEDURE findCustomerByName(FirstName VARCHAR(50),LastName VARCHAR(50))
AS
BEGIN
	DECLARE @FirstName := FirstName;
    DECLARE @LastName := LastName;
    SELECT
        users.first_name,
        users.Last_name, 
        users.email,
        users.contact_Method
    FROM
        users
    INNER JOIN memberships ON users.user_id = memberships.Member_ID
    WHERE
        users.first_name = @FirstName AND users.Last_name = @LastName;
END