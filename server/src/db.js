const mongoose = require("mongoose");

const connectDb = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI || "";
  if (!uri) {
    return Promise.reject(new Error("MONGODB_URI not configured"));
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB");
};

module.exports = connectDb;
