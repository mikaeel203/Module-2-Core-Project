import { Dashboard } from "../models/Dashboard.js";

export const getLeaveSummary = (req, res) => {
  Dashboard.getLeaveSummary((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]); // Return first row of summary results
  });
};
