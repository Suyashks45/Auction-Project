Auction Platform

Overview

This project is an online auction platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes authentication features such as user signup and signin.

Features

User registration and authentication (signup/signin)

Secure password hashing using bcrypt

JWT-based authentication for secure access

React-based frontend with Axios for API communication

Express.js backend with MongoDB database

Technologies Used

Frontend: React, React Router, Axios

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT, bcrypt.js

Database: MongoDB

Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/auction-platform.git
cd auction-platform

2. Install Dependencies

Backend

cd server
npm install

Frontend

cd ../client
npm install

3. Setup Environment Variables

Create a .env file in the server folder with the following details:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Start the Application

Backend

cd server
node index.js

Frontend

cd ../client
npm start

API Endpoints

Authentication Routes

POST /auth/signup - Register a new user

POST /auth/signin - Authenticate a user and return a JWT token

Usage

Visit http://localhost:3000/signup to create an account.

Visit http://localhost:3000/signin to log in.

Use the token for authenticated requests.

Contributing

Feel free to submit issues or pull requests. Any contributions are welcome!

License

This project is licensed under the MIT License.

Author: Your Name

