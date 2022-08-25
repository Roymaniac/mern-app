const express = require("express"); // Express package
const dotenv = require("dotenv").config(); // Environment variable

const PORT = process.env.PORT || 5000; // PORT

const app = express(); // Initialize Express


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // Server
