import {getLeaveRequestsModel, patchLeaveReqToUpdateModel, getEmployeeLeaveHistoryModel} from "../models/LeaveRequestModel.js"

const getLeaveRequestsCon = async(req, res) =>{
    res.json ({show_leaveReq: await getLeaveRequestsModel()})
}

const patchLeaveReqToUpdateCon = async(req, res) => {
    res.json ({updateLeaveStatus: await patchLeaveReqToUpdateModel()})
}

const getEmployeeLeaveHistoryCon = async(req, res) =>{
    res.json ({show_EmployeeLeaveHistory: await getEmployeeLeaveHistoryModel()})
}

export {getLeaveRequestsCon, patchLeaveReqToUpdateCon, getEmployeeLeaveHistoryCon}

