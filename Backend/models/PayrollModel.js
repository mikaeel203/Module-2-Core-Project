import { pool } from "../db.js";

// GETTING PAYROLL INFORMATION FOR ALL EMPLOYEES
const getAllPayrollInfoM = async () => {
  try {
    const query = `
      SELECT 
        e.employee_id, e.name, p.position_name, e.email,
        pr.hours_worked, pr.leave_deductions, pr.final_salary
      FROM Employees e
      JOIN Position p ON e.position_id = p.position_id
      JOIN Payroll pr ON e.employee_id = pr.employee_id
    `;
    const [results] = await pool.query(query); 
    return results;
  } catch (err) {
    throw err;
  }
};

// GETTING PAYROLL INFORMATION FOR A SPECIFIC EMPLOYEE 
const getEmployeePayrollM = async (employeeId) => {
  try {
    const query = `
      SELECT 
        e.employee_id, e.name, p.position_name, e.email,
        pr.hours_worked, pr.leave_deductions, pr.final_salary
      FROM Employees e
      JOIN Position p ON e.position_id = p.position_id
      JOIN Payroll pr ON e.employee_id = pr.employee_id
      WHERE e.employee_id = ?
    `;
    const [results] = await pool.query(query, [employeeId]);
    return results;
  } catch (err) {
    throw err;
  }
};

// UPDATING  PAYROLL RECORD IN THE DB FOR SPECIFIC EMPLOYEE 

const addPayrollEntryM = async (employeeId, hoursWorked, leaveDeductions, finalSalary) => {
  try {
    const query = `
      INSERT INTO Payroll (employee_id, hours_worked, leave_deductions, final_salary)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [employeeId, hoursWorked, leaveDeductions, finalSalary]); // Use promise-based query
    return result;
  } catch (err) {
    throw err;
  }
};

export { getAllPayrollInfoM, getEmployeePayrollM, addPayrollEntryM };
