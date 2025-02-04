<template>
  <div class="employee-dashboard">
    <!-- Search Bar -->
    <input 
      type="text" 
      v-model="searchQuery" 
      class="search-bar" 
      placeholder="Search by Name or Department..." 
    />

    <!-- Add employee btn -->
    <button 
      class="add-btn" 
      @click="openAddModal"
    >
      Add Employee
    </button>

    <!-- Employee Card -->
    <div v-for="employee in filteredEmployees" :key="employee.employeeId" class="employee-card">
      <!-- Edit the emp button -->
      <button 
        class="edit-btn" 
        @click="editEmployee(employee)"
      >
        Edit
      </button>

      <!-- Remove button -->
      <button 
        class="remove-btn" 
        @click="removeEmployee(employee.employeeId)"
      >
        Remove
      </button>

      <!-- Employee info -->
      <h5 class="employee-name">{{ employee.name }}</h5>
      <p class="employee-info">ID: {{ employee.employeeId }}</p>
      <p class="employee-info">Position: {{ employee.position }}</p>
      <p class="employee-info">Department: {{ employee.department }}</p>
      <p class="employee-info">Salary: R{{ employee.salary }}</p>
      <p class="employee-info">History: {{ employee.employmentHistory }}</p>
      <p class="employee-info">Contact: {{ employee.contact }}</p>

      <!-- Review button -->
      <button 
        class="review-btn" 
        @click="openReviewModal(employee)"
      >
        Review
      </button>
    </div>

    <!-- Add modal -->
    <div v-if="isAdding" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Add New Employee</h3>
        <label for="addName">Name:</label>
        <input v-model="newEmployee.name" id="addName" />

        <label for="addPosition">Position:</label>
        <input v-model="newEmployee.position" id="addPosition" />

        <label for="addDepartment">Department:</label>
        <input v-model="newEmployee.department" id="addDepartment" />

        <label for="addSalary">Salary:</label>
        <input v-model="newEmployee.salary" id="addSalary" />

        <label for="addHistory">History:</label>
        <input v-model="newEmployee.employmentHistory" id="addHistory" />

        <label for="addContact">Contact:</label>
        <input v-model="newEmployee.contact" id="addContact" />

        <button @click="addEmployee">Add Employee</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </div>

    <!-- Review Modal -->
    <div v-if="isReviewing" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Review Employee</h3>
        <p><strong>Name:</strong> {{ selectedEmployee.name }}</p>
        <label for="reviewText">Write a Review:</label>
        <textarea 
          id="reviewText" 
          v-model="reviewText" 
          rows="5"
          placeholder="Enter your review here..."
        ></textarea>
        <button @click="submitReview">Submit</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      employeeDataRecieved: [],
      isAdding: false,
      isEditing: false,
      isReviewing: false,
      editableEmployee: {},
      selectedEmployee: {},
      reviewText: "",
      newEmployee: {
        employeeId: null,
        name: "",
        position: "",
        department: "",
        salary: "",
        employmentHistory: "",
        contact: "",
      },
    };
  },
  computed: {
    filteredEmployees() {
      const query = this.searchQuery.toLowerCase();
      return this.employeeDataRecieved.filter(employee =>
        employee.name.toLowerCase().includes(query) ||
        employee.department.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    cloneData() {
      this.employeeDataRecieved = this.$store.state.employeeInformation;
    },
    openAddModal() {
      this.isAdding = true;
    },
    addEmployee() {
      if (this.newEmployee.name && this.newEmployee.department) {
        const newEmployee = {
          ...this.newEmployee,
          employeeId: Date.now(),
        };
        this.employeeDataRecieved.push(newEmployee);
        this.closeModal();
        this.resetNewEmployee();
      } else {
        alert("Please fill in all required fields.");
      }
    },
    resetNewEmployee() {
      this.newEmployee = {
        employeeId: null,
        name: "",
        position: "",
        department: "",
        salary: "",
        employmentHistory: "",
        contact: "",
      };
    },
    editEmployee(employee) {
      this.editableEmployee = { ...employee };
      this.isEditing = true;
    },
    removeEmployee(employeeId) {
      this.employeeDataRecieved = this.employeeDataRecieved.filter(
        employee => employee.employeeId !== employeeId
      );
    },
    openReviewModal(employee) {
      this.selectedEmployee = employee;
      this.reviewText = "";
      this.isReviewing = true;
    },
    submitReview() {
      if (this.reviewText.trim()) {
        alert(`Review submitted for ${this.selectedEmployee.name}: ${this.reviewText}`);
        this.closeModal();
      } else {
        alert("Please write a review before submitting.");
      }
    },
    closeModal() {
      this.isAdding = false;
      this.isEditing = false;
      this.isReviewing = false;
      this.resetNewEmployee();
    },
  },
  mounted() {
    this.cloneData();
  },
};
</script>

<style scoped>
.employee-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.employee-card {
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.employee-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.employee-info {
  font-size: 14px;
  margin: 3px 0;
}

/* Edit Button Styles */
.edit-btn {
  position: absolute;
  top: 10px;
  right: 110px;
  background-color: rgb(245, 245, 0);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
}

.edit-btn:hover {
  background-color: #f0e000;
}

/* Remove Button Styles */
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(255, 69, 0);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  color: white;

}

.remove-btn:hover {
  background-color: #ff4500;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.modal-content input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-content button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.modal-content button:hover {
  background-color: #0056b3;
}

/* Add Employee Button */
.add-btn {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #28a745;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #218838;
}

/* review button */

.review-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.review-btn:hover {
  background-color: #0056b3;
}

/* Add textarea styling in modal */
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
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
