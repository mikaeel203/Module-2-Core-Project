import { createStore } from 'vuex'

export default createStore({
  state: {
    attendanceAndLeave: [  //ATTENDENCE AND LEAVE
        {
            "employeeId": 1,
            "name": "Sibongile Nkosi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                        "date": "2024-11-22",
                        "reason": "Sick Leave",
                        "status": "Approved"
                },
                {
                    "date": "2024-12-01",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 2,
            "name": "Lungile Moyo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-15",
                    "reason": "Family Responsibility",
                    "status": "Denied"
                },
                {
                    "date": "2024-12-02",
                    "reason": "Vacation",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-10",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-05",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-20",
                    "reason": "Bereavement",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-01",
                    "reason": "Childcare",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-18",
                    "reason": "Sick Leave",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-22",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-02",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-19",
                    "reason": "Childcare",
                    "status": "Denied"
                }
            ]
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-03",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        }
    ],
    employeeInformation: [  //THIS IS THE EMPLOYEE INFO
      {
          "employeeId": 1,
          "name": "Sibongile Nkosi",
          "position": "Software Engineer",
          "department": "Development",
          "salary": 70000,
          "employmentHistory": "Joined in 2015, promoted to Senior in 2018",
          "contact": "sibongile.nkosi@moderntech.com"
      },
      {
          "employeeId": 2,
          "name": "Lungile Moyo",
          "position": "HR Manager",
          "department": "HR",
          "salary": 80000,
          "employmentHistory": "Joined in 2013, promoted to Manager in 2017",
          "contact": "lungile.moyo@moderntech.com"
      },
      {
          "employeeId": 3,
          "name": "Thabo Molefe",
          "position": "Quality Analyst",
          "department": "QA",
          "salary": 55000,
          "employmentHistory": "Joined in 2018",
          "contact": "thabo.molefe@moderntech.com"
      },
      {
          "employeeId": 4,
          "name": "Keshav Naidoo",
          "position": "Sales Representative",
          "department": "Sales",
          "salary": 60000,
          "employmentHistory": "Joined in 2020",
          "contact": "keshav.naidoo@moderntech.com"
      },
      {
          "employeeId": 5,
          "name": "Zanele Khumalo",
          "position": "Marketing Specialist",
          "department": "Marketing",
          "salary": 58000,
          "employmentHistory": "Joined in 2019",
          "contact": "zanele.khumalo@moderntech.com"
      },
      {
          "employeeId": 6,
          "name": "Sipho Zulu",
          "position": "UI/UX Designer",
          "department": "Design",
          "salary": 65000,
          "employmentHistory": "Joined in 2016",
          "contact": "sipho.zulu@moderntech.com"
      },
      {
          "employeeId": 7,
          "name": "Naledi Moeketsi",
          "position": "DevOps Engineer",
          "department": "IT",
          "salary": 72000,
          "employmentHistory": "Joined in 2017",
          "contact": "naledi.moeketsi@moderntech.com"
      },
      {
          "employeeId": 8,
          "name": "Farai Gumbo",
          "position": "Content Strategist",
          "department": "Marketing",
          "salary": 56000,
          "employmentHistory": "Joined in 2021",
          "contact": "farai.gumbo@moderntech.com"
      },
      {
          "employeeId": 9,
          "name": "Karabo Dlamini",
          "position": "Accountant",
          "department": "Finance",
          "salary": 62000,
          "employmentHistory": "Joined in 2018",
          "contact": "karabo.dlamini@moderntech.com"
      },
      {
          "employeeId": 10,
          "name": "Fatima Patel",
          "position": "Customer Support Lead",
          "department": "Support",
          "salary": 58000,
          "employmentHistory": "Joined in 2016",
          "contact": "fatima.patel@moderntech.com"
      }
  ],
  payrollData: [ //PAYROLL DATA -- just objects
    {
        "employeeId": 1,
        "hoursWorked": 160,
        "leaveDeductions": 8,
        "finalSalary": 69500
    },
    {
        "employeeId": 2,
        "hoursWorked": 150,
        "leaveDeductions": 10,
        "finalSalary": 79000
    },
    {
        "employeeId": 3,
        "hoursWorked": 170,
        "leaveDeductions": 4,
        "finalSalary": 54800
    },
    {
        "employeeId": 4,
        "hoursWorked": 165,
        "leaveDeductions": 6,
        "finalSalary": 59700
    },
    {
        "employeeId": 5,
        "hoursWorked": 158,
        "leaveDeductions": 5,
        "finalSalary": 57850
    },
    {
        "employeeId": 6,
        "hoursWorked": 168,
        "leaveDeductions": 2,
        "finalSalary": 64800
    },
    {
        "employeeId": 7,
        "hoursWorked": 175,
        "leaveDeductions": 3,
        "finalSalary": 71800
    },
    {
        "employeeId": 8,
        "hoursWorked": 160,
        "leaveDeductions": 0,
        "finalSalary": 56000
    },
    {
        "employeeId": 9,
        "hoursWorked": 155,
        "leaveDeductions": 5,
        "finalSalary": 61500
    },
    {
        "employeeId": 10,
        "hoursWorked": 162,
        "leaveDeductions": 4,
        "finalSalary": 57750
    }
], 
    attendanceRecordObj : null,
    LeaveReqnHistoryObj :null,
    payrollObj :null,

  },
  getters: {
  },
  mutations: {
    setAttendanceRecord(state, payload){
        state.attendanceRecordObj = payload
    },
    setLeaveReqnHistory(state, payload){
        state.LeaveReqnHistoryObj = payload
    }, 
    setPayroll (state, payload){
        state.payrollObj = payload
    },
    setEmployees(state, payload) {
      state.employees = payload;
    },
    addEmployee(state, employee){
      state.employees.push(employee)
    }
  },
  actions: {
    //FOR THE ATTENDANCE RECORD
    async getAttendanceRecord({commit}, payload){
        let {attendanceRecord} = await (await fetch ("http://localhost:3000/attendance/record")).json()
        commit('setAttendanceRecord', attendanceRecord)
    },
    //FOR THE LEAVE REQ AND HISTORY
    async getLeaveReqnHistory({commit}, payload){
        let {leaveRequests} = await (await fetch ("http://localhost:3000/attendance/leaveRequests_history")).json()
        commit('setLeaveReqnHistory', leaveRequests)
    },
    //FOR THE PAYROLL
    async getPayroll({commit}, payload){
        let {payroll} = await (await fetch ("http://localhost:3000/payroll")).json()
        commit('setPayroll', payroll)
    },
    



    async getData({ commit }) {
      let { employees } = await (await fetch('http://localhost:3000/employees')).json();
      commit('setEmployees', employees);
    },
    async deleteEmployee({ commit }, employee_id) {
      await fetch(`http://localhost:3000/employees/${employee_id}`, { method: 'DELETE' });
      location.reload();
    },
    // async postEmployee({ commit }, employee) {
    //   await fetch('http://localhost:3000/employees/', {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       employee_id: employee.employee_id,
    //       name: employee.name,
    //       position_name: employee.position_name, // Backend will get position_id
    //       department_name: employee.department_name, // Backend will get department_id
    //       salary: employee.salary,
    //       email: employee.email
    //     })
    //   });
    //   location.reload();
    // },    
    async postEmployee({ commit }, employee) {
      try {
        const response = await fetch('http://localhost:3000/employees/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            employee_id: employee.employee_id,
            name: employee.name,
            position_id: employee.position_id, // Send the position ID, not position_name
            department_id: employee.department_id, // Send the department ID, not department_name
            salary: employee.salary,
            email: employee.email,
          }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
    
        const data = await response.json();
        commit('addEmployee', data.employee); // Commit the new employee to the store
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },
    async updateEmployee({ commit }, { employee_id, updatedData }) {
      await fetch(`http://localhost:3000/employees/${employee_id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: updatedData.name,
          department_id: updatedData.department_id,
          department_name: updatedData.department_name,
          position_id: updatedData.position_id,
          position_name: updatedData.position_name,
          email: updatedData.email
        })
      });
      location.reload();
    }
  },
  modules: {}
});