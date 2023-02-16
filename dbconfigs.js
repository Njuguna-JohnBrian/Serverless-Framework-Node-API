const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  let isConnected;

  if (isConnected) {
    console.log("using existing database connection");
    return Promise.resolve();
  }

  console.log("using new database connection");

  const database = await mongoose.connect(process.env.DB_LOCAL_URI);
  isConnected = database.connection[0].readyState;
};
