const mongoose = require("mongoose");
//worked w/ Iya on connecting the db bc my db was not called in the server.js
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to mongo...')
  } catch (err) {
      console.error(err)
  }
};


module.exports = connectDB;
