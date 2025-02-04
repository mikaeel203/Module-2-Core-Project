<template>
  <div>
    <div class="header-container">
      <h2>History of Leave Requests</h2>
    </div>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchQuery"
      class="form-control mb-4"
      placeholder="Search by Name, Date, or Reason..."
    />

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Reason</th>
          <th scope="col">Decision</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="leaveRequest in filteredLeaveRequests" :key="leaveRequest.id">
          <td>{{ leaveRequest.employeeName }}</td>
          <td>{{ leaveRequest.date }}</td>
          <td>{{ leaveRequest.reason }}</td>
          <td :class="leaveRequest.status.toLowerCase()">{{ leaveRequest.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['employees'],
  data() {
    return {
      searchQuery: '', // Search query for filtering leave requests
    };
  },
  computed: {
    // Flattening and filter leave requests based on the search query
    filteredLeaveRequests() {
      const query = this.searchQuery.toLowerCase();
      const allLeaveRequests = this.employees.flatMap(employee =>
        employee.leaveRequests
          .filter(
            leaveRequest =>
              leaveRequest.status === 'Approved' || leaveRequest.status === 'Denied'
          )
          .map(leaveRequest => ({
            id: `${employee.id}-${leaveRequest.date}`,
            employeeName: employee.name,
            date: leaveRequest.date,
            reason: leaveRequest.reason,
            status: leaveRequest.status,
          }))
      );

      // Filter based on the search query
      return allLeaveRequests.filter(
        leaveRequest =>
          leaveRequest.employeeName.toLowerCase().includes(query) ||
          leaveRequest.date.toLowerCase().includes(query) ||
          leaveRequest.reason.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
/* General layout */
h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

.table {
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.table th,
.table td {
  padding: 12px 15px;
  font-size: 1rem;
  text-align: left;
  border: 1px solid #ddd;
  color: #555;
}

.table th {
  background-color: #f1f1f1;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
}

.table td {
  background-color: #fff;
  font-size: 1rem;
}

/* Decision status color */
td.approved {
  color: #28a745; /* Green for approved */
  font-weight: bold;
}

td.denied {
  color: #dc3545; /* Red for denied */
  font-weight: bold;
}
.header-container {
  text-align: center; /* Center the content horizontally */
  margin-bottom: 20px; /* Add spacing below the header */
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem; /* Adjust the font size */
  color: #333; /* Change color if needed */
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .table th,
  .table td {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>
