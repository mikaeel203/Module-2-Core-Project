import { db } from "../db.js";

export const Dashboard = {
  getLeaveSummary: (callback) => {
    const sql = `
      SELECT 
        SUM(CASE WHEN status = 'Approved' THEN 1 ELSE 0 END) AS approved,
        SUM(CASE WHEN status = 'Denied' THEN 1 ELSE 0 END) AS denied,
        SUM(CASE WHEN status = 'Pending' THEN 1 ELSE 0 END) AS pending
      FROM LeaveRequests;
    `;
    db.query(sql, callback);
  }
};
