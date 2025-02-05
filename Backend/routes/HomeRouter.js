import express from "express";
import { getLeaveSummary } from "../controllers/dashboardController.js";

const router = express.Router();

// Get leave request summary (Accessible to all users)
router.get("/leave-summary", getLeaveSummary);

export default router;
