<template>
    <div>
      <h2 style="font-family: 'Roboto', sans-serif;">Attendance of Employees   </h2>
  
      <!-- <p>
        {{ $store.state.LeaveReqnHistoryObj }}
        <br>
        <br>
        <br>
        {{ employees }}
      </p> -->

      <!-- Search Bar -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search employees by name or ID..."
        style="width: 67em;"
      /> <br> <br>
  
      <div class="row">
        <!-- Loop through filtered employees and create a card for each -->
        <div
          class="col-md-6 mb-4"
          v-for="employee in filteredEmployees"
          :key="employee.employeeId"
        >
          <div class="card">
            <div class="card-header">
              <strong>{{ employee.name }}</strong> (Employee ID: {{ employee.employeeId }})
            </div>
            <ul class="list-group list-group-flush">
              <!-- Present Dates -->
              <li class="list-group-item">
                <strong>Present dates:</strong>
                <div v-for="attendance in employee.attendance" :key="attendance.date">
                  <div v-if="attendance.status === 'Present'">
                    {{ attendance.date }}
                  </div>
                </div>
              </li>
              <!-- Absent Dates -->
              <li class="list-group-item">
                <strong>Absent dates:</strong>
                <div v-for="attendance in employee.attendance" :key="attendance.date">
                  <div v-if="attendance.status === 'Absent'">
                    {{ attendance.date }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      
    </div>
  </template>
  
  <script>
  export default {
    props: ["employees"],
    data() {
      return {
        searchQuery: "", // Holds the users search input
      };
    },
    computed: {
      // Filter employees based on the search query
      filteredEmployees() {
        const query = this.searchQuery.toLowerCase();
        return this.employees.filter((employee) =>
            employee.name.toLowerCase().includes(query) ||
            employee.employeeId.toString().includes(query)
        );
      },
    },
    // BACKEND ADDED HERE
    mounted(){
      // this.$store.dispatch('getAttendanceRecord')
    }
  };
  </script>
  
  <style scoped>
/* General layout */
h2 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-header {
  background-color: #f7f7f7;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #ddd;
}

.card-header strong {
  font-size: 1.2rem;
}

.list-group-item {
  padding: 12px;
  font-size: 1rem;
  color: #555;
  border-bottom: 1px solid #f1f1f1;
}

.list-group-item:last-child {
  border-bottom: none;
}

.list-group-item strong {
  color: #333;
  font-weight: bold;
}

.list-group-item div {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #666;
}

/* Styling for the "Present" dates */
.list-group-item div[v-if="attendance.status === 'Present'"] {
  color: #28a745; /* Green for present dates */
}

/* Styling for the "Absent" dates */
.list-group-item div[v-if="attendance.status === 'Absent'"] {
  color: #dc3545; /* Red for absent dates */
}

.mb-4 {
  margin-bottom: 20px !important;
}
</style>
