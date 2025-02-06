//

import {getAllPayrollInfo, getEmployeePayroll, addPayrollEntry} from "../PayrollModel.js";


// GETTING PAYROLL INFORMATION FOR ALL EMPLOYEES

const getAllPayrollInfoM = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        e.employee_id, e.name, p.position_name, e.email,
        pr.hours_worked, pr.leave_deductions, pr.final_salary
      FROM Employees e
      JOIN Position p ON e.position_id = p.position_id
      JOIN Payroll pr ON e.employee_id = pr.employee_id
    `;
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// GETTING PAYROLL INFORMATION FOR A SPECIFIC EMPLOYEE 

const getEmployeePayroll = (employeeId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        e.employee_id, e.name, p.position_name, e.email,
        pr.hours_worked, pr.leave_deductions, pr.final_salary
      FROM Employees e
      JOIN Position p ON e.position_id = p.position_id
      JOIN Payroll pr ON e.employee_id = pr.employee_id
      WHERE e.employee_id = ?
    `;
    db.query(query, [employeeId], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// INSERTING NEW PAYROLL RECORD IN THE DB FOR SPECIFIC EMPLOYEE 

const addPayrollEntry = (employeeId, hoursWorked, leaveDeductions, finalSalary) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO Payroll (employee_id, hours_worked, leave_deductions, final_salary)
      VALUES (?, ?, ?, ?)
    `;
    db.query(query, [employeeId, hoursWorked, leaveDeductions, finalSalary], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export {getAllPayrollInfoM , getEmployeePayroll, addPayrollEntry};


