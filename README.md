-----------------------------------------------------------------------------------------------------------------------
**RESTful API Project Documentation**

1. Project Overview

This project demonstrates a RESTful API built with Node.js and Express, including:

CRUD operations on a resource (resources)

Request-response structure

Middleware usage (logging, error handling)

Asynchronous handling with external API calls

Input validation

Automated tests using Mocha, Chai, and Supertest

The project is designed with best practices for RESTful API design, clean code, and modular structure.

-----------------------------------------------------------------------------------------------------------------------

API REQUEST AND ENDPOINTS :- 


Method: POST ( Create Resources )
URL: http://localhost:4000/api/resources
body : 
{
  "name": "Learn Express.js"
}

Method: GET  ( Get all Resources ) 
URL: http://localhost:4000/api/resources


Method: GET ( Resource by id )
URL: http://localhost:4000/api/resources/1



Method: PUT ( Update A Book ) 
URL: http://localhost:4000/api/resources/1


Method: DELETE ( Delete a book by id ) 
URL: http://localhost:4000/api/resources/1


Method: GET (Fetch External API)
URL: http://localhost:4000/api/resources/external

------------------------------------------------------------------------------------------------------------------------

**Additional Functionalities**

Input validation (e.g., using Joi) to ensure requests have required fields

In-memory storage for resources (can be replaced with a database)

Consistent JSON structure for all responses:

------------------------------------------------------------------------------------------------------------------------

**Running the Project**

Install dependencies:

npm install

Start the server:

npm run dev

Runs on port 4000 (or your defined port)

Run tests:

npm test
