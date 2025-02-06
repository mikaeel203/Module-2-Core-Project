import express from 'express';
const router = express.Router();

import { 
    getLeaveRequestsCon, 
    patchLeaveReqToUpdateCon, 
    getEmployeeLeaveHistoryCon 
} from '../controllers/LeaveRequestController.js';

// Retrieve all leave requests
router.get('/requests', getLeaveRequestsCon);

// Update leave request status (Approve/Deny)
router.patch('/update', patchLeaveReqToUpdateCon);

// Retrieve employee leave history (Approved/Denied)
router.get('/history', getEmployeeLeaveHistoryCon);

export default router;
