const mongoose = require("mongoose");


const Connection = () => {
  try {
    mongoose.connect("mongodb+srv://samu:samu121045@cluster0.ootjh6a.mongodb.net/shambhu?retryWrites=true&w=majority", {
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

