# Serverless Node Application with MongoDB Product API

This README provides an overview of a serverless Node.js application using MongoDB to create a simple product API. The application is built using the Serverless Framework, designed to run on AWS Lambda, and is backed by a MongoDB database. It allows you to create, retrieve, and view product data.

## Table of Contents
- [Service Configuration](#service-configuration)
- [Functionality](#functionality)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

## Service Configuration

### Serverless Framework
- **Service Name**: serverless-node
- **Framework Version**: 3

### AWS Lambda Provider
- **Runtime**: Node.js 12.x
- **Stage**: dev
- **Region**: us-east-1

### Plugins
- [serverless-offline](https://www.serverless.com/plugins/serverless-offline): Enables local development and testing.
- [serverless-dotenv-plugin](https://www.serverless.com/plugins/serverless-dotenv-plugin): Simplifies environment variable management.

### Functions
- **productApi**: This function is responsible for handling HTTP requests for the product API.
  - **Handler**: `Controller/products.handler`
  - **HTTP Events**: Exposes a `GET` method at the path `/index` for retrieving products.

## Functionality

The application provides the following functionality through the `Controller/products.js` module:

### Create Product
- To create a new product, use the `createProduct` function, which expects a product object as an argument. It will add the product to the MongoDB database.

### Get All Products
- The `getAllProduct` function retrieves all products from the database and returns them as an array.

### Get Product by ID
- The `getProductById` function allows you to retrieve a specific product by providing its `productId`. It returns the product details if found.

## Environment Variables

To use the application, you need to configure environment variables. An example `.env.example` file is provided with the following variable:

- `DB_LOCAL_URI`: MongoDB connection URI. You should replace this with the actual URI to your MongoDB database.

Before deployment, create a `.env` file and set the actual database URI.

## Deployment

You can deploy this Serverless Node.js application to AWS Lambda by using the Serverless Framework. Make sure you have AWS credentials properly configured.

1. Install Serverless Framework: `npm install -g serverless`

2. Configure AWS credentials: `serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY`

3. Deploy the service: `serverless deploy`

After deploying, your API will be available at the specified endpoint, and you can start using the product API. Make sure to set up the MongoDB database properly and update the environment variables accordingly.

For local development and testing, you can use the `serverless-offline` plugin to emulate the AWS Lambda environment locally.

Feel free to customize this application and its functionality according to your requirements.