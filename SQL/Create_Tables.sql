DROP TABLE IF EXISTS [dbo].[Sessions];
DROP TABLE IF EXISTS [dbo].[Passwords];
DROP TABLE IF EXISTS [dbo].[Users];
GO

CREATE TABLE [Users] (
    [user_id] INT IDENTITY(1,1) PRIMARY KEY,
    [first_name] NVARCHAR(50),
    [last_name] NVARCHAR(50),
    [email] NVARCHAR(50) UNIQUE,
    [password] VARBINARY(8000),
    [contact_Method] SET('Email','Text Message','Mail')
);



CREATE TABLE [Passwords] (
    [password_id] INT IDENTITY(1,1) PRIMARY KEY,
    [user_id] INT FOREIGN KEY REFERENCES Users(user_id),
    [password] VARBINARY(8000),
    [changed_at] DATETIME DEFAULT GETDATE()
);


CREATE TABLE [Sessions] (
    [session_id] INT IDENTITY(1,1) PRIMARY KEY,
    [user_id] INT FOREIGN KEY REFERENCES Users(user_id),
    [issued_at] DATETIME DEFAULT GETDATE(),
);

CREATE TABLE Memberships(
	Member_ID INT PRIMARY KEY,
	Membership_Type SET('Individual','Family'),
	Interests VARCHAR(50),
	Date_Registered DATE,
	FOREIGN KEY (Member_ID) REFERENCES users(user_id)
);