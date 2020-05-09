USE notes_db;

INSERT INTO Users (email, password, name, profileImage, createdAt, updatedAt)
VALUES
	("test@email.com", "hashedpw", "Test User", "TestImage.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

