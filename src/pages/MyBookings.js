import React, { useEffect, useState } from "react";
import { getMyBookings } from "../api";

const MyBookings = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    const { data } = await getMyBookings();
    setSlots(data);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>
      <ul className="space-y-2">
        {slots.map((slot) => (
          <li
            key={slot._id}
            className="p-3 border rounded bg-green-50"
          >
            {slot.time} — ✅ Booked
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
