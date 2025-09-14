import express from "express";
import {
  checkAvailabilityAPI,
  createBooking,
  getHotelBookings,
  getUserBookings,
  stripePayment,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const bookingRouter = express.Router();

// Check room availability before booking
bookingRouter.post("/check-availability", checkAvailabilityAPI);

// Create a new booking (only for authenticated users)
bookingRouter.post("/book", protect, createBooking);

// Get all bookings for the logged-in user
bookingRouter.get("/user", protect, getUserBookings);

// Get all bookings for hotels owned by the logged-in user
bookingRouter.get("/hotel", protect, getHotelBookings);

bookingRouter.post('/stripe-payment',protect,stripePayment);

export default bookingRouter;
