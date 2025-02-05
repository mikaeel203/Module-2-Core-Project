import { Dashboard } from "../models/HomeModel.js";

export const getLeaveSummary = (req, res) => {
  Dashboard.getLeaveSummary((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]); // Return first row of summary results
  });
};
