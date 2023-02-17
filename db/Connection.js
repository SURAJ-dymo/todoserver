const mongoose = require("mongoose");
require("dotenv").config();

const Connection = () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => {
      console.log("Data Base Connected")
    }).catch((err) => {
      console.log(err)
    })

  } catch (error) {
    console.log(error);
  }

}
module.exports = Connection;

