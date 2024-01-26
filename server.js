require("dotenv").config();
const app = require("./index.js");
const db = require("./config/mongoose.js");
const port = process.env.PORT || 3000;

db.connectToMongoDB();
app.listen(port, (err) => {
  try {
    if (err) throw new Error(err);
    console.log(`Server is up at ${port}`);
  } catch (error) {
    console.log(error);
  }
});
