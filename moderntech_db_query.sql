drop schema if exists moderntech_db;
CREATE SCHEMA `moderntech_db` ;
use moderntech_db;

CREATE TABLE Position (
    position_id INT PRIMARY KEY AUTO_INCREMENT,
    position_name VARCHAR(100) UNIQUE NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);

CREATE TABLE Department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    position_id INT,
    email VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department(department_id),
    FOREIGN KEY (position_id) REFERENCES Position (position_id)
);


CREATE TABLE Employment_History (
    employee_id INT,
    start_date YEAR NOT NULL,
    details TEXT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id) ON DELETE CASCADE
);

CREATE TABLE Payroll (
    payroll_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    hours_worked INT NOT NULL,
    leave_deductions INT NOT NULL,
    final_salary DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id) ON DELETE CASCADE
);

CREATE TABLE Attendance (
    employee_id INT,
    date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id) ON DELETE CASCADE
);

CREATE TABLE Leave_Requests (
    employee_id INT,
    date DATE NOT NULL,
    reason VARCHAR(255) NOT NULL,
    status ENUM('Approved', 'Pending', 'Denied') NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id) ON DELETE CASCADE
);


-- DATA INSERTED INTO TABLES

-- Insert Positions
INSERT INTO Position (position_name, salary) VALUES
('Software Engineer', 70000),
('HR Manager', 80000),
('Quality Analyst', 55000),
('Sales Representative', 60000),
('Marketing Specialist', 58000),
('UI/UX Designer', 65000),
('DevOps Engineer', 72000),
('Content Strategist', 56000),
('Accountant', 62000),
('Customer Support Lead', 58000);

-- Insert Departments
INSERT INTO Department (department_name) VALUES
('Development'),
('HR'),
('QA'),
('Sales'),
('Marketing'),
('Design'),
('IT'),
('Finance'),
('Support');

-- Insert Employees
INSERT INTO Employees (employee_id, name, department_id, position_id, email) VALUES
(1, 'Sibongile Nkosi', (SELECT department_id FROM Department WHERE department_name='Development'), 
    (SELECT position_id FROM Position WHERE position_name='Software Engineer'), 'sibongile.nkosi@moderntech.com'),
(2, 'Lungile Moyo', (SELECT department_id FROM Department WHERE department_name='HR'), 
    (SELECT position_id FROM Position WHERE position_name='HR Manager'), 'lungile.moyo@moderntech.com'),
(3, 'Thabo Molefe', (SELECT department_id FROM Department WHERE department_name='QA'), 
    (SELECT position_id FROM Position WHERE position_name='Quality Analyst'), 'thabo.molefe@moderntech.com'),
(4, 'Keshav Naidoo', (SELECT department_id FROM Department WHERE department_name='Sales'), 
    (SELECT position_id FROM Position WHERE position_name='Sales Representative'), 'keshav.naidoo@moderntech.com'),
(5, 'Zanele Khumalo', (SELECT department_id FROM Department WHERE department_name='Marketing'), 
    (SELECT position_id FROM Position WHERE position_name='Marketing Specialist'), 'zanele.khumalo@moderntech.com'),
(6, 'Sipho Zulu', (SELECT department_id FROM Department WHERE department_name='Design'), 
    (SELECT position_id FROM Position WHERE position_name='UI/UX Designer'), 'sipho.zulu@moderntech.com'),
(7, 'Naledi Moeketsi', (SELECT department_id FROM Department WHERE department_name='IT'), 
    (SELECT position_id FROM Position WHERE position_name='DevOps Engineer'), 'naledi.moeketsi@moderntech.com'),
(8, 'Farai Gumbo', (SELECT department_id FROM Department WHERE department_name='Marketing'), 
    (SELECT position_id FROM Position WHERE position_name='Content Strategist'), 'farai.gumbo@moderntech.com'),
(9, 'Karabo Dlamini', (SELECT department_id FROM Department WHERE department_name='Finance'), 
    (SELECT position_id FROM Position WHERE position_name='Accountant'), 'karabo.dlamini@moderntech.com'),
(10, 'Fatima Patel', (SELECT department_id FROM Department WHERE department_name='Support'), 
    (SELECT position_id FROM Position WHERE position_name='Customer Support Lead'), 'fatima.patel@moderntech.com');

-- Insert Employment History
INSERT INTO Employment_History (employee_id, start_date, details) VALUES
(1, 2015, 'Joined in 2015, promoted to Senior in 2018'),
(2, 2013, 'Joined in 2013, promoted to Manager in 2017'),
(3, 2018, 'Joined in 2018'),
(4, 2020, 'Joined in 2020'),
(5, 2019, 'Joined in 2019'),
(6, 2016, 'Joined in 2016'),
(7, 2017, 'Joined in 2017'),
(8, 2021, 'Joined in 2021'),
(9, 2018, 'Joined in 2018'),
(10, 2016, 'Joined in 2016');

-- Insert Attendance Records
INSERT INTO Attendance (employee_id, date, status) VALUES
(1, '2024-11-25', 'Present'), (1, '2024-11-26', 'Absent'), (1, '2024-11-27', 'Present'), 
(1, '2024-11-28', 'Present'), (1, '2024-11-29', 'Present'),

(2, '2024-11-25', 'Present'), (2, '2024-11-26', 'Present'), (2, '2024-11-27', 'Absent'), 
(2, '2024-11-28', 'Present'), (2, '2024-11-29', 'Present'),

(3, '2024-11-25', 'Present'), (3, '2024-11-26', 'Present'), (3, '2024-11-27', 'Present'), 
(3, '2024-11-28', 'Absent'), (3, '2024-11-29', 'Present'),

(4, '2024-11-25', 'Absent'), (4, '2024-11-26', 'Present'), (4, '2024-11-27', 'Present'), 
(4, '2024-11-28', 'Present'), (4, '2024-11-29', 'Present');

-- Insert Leave Requests
INSERT INTO Leave_Requests (employee_id, date, reason, status) VALUES
(1, '2024-11-22', 'Sick Leave', 'Approved'),
(1, '2024-12-01', 'Personal', 'Pending'),

(2, '2024-11-15', 'Family Responsibility', 'Denied'),
(2, '2024-12-02', 'Vacation', 'Approved'),

(3, '2024-11-10', 'Medical Appointment', 'Approved'),
(3, '2024-12-05', 'Personal', 'Pending'),

(4, '2024-11-20', 'Bereavement', 'Approved');

-- Insert Payroll Data
INSERT INTO Payroll (employee_id, hours_worked, leave_deductions, final_salary) VALUES
(1, 160, 8, 69500),
(2, 150, 10, 79000),
(3, 170, 4, 54800),
(4, 165, 6, 59700),
(5, 158, 5, 57850),
(6, 168, 2, 64800),
(7, 175, 3, 71800),
(8, 160, 0, 56000),
(9, 155, 5, 61500),
(10, 162, 4, 57750);
