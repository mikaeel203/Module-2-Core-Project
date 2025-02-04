<template>
  <div>
    <br>
    <div class="d-flex">
      <!-- Sidebar -->
      <div class="nav flex-column nav-pills bg-light" style="width: 200px; height: 100vh;">
        
        <!--CALENDER LINK-->
        <a class="nav-link" 
           :class="{ active: activeTab === 'calendar' }" 
           href="#" 
           @click.prevent="setActiveTab('calendar')">Calender</a>
        <!--ATTENDENCE LINK-->
        <a class="nav-link" 
           :class="{ active: activeTab === 'attendence' }" 
           href="#" 
           @click.prevent="setActiveTab('attendence')">Attendance</a>
        <!-- REQUEST LEAVE LINK-->
        <a class="nav-link" 
           :class="{ active: activeTab === 'leaveRequests' }" 
           href="#" 
           @click.prevent="setActiveTab('leaveRequests')">Leave requests</a>
        <!--HISTORY LINK-->
        <a class="nav-link" 
           :class="{ active: activeTab === 'history' }" 
           href="#" 
           @click.prevent="setActiveTab('history')">History</a>       
      </div>

      <!-- Main content -->
      <div class="container">
        <!-- <h1>Welcome to the main content area <br>
           {{ employeeAttendenceAndLeave[0] }} 
        </h1> -->

        <!-- Conditional Rendering Based on Active Tab -->
        <div v-if="activeTab === 'calendar'">
          <CalenderComp :employees="employeeAttendenceAndLeave"/>
        </div>
        <div v-if="activeTab === 'attendence'">
          <AttendenceOfEmployees :employees="employeeAttendenceAndLeave"/>
          <!-- content for leave requests here -->
        </div>
        <div v-if="activeTab === 'leaveRequests'">
          <LeaveRequestComp :employees="employeeAttendenceAndLeave"/>
          <!-- content for attendence here -->
        </div>
        <div v-if="activeTab === 'history'">
          <!-- <h2>History Content</h2> ADDED CONTENT HERE-->
          <HistoryLeaveReqComp :employees="employeeAttendenceAndLeave"/>
          <!-- content for history here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AttendenceOfEmployees from '@/components/attendenceOfEmployees.vue';
import CalenderComp from '@/components/CalenderComp.vue';
import HistoryLeaveReqComp from '@/components/historyLeaveReqComp.vue';
import LeaveRequestComp from '@/components/leaveRequestComp.vue';

export default {
  components: {
    CalenderComp, HistoryLeaveReqComp, LeaveRequestComp, AttendenceOfEmployees
  },
  data() {
    return {
      activeTab: 'calendar', // Default active tab is Calendar
      employeeAttendenceAndLeave : []
    };
  },
  methods: {
    setActiveTab(tabName) {  // Sets the active tab based on clicked link
      this.activeTab = tabName; 
    },
    cloneData(){
      this.employeeAttendenceAndLeave = this.getEmployeeAttendenceAndLeave
    }
  }, 
  computed:{
    getEmployeeAttendenceAndLeave(){
      return this.$store.state.attendanceAndLeave
    }
  },
  mounted(){
    this.cloneData()
  }
}
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
