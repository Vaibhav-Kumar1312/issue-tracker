require("dotenv").config();
const mongoose = require("mongoose");

module.exports.connectToMongoDB = async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGOD_CONNECT_URI);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};
