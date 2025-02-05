

const Payroll = require("../models/payrollModel");

module.exports = {


  // GETTING INFORMATION FOR ALL EMPLOYEES

  getAllPayrollInfo: async (req, res) => {
    try {
      const payrollData = await Payroll.getPayrollInfo();
      res.json(payrollData); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error retrieving payroll information" });
    }
  },

  
  
  // GETTING INFORMATION FOR A SPECIFIC EMPLOYEE

  getEmployeePayroll: async (req, res) => {
    const { employeeId } = req.params;
    try {
      const payrollData = await Payroll.getEmployeePayroll(employeeId);
      if (payrollData.length === 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json(payrollData); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error retrieving employee's payroll" });
    }
  },

  
  // Add a new payroll entry (for an employee)

addPayrollEntry: async (req, res) => {
    const { payroll_id, employeeId, hoursWorked, leaveDeductions, finalSalary } = req.body;

    
    // CHECKING NECESSARY DATA FIRST 


    if (!payroll_id, employeeId || !hoursWorked || !leaveDeductions || !finalSalary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {

      
      //CALLING THE MODEL TO INSERT THE DATE PROVIDED IN THE DATABASE 


      const result = await Payroll.addPayrollEntry(payroll_id, employeeId, hoursWorked, leaveDeductions, finalSalary);
      res.status(201).json({ message: "Payroll entry added successfully!", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error adding payroll " });
    }
  },
};