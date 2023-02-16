const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const app = express();

const dbConnection = require("../dbconfigs");
const ProductService = require("../Services/product");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/index", async (req, res) => {
  return res.send("<h3>WELCOME</h3>");
});

module.exports.handler = serverless(app);
