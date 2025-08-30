const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  time: String,
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
});

module.exports = mongoose.model("Slot", slotSchema);
