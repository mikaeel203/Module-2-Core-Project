import express from 'express'
import cors from 'cors'
// import bodyParser from "from r"

import employeeRoutes from "./routes/employees";
import payrollRoutes from "./routes/payroll";
import attendanceRoutes from "./routes/attendance";
import leaveRoutes from "./routes/leaveRequests";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ', PORT));

