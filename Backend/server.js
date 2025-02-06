import cors from 'cors'
import express from 'express'
// import bodyParser from "from r"

import employeeRoutes from "./routes/EmployeeRouter.js";
import payrollRoutes from "./routes/PayrollRouter.js";
import attendanceRoutes from "./routes/AttendanceRouter.js";
import leaveRequestsRoutes from "./routes/leaveRequestsRouter.js";


config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRequestsRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server running on port ', PORT));

