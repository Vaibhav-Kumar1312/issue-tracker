const MONGOD_CONNECT_URI = `mongodb+srv://vaibhavkumar458:VC3r9cy0XBP0zPnV@cluster0.s8bzrrl.mongodb.net/?retryWrites=true&w=majority`;
const mongoose = require("mongoose");

module.exports.connectToMongoDB = async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGOD_CONNECT_URI);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};
