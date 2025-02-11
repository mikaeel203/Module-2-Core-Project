import { pool } from '../config/db.js';


const getEmployees = async () => {
    try {
        let [data] = await pool.query(`
            SELECT 
                e.employee_id, 
                e.name, 
                e.email, 
                d.department_name, 
                p.position_name, 
                p.salary, 
                COALESCE(eh.details, 'No history available') AS employment_history
            FROM Employees e
            JOIN Department d ON e.department_id = d.department_id
            JOIN Position p ON e.position_id = p.position_id
            LEFT JOIN Employment_History eh ON e.employee_id = eh.employee_id
        `);
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

const getSinglePosition = async(p_name)=>{
    let [[{position_id}]] = await pool.query('SELECT position_id FROM position WHERE position_name = ?',[p_name])
    return position_id
}

const getSingleDepartment = async(d_name)=>{
    let [[{department_id}]] = await pool.query('SELECT department_id FROM department WHERE department_name = ?',[d_name])
    return department_id
}

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

export { getEmployees, deleteEmployee , updateEmployee, addNewEmployee, getSinglePosition, getSingleDepartment };
