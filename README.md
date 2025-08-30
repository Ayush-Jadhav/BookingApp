# BookingApp  

A full-stack **slot booking system** built with **MERN stack**, where users can sign up, log in, view available slots, and book them.  
Booked slots display the name of the user who reserved them, and each user can view their personal bookings.  

---

## Features
- User **Signup & Login** (JWT Authentication)  
- **View all slots** with real-time booking updates  
- Shows **who booked a slot**  
- **My Bookings** page for logged-in users  
- **Responsive UI** with TailwindCSS  

---

## Tech Stack
- **Frontend**: React, Axios, TailwindCSS  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Auth**: JWT, Bcrypt.js  

---

## Setup Instructions
```bash
# Clone repo
git clone https://github.com/Ayush-Jadhav/BookingApp.git
cd BookingApp
Backend
cd backend
npm install


Create a .env file in backend/:

MONGO_URI=mongodb://127.0.0.1:27017/bookingApp
JWT_SECRET=yourSecretKey
PORT=5000


Run frontend and backend at once using:
npm run dev


🔗 Demo Flow
Go to Home Page → see available slots.

Signup/Login → unlock booking.

Book a slot → UI updates with “Booked by [username]”.

Visit My Bookings → view personal reservations.
