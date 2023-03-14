const Mongoose = require("mongoose");
const dotenv = require("dotenv");
class dbConnect {
   
  connect() {
    dotenv.config();
    Mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    }).then(() => {
        console.log("Successfully connected to database.");
      })
      .catch((error) => {
        console.error("Error connecting to database:", error);
      });
  }
}

module.exports = new dbConnect();
