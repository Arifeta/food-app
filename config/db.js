const mongoose = require("mongoose");
const colors = require("colors");

// function mongodb database connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect to Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB error", error);
  }
};

module.exports = connectDb;
