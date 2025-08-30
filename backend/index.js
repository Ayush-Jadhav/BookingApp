const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/routes");
const Slot = require("./models/slot");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = require("./config/database");
connectDB.connectDB();

// Routes
app.use("/api", routes);

// Seed slots if empty
const seedSlots = async () => {
  const count = await Slot.countDocuments();
  if (count === 0) {
    await Slot.insertMany([
      { time: "8:00 AM" },
      { time: "9:00 AM" },
      { time: "10:00 AM" },
      { time: "11:00 AM" }
    ]);
    console.log("Default slots seeded");
  }
};
seedSlots();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
