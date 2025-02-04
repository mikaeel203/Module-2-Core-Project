<template>
    <div>
        <h2  style="font-family: 'Roboto', sans-serif;">Leave Requests Available</h2>

        <div v-for="employee in employees">

            <!-- CARD -->
            <div v-for="leaveRequest in employee.leaveRequests" :key="leaveRequest.id">
    <div v-if="leaveRequest.status === 'Pending'">
        <div class="card text-center" style="max-width: 50rem; margin: auto; border-radius: 10px;">
            <div class="card-header" style=" font-weight: bold;">
                LEAVE REQUEST
            </div>

            <div class="card-body" style="padding: 1.5rem;">
                <h5 class="card-title mb-3" style="font-size: 1.25rem; font-weight: bold;">{{ employee.name }}</h5>

                <table class="table table-bordered table-hover" style="border-radius: 20px;">
                    <thead class="table-light">
                        <tr>
                            <th style="width: 30%; text-align: center;">Date</th>
                            <th style="width: 50%; text-align: center;">Reason</th>
                            <th style="width: 20%; text-align: center;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="leaveRequest in employee.leaveRequests" :key="leaveRequest.id">
                            <td>{{ leaveRequest.date }}</td>
                            <td>{{ leaveRequest.reason }}</td>
                            <td class="d-flex justify-content-center">
                              <button 
                                  @click="buttonClicked(leaveRequest, 'Accepted')" 
                                  v-show="leaveRequest.denyAccept" 
                                  class="btn btn-success btn-sm mx-1">
                                  Accept
                              </button>
                              <button 
                                  @click="buttonClicked(leaveRequest, 'Denied')" 
                                  v-show="leaveRequest.denyAccept" 
                                  class="btn btn-danger btn-sm mx-1">
                                  Deny
                              </button>
                              <button 
                                  v-show="leaveRequest.choiceButton" 
                                  class="btn">
                                  {{ leaveRequest.strChoice }}
                              </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
<!-- 
            <div class="card-footer text-muted">
                additional info
            </div> -->
        </div>
    </div>
</div> <br>

        <!-- Card ends here -->

        </div>




    </div>
</template>

<script>
export default {
  props: ["employees"],
  data() {
    return {};
  },
  methods: {
    initializeRequests() {
      this.employees.forEach((employee) => {
        employee.leaveRequests.forEach((leaveRequest) => {
          leaveRequest.denyAccept = true;
          leaveRequest.choiceButton = false;
          leaveRequest.strChoice = "";
        });
      });
    },
    buttonClicked(leaveRequest, choice) {
      if (choice === "Accepted") {
        leaveRequest.denyAccept = !leaveRequest.denyAccept;
        leaveRequest.choiceButton = !leaveRequest.choiceButton;
        leaveRequest.strChoice = choice;
      } else if (choice === "Denied") {
        leaveRequest.denyAccept = !leaveRequest.denyAccept;
        leaveRequest.choiceButton = !leaveRequest.choiceButton;
        leaveRequest.strChoice = choice;
      }
    },
  },
  mounted() {
    this.initializeRequests();
  },
};


</script>


<style scoped>
/* General layout */
h2 {
  font-size: 2rem;
  justify-content: center;
  color: #333;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.card {
  max-width: 50rem;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-5px);

}

.card:hover .card-header{
    background-color: #007bff; 
    color: white;
}

.card-header {
  font-weight: bold;
  padding: 15px;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.table {
  width: 100%;
  margin-top: 1rem;
  border-radius: 2px;
  overflow: hidden;
}

.table-bordered {
  border: 1px solid #ddd;
}

.table-light {
  background-color: #f8f9fa;
}

.table thead th {
  text-align: left;
  font-size: 1rem;
  padding: 12px;
  color: #333;
  background-color: #f1f1f1;
}

.table tbody td {
  padding: 10px;
  font-size: 1rem;
  color: #555;
}

.table-bordered th, .table-bordered td {
  border: 1px solid #ddd;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Button styling */
button.btn {
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button.btn-success {
  background-color: #28a745;
  color: white;
}

button.btn-success:hover {
  background-color: #218838;
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

button.btn-danger {
  background-color: #dc3545;
  color: white;
}

button.btn-danger:hover {
  background-color: #c82333;
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    margin: 20px;
  }

  .table th, .table td {
    font-size: 0.9rem;
    padding: 8px;
  }

  h2 {
    font-size: 1.8rem;
  }
}

thead th{
  background-color: white !important;
  /* color : white !important */
}
</style>
