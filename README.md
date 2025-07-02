# book-store
this is my course project of EAD.
This is a simple full-stack web application built with the MERN stack (MongoDB, Express.js, ReactJS, Node.js). It allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of books. The purpose of this project is to help beginners understand how a basic frontend interacts with a backend API and a database.

Features
Add new books

View all books

Edit book details

Delete books

Responsive data interaction with MongoDB

Axios used for API requests in React

Technology Stack
Frontend: ReactJS

Backend: Node.js, Express.js

Database: MongoDB using Mongoose

HTTP Client: Axios

Folder Structure
pgsql
Copy
Edit
Book-Store/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   └── server.js
  └── frontend/
      └── src/
          ├── components/
          ├── App.js
          └── index.js
Setup Instructions
Backend
Navigate to the backend directory

Install dependencies using npm install

Set up a .env file with your MongoDB connection string

Run the server using npm start

Frontend
Navigate to the frontend directory

Install dependencies using npm install

Start the frontend using npm start

Make sure your backend is running before starting the frontend.

API Endpoints
GET /books - Fetch all books

POST /books - Create a new book

PUT /books/:id - Update a book

DELETE /books/:id - Delete a book

License
This project is open for educational use and experimentation.


