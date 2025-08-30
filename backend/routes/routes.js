const express = require("express");
const Slot = require("../models/slot");
const auth = require("../middleware/authMiddleware");
const { signup, login } = require("../controller/authcontroller");

const router = express.Router();

/* ---------------- AUTH ROUTES ---------------- */
router.post("/auth/signup", signup);
router.post("/auth/login", login);

/* ---------------- SLOT ROUTES ---------------- */
// Get all slots
router.get("/slots", async (req, res) => {
  const slots = await Slot.find().populate("bookedBy", "username");
  res.json(slots);
});

// Book a slot (protected)
router.post("/slots/:id/book", auth, async (req, res) => {
  const slot = await Slot.findById(req.params.id);
  if (!slot) return res.status(404).json({ message: "Slot not found" });
  if (slot.isBooked) return res.status(400).json({ message: "Already booked" });

  slot.isBooked = true;
  slot.bookedBy = req.userId;
  await slot.save();

  res.json({ message: "Slot booked successfully" });
});

// Get logged-in user's bookings (protected)
router.get("/slots/my", auth, async (req, res) => {
  const slots = await Slot.find({ bookedBy: req.userId });
  res.json(slots);
});

module.exports = router;
