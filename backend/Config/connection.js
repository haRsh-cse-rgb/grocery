const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(`mongodb+srv://kumarharshrivastava:jevEUae86VjHmroz@cluster0.5kpbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
