import { 
    getLeaveRequestsModel, 
    patchLeaveReqToUpdateModel, 
    getEmployeeLeaveHistoryModel 
} from "../models/LeaveRequestModel.js";

// Controller to get all leave requests
const getLeaveRequestsCon = async (req, res) => {
    try {
        const leaveRequests = await getLeaveRequestsModel();
        res.json({ show_leaveReq: leaveRequests });
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Controller to update leave request status
const patchLeaveReqToUpdateCon = async (req, res) => {
    try {
        const updatedLeaveStatus = await patchLeaveReqToUpdateModel(req.body); 
        res.json({ updateLeaveStatus: updatedLeaveStatus });
    } catch (error) {
        console.error("Error updating leave request:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Controller to get employee leave history (approved/denied)
const getEmployeeLeaveHistoryCon = async (req, res) => {
    try {
        const leaveHistory = await getEmployeeLeaveHistoryModel();
        res.json({ show_EmployeeLeaveHistory: leaveHistory });
    } catch (error) {
        console.error("Error fetching employee leave history:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export { getLeaveRequestsCon, patchLeaveReqToUpdateCon, getEmployeeLeaveHistoryCon };
