<template>
  <div class="about">
    <h2  style="font-family: 'Roboto', sans-serif;">Payroll
    </h2>
    
    <!-- Search Bar -->
    <input type="text" v-model="searchQuery" class="form-control mb-4" placeholder="Search by Name or Department..." />

    <div id="app" class="container mt-4">
      <div class="row justify-content-center">

        <!-- Loop through filtered employee array -->
        <div v-for="(employee) in filteredEmployeeData" class="col-lg-4 mb-3">
          <!-- {{employee}} -->
          <div class="card"> <!--'instance' created -->
            <div class="card-body">
              <h5 class="card-title">{{ employee.name }} - {{ employee.department }}</h5>
              <p>Hours Worked: {{ employee.hoursWorked }}</p>
              <p>Leave Deductions: {{ employee.leaveDeductions }}</p>

              <!-- <view-payslips-comp :employee="employee" :modal-id="'modal-' + employee.employeeId"/> -->
              <view-payslips-comp :employee="employee || {}" :modal-id="'modal-' + (employee?.employeeId || 0)"/>

            </div>
          </div>
        </div>

      </div>
    </div>

    <button @click="sendPaySlips()">Send Payslips</button>
    <!-- progress bar -->
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" :style="'width: ' + progress + '%'"></div>
</div>

    
  </div>
</template>

<script>
import ViewPayslipsComp from '@/components/viewPayslipsComp.vue';

export default {
  data() {
    return {
      fullEmployeePayrollData: [], // Full payroll data with employee names
      searchQuery: '', // For search filtering
      progress: 0,
    };
  },

  computed: {
    payrollData() {
      return this.$store.state.payrollObj;
    },

    filteredEmployeeData() {
      return this.fullEmployeePayrollData.filter(employee => {
        const query = this.searchQuery.toLowerCase();
        return (
          employee.name.toLowerCase().includes(query) ||
          employee.department.toLowerCase().includes(query)
        );
      });
    }
  },

  methods: {
    sendPaySlips() {
      this.startLoading();
    },

    startLoading() {
      let interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 25; // Increment by 25%
        } else {
          clearInterval(interval); // Stop interval when 100% is reached
          alert('All payslips sent to employees');
        }
      }, 1000);
    },

    updatePayrollData() {
  if (Array.isArray(this.payrollData) && this.payrollData.length > 0) {
    this.fullEmployeePayrollData = [...this.payrollData];
  } else {
    this.fullEmployeePayrollData = [];
  }
}
  },

  watch: {
    payrollData: {
      handler() {
        this.updatePayrollData();
      },
      immediate: true, // Runs when component is first mounted
      deep: true, // Watches for deep changes
    },
  },

  components: {
    ViewPayslipsComp,
  },

  async mounted() {
    await this.$store.dispatch("getPayroll");
    console.log("Payroll Data after fetch:", this.payrollData);
  }
};
</script>


<style scoped>
.about {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

input.form-control {
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.container {
  width: 1200px;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease;
}

/* .card:hover {
  transform: translateY(-5px);
} */

.card-body {
  padding: 20px;
} 

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
}

.card p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;
  display: block;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:focus {
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
}

.progress {
  background-color: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  height: 20px;
  margin-top: 20px;
}

.progress-bar {
  background-color: #007bff;
  height: 100%;
  transition: width 0.4s ease;
}

.mb-3, .mb-4 {
  margin-bottom: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.row {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.col-lg-4 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
