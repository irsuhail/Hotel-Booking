import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

// Protect middleware ensures only authenticated users can register hotels
hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;