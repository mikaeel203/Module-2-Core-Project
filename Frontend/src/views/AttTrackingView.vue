<template>
  <div>
    <br />
    <div class="d-flex">
      <!-- Sidebar -->
      <div
        class="nav flex-column nav-pills bg-light"
        style="width: 200px; height: 100vh"
      >
        <!--CALENDER LINK-->
        <a
          class="nav-link"
          :class="{ active: activeTab === 'calendar' }"
          href="#"
          @click.prevent="setActiveTab('calendar')"
          >Calender</a
        >
        <!--ATTENDENCE LINK-->
        <a
          class="nav-link"
          :class="{ active: activeTab === 'attendence' }"
          href="#"
          @click.prevent="setActiveTab('attendence')"
          >Attendance</a
        >
        <!-- REQUEST LEAVE LINK-->
        <a
          class="nav-link"
          :class="{ active: activeTab === 'leaveRequests' }"
          href="#"
          @click.prevent="setActiveTab('leaveRequests')"
          >Leave requests</a
        >
        <!--HISTORY LINK-->
        <a
          class="nav-link"
          :class="{ active: activeTab === 'history' }"
          href="#"
          @click.prevent="setActiveTab('history')"
          >History</a
        >
      </div>

      <!-- Main content -->
      <div class="container">
        <!-- <h1>Welcome to the main content area <br>
           {{ employeeAttendenceAndLeave[0] }} 
        </h1> -->

        <!-- Conditional Rendering Based on Active Tab -->
        <div v-if="activeTab === 'calendar'">
          <CalenderComp :employees="chupapi" />
        </div>
        <div v-if="activeTab === 'attendence'">
          <AttendenceOfEmployees :employees="chupapi" />
          <!-- content for leave requests here -->
        </div>
        <div v-if="activeTab === 'leaveRequests'">
          <LeaveRequestComp :employees="chupapi" />
          <!-- content for attendence here -->
        </div>
        <div v-if="activeTab === 'history'">
          <!-- <h2>History Content</h2> ADDED CONTENT HERE-->
          <HistoryLeaveReqComp :employees="chupapi" />
          <!-- content for history here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AttendenceOfEmployees from "@/components/attendenceOfEmployees.vue";
import CalenderComp from "@/components/CalenderComp.vue";
import HistoryLeaveReqComp from "@/components/historyLeaveReqComp.vue";
import LeaveRequestComp from "@/components/leaveRequestComp.vue";

export default {
  components: {
    CalenderComp,
    HistoryLeaveReqComp,
    LeaveRequestComp,
    AttendenceOfEmployees,
  },
  data() {
    return {
      activeTab: "calendar", // Default active tab is Calendar
      // employeeAttendenceAndLeave: [],
      // attendanceAndLeave: [],
      chupapi:[]
    };
  },
  methods: {
    setActiveTab(tabName) {
      // Sets the active tab based on clicked link
      this.activeTab = tabName;
    },

    // transformData(rawData) {
    //   // Group data by employee_id
    //   const groupedData = rawData.reduce((acc, record) => {
    //     const employeeId = record.employee_id;

    //     // Initialize the employee object if it doesn't exist
    //     if (!acc[employeeId]) {
    //       acc[employeeId] = {
    //         employeeId: employeeId,
    //         name: record.employee_name,
    //         attendance: [],
    //         leaveRequests: [],
    //       };
    //     }

    //     // Add attendance record if it exists
    //     if (record.attendance_date && record.attendance_status) {
    //       acc[employeeId].attendance.push({
    //         date: record.attendance_date.split("T")[0], // Extract date part only
    //         status: record.attendance_status,
    //       });
    //     }

    //     // Add leave request record if it exists
    //     if (record.leave_date && record.leave_reason && record.leave_status) {
    //       acc[employeeId].leaveRequests.push({
    //         date: record.leave_date.split("T")[0], // Extract date part only
    //         reason: record.leave_reason,
    //         status: record.leave_status,
    //       });
    //     }

    //     return acc;
    //   }, {});

    //   // Convert the grouped data into an array
    //   this.attendanceAndLeave = Object.values(groupedData);
    // },
  },

  computed: {
    // getEmployeeAttendenceAndLeave(){
    //   return this.$store.state.attendanceAndLeave
    // }
    rawDataAtt() {
      return this.$store.state.attendanceRecordObj;
    },
    rawDataLeaveReq() {
      return this.$store.state.LeaveReqnHistoryObj;
    },

    // convertedData() {
    //   return this.rawData;
    // },
    // cloneData() {
    //   this.employeeAttendenceAndLeave = this.attendanceAndLeave;
    // },
  },
  async mounted() {
    // this.cloneData()
    // this.transformData(this.rawData)
    //     {
    //     "employee_name": "Sibongile Nkosi",
    //     "employee_id": 1,
    //     "attendance_date": "2024-11-24T22:00:00.000Z",
    //     "attendance_status": "Present",
    //     "leave_date": "2024-11-21T22:00:00.000Z",
    //     "leave_reason": "Sick Leave",
    //     "leave_status": "Approved"
    // }

    // ATTEMPT 2
    // await this.$store.dispatch("getAttendanceRecord");
    // console.log(this.chupapi,
    //   this.convertedData.map((employee) => {
    //     return {
    //       employeeId: employee.employee_id,
    //       name: employee.employee_name,
    //       attendance: [
    //         {
    //           date: employee.attendance_date?.split("T")[0],
    //           status: employee.attendance_status,
    //         },
    //       ],
    //       leaveRequests: [
    //         {
    //           date: employee.leave_date,
    //           reason: employee.leave_reason,
    //           status: employee.attendance_status
    //         },
    //       ],
    //     };
    //   }).forEach(e => {
    //     for(let x of [e]){
    //       console.log(x);
    //       let bool = this.chupapi.findIndex(e => e.employee_id === x.employee_id)
    //       if(bool == -1){
    //         this.chupapi.push(x)
    //       } else{
    //         this.chupapi[bool].attendance.push(x.attendance[0])
    //         this.chupapi[bool].leaveRequests.push(x.leaveRequests[0])
    //       }
    //     }
        
    //   })
    // );


    await this.$store.dispatch("getAttendanceRecord");
await this.$store.dispatch("getLeaveReqnHistory");

console.log("Raw Attendance Data:", this.rawDataAtt);  
console.log("Raw Leave Data:", this.rawDataLeaveReq);

const attendanceData = this.rawDataAtt || [];  
const leaveData = this.rawDataLeaveReq || [];

let groupedEmployees = {};

// Process attendance records
attendanceData.forEach(record => {
  console.log("Processing Attendance Record:", record); // Debug log
  const { employeeId, name, date, status } = record;

  if (!employeeId) {
    console.warn("Missing employeeId in attendance record:", record);
    return; // Skip records with no ID
  }

  if (!groupedEmployees[employeeId]) {
    groupedEmployees[employeeId] = {
      employeeId: employeeId,
      name: name || "Unknown",
      attendance: [],
      leaveRequests: [],
    };
  }

  let formattedDate = date?.split("T")[0] || "";
  if (formattedDate) {
    groupedEmployees[employeeId].attendance.push({
      date: formattedDate,
      status: status || "Unknown",
    });
  }
});

// Process leave requests
leaveData.forEach(request => {
  console.log("Processing Leave Request:", request); // Debug log
  const { employeeId, name, date, reason, status } = request;

  if (!employeeId) {
    console.warn("Missing employeeId in leave request:", request);
    return; // Skip records with no ID
  }

  if (!groupedEmployees[employeeId]) {
    groupedEmployees[employeeId] = {
      employeeId: employeeId,
      name: name || "Unknown",
      attendance: [],
      leaveRequests: [],
    };
  }

  let formattedLeaveDate = date?.split("T")[0] || "";
  if (formattedLeaveDate) {
    groupedEmployees[employeeId].leaveRequests.push({
      date: formattedLeaveDate,
      reason: reason || "No Reason",
      status: status || "Pending",
    });
  }
});

// Convert object to array
this.chupapi = Object.values(groupedEmployees);
console.log("Final Processed Data:", this.chupapi);
}



  
};  
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

/* Sidebar Styling */
.nav-pills {
  /* display: flex; */
  /* flex-direction: column; */
  background-color: #f8f9fa;
  /* padding-top: 20px; */
  /* padding-left: 10px; */
  border-radius: 8px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
}

.nav-pills .nav-link {
  font-size: 1em;
  font-weight: 500;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-pills .nav-link:hover {
  background-color: #ddd;
}

.nav-pills .nav-link.active {
  background-color: #1e2a3a;
  color: white;
  /* font-weight: 600; */
}

/* .nav-pills .nav-link:focus {
  outline: none;
} */

/* Main Content Container */
.container {
  width: 70rem;
  margin-left: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.d-flex {
  display: flex;
}

br {
  margin-bottom: 20px;
}

/* Laptop (1024px) */
@media (max-width: 1024px) {
  .container {
    width: 90%;
    padding: 15px;
  }

  body {
    font-size: 15px;
  }
}

/* Tablet (768px) */
@media (max-width: 768px) {
  .container {
    width: 95%;
    padding: 10px;
  }

  body {
    font-size: 14px;
  }

  .header {
    font-size: 18px;
    text-align: center;
  }
}

/* Mobile L (425px) */
@media (max-width: 425px) {
  .container {
    width: 100%;
    padding: 5px;
  }

  body {
    font-size: 13px;
  }

  .header {
    font-size: 16px;
  }

  .button {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
}

/* Mobile M (375px) */
@media (max-width: 375px) {
  body {
    font-size: 12px;
  }

  .header {
    font-size: 14px;
  }

  .button {
    font-size: 13px;
    padding: 8px;
  }
}

/* Mobile S (320px) */
@media (max-width: 320px) {
  body {
    font-size: 11px;
  }

  .header {
    font-size: 12px;
  }

  .button {
    font-size: 12px;
    padding: 6px;
  }
}
</style>
