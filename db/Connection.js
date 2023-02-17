const mongoose = require("mongoose");
require('dotenv').config();

const Connection = () => {
  try {
    mongoose.connect(process.env.Db_url, {
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

