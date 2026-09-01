import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/database";

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Mudzen API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();