import React, { useEffect, useState } from "react";
import { getSlots, bookSlot } from "../api";

const BookingPage = ({ user }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    const { data } = await getSlots();
    setSlots(data);
  };

  const handleBooking = async (id) => {
    await bookSlot(id);
    fetchSlots();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Slots</h2>
      <ul className="space-y-2">
        {slots.map((slot) => (
          <li
            key={slot._id}
            className="flex justify-between items-center p-3 border rounded-lg bg-gray-50"
          >
            <span>
              {slot.time}{" "}
              {slot.isBooked && slot.bookedBy
                ? `— Booked by ${slot.bookedBy.username}`
                : ""}
            </span>
            {!slot.isBooked && user && (
              <button
                onClick={() => handleBooking(slot._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Book
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
