# store-Api-Node.js-Express.js

Store API
Store API is a RESTful API built using Node.js and Express.js that provides access to products data. This API allows to retrieve products data with various filtering and sorting options, such as name, featured status, company, price, and rating.

Requirements
Node.js
Express.js
MongoDB
Mongoose
Dotenv

Getting started
Clone the repository
Change into the directory: cd store-api
Install the dependencies: npm install
Create a .env file in the root directory of your project and add the following environment variables: MONGO_URI=[your_mongodb_connection_string]
Start the development server: npm start

Store API
Store API is a RESTful API built using Node.js and Express.js that provides access to products data. This API allows to retrieve products data with various filtering and sorting options, such as name, featured status, company, price, and rating.

Endpoints
GET /api/v1/products - Retrieve a list of products with various filtering and sorting options.

Query parameters
name - Name of the product.
featured - Featured status of the product (true/false).
company - Company of the product.
sort - Sort the results by one or more fields (e.g. sort=name,-createdAt).
fields - Select specific fields to include in the response (e.g. fields=name,price).
numericFilters - Filter the results by numeric fields (price, rating) using operators such as >, >=, =, <, and <= (e.g. numericFilters=price>20,rating<=3).
page - Page number to retrieve (default: 1).
limit - Number of items per page (default: 10).
