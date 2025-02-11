import { pool } from "../config/db.js";

// GETTING PAYROLL INFORMATION FOR ALL EMPLOYEES
// const getEmployeePayrollM = async () => {
//   try {
//     const query = `
//       SELECT 
//         e.employee_id, e.name, p.position_name, e.email,
//         pr.hours_worked, pr.leave_deductions, pr.final_salary
//       FROM Employees e
//       JOIN Position p ON e.position_id = p.position_id
//       JOIN Payroll pr ON e.employee_id = pr.employee_id
//     `;
//     const [results] = await pool.query(query); 
//     return results;
//   } catch (err) {
//     throw err;
//   }
// };

// GETTING PAYROLL INFORMATION FOR A SPECIFIC EMPLOYEE 
const getAllPayrollInfoM = async (employeeId) => {
  try {
    const query = "SELECT e.employee_id AS employeeId, e.name AS name, d.department_name AS department, p.position_name AS position, pr.hours_worked AS hoursWorked, pr.leave_deductions AS leaveDeductions, pr.final_salary AS finalSalary FROM Employees e JOIN Payroll pr ON e.employee_id = pr.employee_id JOIN Department d ON e.department_id = d.department_id JOIN Position p ON e.position_id = p.position_id ORDER BY e.employee_id;";
    const [results] = await pool.query(query, [employeeId]);
    return results;
  } catch (err) {
    throw err;
  }
};

// UPDATING  PAYROLL RECORD IN THE DB FOR SPECIFIC EMPLOYEE 

// const addPayrollEntryM = async (employeeId, hoursWorked, leaveDeductions, finalSalary) => {
//   try {
//     const query = `
//       INSERT INTO Payroll (employee_id, hours_worked, leave_deductions, final_salary)
//       VALUES (?, ?, ?, ?)
//     `;
//     const [result] = await pool.query(query, [employeeId, hoursWorked, leaveDeductions, finalSalary]); // Use promise-based query
//     return result;
//   } catch (err) {
//     throw err;
//   }
// };

export { getAllPayrollInfoM, 
  // getEmployeePayrollM, 
  // addPayrollEntryM 
};
