import { pool } from '../db.js';

const getEmployees = async () => {
    try {
        let [data] = await pool.query('SELECT * FROM Employees');
        return data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

const addNewEmployee = async (employee_id, name, department_id, position_id, email) => {
    try {
        await pool.query(
            'INSERT INTO Employees (`employee_id`, `name`, `department_id`, `position_id`, `email`) VALUES (?, ?, ?, ?, ?)',
            [employee_id, name, department_id, position_id, email]
        );
        return await getEmployees();
    } catch (error) {
        console.error('Error adding new employee:', error);
        throw error;
    }
};

const deleteEmployee = async (employee_id) => {
    try {
        let [data] = await pool.query('DELETE FROM Employees WHERE employee_id = ?', [employee_id]);
        return data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};

const updateEmployee = async (employee_id, name, department_id, position_id, email) => {
    try {
        await pool.query(
            'UPDATE `moderntech_db`.`employees` SET `name` = ?, `department_id` = ?, `position_id` = ?, `email` = ? WHERE `employee_id` = ?',
            [name, department_id, position_id, email, employee_id]
        );
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

export { getEmployees,  deleteEmployee, addNewEmployee, updateEmployee };