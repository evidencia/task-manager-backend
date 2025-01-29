const mongoose = require('mongoose')

const connectToDatabase = async() => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.VITE_DB_USERNAME}:${process.env.VITE_DB_PASSWORD}@cluster0.kj8m2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
     console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
  
}

module.exports = connectToDatabase