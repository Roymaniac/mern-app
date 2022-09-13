const express = require("express"); // Express package
const colors = require("colors");
const dotenv = require("dotenv").config(); // Environment variable
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000; // PORT
const cors = require("cors");

connectDB(); // DB config

const app = express(); // Initialize Express

const goalRoutes = require("./routes/goalRoutes"); // GoalRoutes import
const userRoutes = require("./routes/userRoutes"); // UserRoutes import

app.use(cors()); // cors middleware

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Web Route
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// custom error handle middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // Server
