const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const employeeRoutes = require("./routes/employees");
const payrollRoutes = require("./routes/payroll");
const attendanceRoutes = require("./routes/attendance");
const leaveRoutes = require("./routes/leaveRequests");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const help = ()=>{
    console.log("help");
}
const chante = ()=>{
    console.log("Chante");
}