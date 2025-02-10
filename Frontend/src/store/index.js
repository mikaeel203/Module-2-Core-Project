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
// create variables to fetch data
    employees:null

  },
  getters: {
  },
  mutations: {
    setEmployees(state,payload){
        state.employees = payload
    }
  },
  actions: {
    // integrate employee backend with frontend
    // Get information of all employees
    async getData({commit}, payload){
        let {employees} = await (await fetch('http://localhost:3000/employees')).json()
        commit('setEmployees', employees)
    },
    // delete employee
    async deleteEmployee({commit}, employee_id){
        await fetch('http://localhost:3000/employees/'+employee_id,{
            method:'DELETE'
        })
        location.reload()
    },
    // add new employee
    async postEmployee({commit},employee){
        await fetch('http://localhost:3000/employees/',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:employee.name,
                employee_id:employee.employee_id,
                position_name:employee.position_name,
                department_name:employee.department_name,
                salary:employee.salary,
                employment_history:employee.employment_history,
                email:employee.email
            })
        })
        location.reload()    
    },
    // Edit employee information
    async updateEmployee({commit}, {employee_id, updatedData}){
        await fetch('http://localhost:3000/employees/'+employee_id,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        location.reload()
    }
  },
  modules: {
  }
})
