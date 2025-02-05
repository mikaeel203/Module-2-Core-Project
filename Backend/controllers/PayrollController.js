//PAYROLL CONTROLLER

import mysql from "mysql2";

// DATABASE SETUP

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*PASSWORD", 
  database: "moderntech_db", 
});

db.connect((err) => {
  if (err) throw err;
  console.log("CONNECTED SUCCESSFULLY TO DB");
});

// GETTING PAYROLL INFORMATION FOR ALL EMPLOYEES

const getPayrollInfo = () => {
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

export {
  getPayrollInfo,
  getEmployeePayroll,
  addPayrollEntry,
};
``
