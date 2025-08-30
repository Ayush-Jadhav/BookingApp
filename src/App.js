import React, { useState } from "react";
import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(localStorage.getItem("username") || null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex justify-between items-center bg-white shadow-md px-4 py-3 mb-6 rounded-lg">
        <h1 className="text-lg font-bold">Booking App</h1>
        <div className="space-x-3">
          <button
            onClick={() => setPage("home")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Home
          </button>
          {user ? (
            <>
              <button
                onClick={() => setPage("my")}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                My Bookings
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout ({user})
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setPage("login")}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Login
              </button>
              <button
                onClick={() => setPage("signup")}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="bg-white shadow-md p-6 rounded-lg">
        {page === "home" && <BookingPage user={user} />}
        {page === "login" && <Login setUser={setUser} setPage={setPage} />}
        {page === "signup" && <Signup setPage={setPage} />}
        {page === "my" && <MyBookings />}
      </div>
    </div>
  );
}

export default App;
