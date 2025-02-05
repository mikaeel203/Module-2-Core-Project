import express from 'express'
const router = express.Router()

//getting the leave request data and getting it to update whether their leave was approved or denied
router.get('/', getLeaveRequestsCon)
router.patch('/', patchLeaveReqToUpdateCon)

//Employee leave history as such in the History tab
router.get('', getEmployeeLeaveHistoryCon)