const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = { connectDB };
