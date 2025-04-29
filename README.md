# AuthAPIByJWT

This project is a simple implementation of authentication using JWT (JSON Web Tokens). The backend API allows users to register, login, and access protected routes with JWT-based authentication.

## Features

- **User Registration**: Allows new users to sign up by providing necessary details.
- **User Login**: Allows users to log in and receive a JWT token.
- **JWT Token Expiration**: Tokens are set to expire after a certain period, improving security.


## Technologies Used

- **Node.js**: JavaScript runtime used for building the backend API.
- **Express.js**: Web framework for building the API endpoints.
- **JWT**: Used for handling authentication via tokens.
- **Bcrypt.js**: Library used for hashing passwords.
- **dotenv**: Loads environment variables from `.env` files.
- **Postgres (or other databases)**: Database for storing user information(local host)




## Setup and Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- - npm (Node Package Manager)

### Steps to run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/akshitabanwal/AuthAPIByJWT.git

2. Navigate to the project directory:
   ```bash
   cd AuthAPIByJWT

3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory and add the following:
   ```env
   JWT_SECRET=your_jwt_secret_key
   PG_USER=your_postgresql_username
   PG_HOST=localhost
   PG_DATABASE=your_database_name
   PG_PASSWORD=your_postgresql_password
   PG_PORT=5432
   PORT=5000
5. Start the server(The API will run on http://localhost:5000.):
   ```bash
    npm start

6. sql command
    ```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,       
    name VARCHAR(100) NOT NULL,  
    username VARCHAR(50) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
    );
