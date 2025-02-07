import { getAllPayrollInfoM, getEmployeePayrollM, addPayrollEntryM } from "../models/PayrollModel.js";

// GETTING INFORMATION FOR ALL EMPLOYEES
const getAllPayrollInfo = async (req, res) => {
  try {
    const payrollDatas = await getAllPayrollInfoM();
    res.json({ payroll_Datas: payrollDatas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving payroll information" });
  }
};

// GETTING INFORMATION FOR A SPECIFIC EMPLOYEE
const getEmployeePayroll = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const payrollData = await getEmployeePayrollM(employeeId);

    if (payrollData.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ payroll_Data: payrollData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving employee's payroll" });
  }
};

// ADD A NEW PAYROLL ENTRY (FOR AN EMPLOYEE)
const addPayrollEntry = async (req, res) => {
  const { employeeId, hoursWorked, leaveDeductions, finalSalary } = req.body;

  // CHECKING NECESSARY DATA FIRST
  if (!employeeId || !hoursWorked || !leaveDeductions || !finalSalary) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // CALLING THE MODEL TO INSERT THE DATA PROVIDED IN THE DATABASE
    const result = await addPayrollEntryM(employeeId, hoursWorked, leaveDeductions, finalSalary);
    res.status(201).json({ message: "Payroll entry added successfully!", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding payroll" });
  }
};

export { getAllPayrollInfo, getEmployeePayroll, addPayrollEntry };
