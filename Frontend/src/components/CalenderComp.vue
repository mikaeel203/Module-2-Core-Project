<template>
    <div class="calendar-container">
      <h2 class="text-center">Employee Attendance Calendar</h2>
      
      <div class="calendar">
        <!-- Generate the calendar days -->
        <div v-for="date in dates" :key="date" class="calendar-card" @click="openModal(date)">
          <div class="calendar-date">{{ date }}</div>
          <div class="calendar-day">{{ getDayOfWeek(date) }}</div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>Employees Working on {{ selectedDate }}</h3>
          <ul>
            <li v-for="employee in workingEmployees" :key="employee">{{ employee }}</li>
          </ul>
          <button class="close-btn" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Define the dates for the calendar (can adjust this to any range of dates)
        dates: [
          "2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04", "2024-11-05", 
          "2024-11-06", "2024-11-07", "2024-11-08", "2024-11-09", "2024-11-10",
          "2024-11-11", "2024-11-12", "2024-11-13", "2024-11-14", "2024-11-15", 
          "2024-11-16", "2024-11-17", "2024-11-18", "2024-11-19", "2024-11-20",
          "2024-11-21", "2024-11-22", "2024-11-23", "2024-11-24", "2024-11-25",
          "2024-11-26", "2024-11-27", "2024-11-28", "2024-11-29", "2024-11-30"
        ],
        showModal: false,
        selectedDate: "",
        workingEmployees: [],
        employeeNames: [
          "Sibongile Nkosi", "Lungile Moyo", "Thabo Molefe", "Keshav Naidoo", 
          "Zanele Khumalo", "Sipho Zulu", "Naledi Moeketsi", "Farai Gumbo", 
          "Karabo Dlamini", "Fatima Patel"
        ]
      };
    },
    methods: {
      // Function to get the day of the week for a given date
      getDayOfWeek(date) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = new Date(date).getDay(); // Get the day index (0-6)
        return daysOfWeek[day];
      },
  
      // Function to open the modal and display the working employees for the selected date
      openModal(date) {
        this.selectedDate = date;
        this.workingEmployees = this.getWorkingEmployees();
        this.showModal = true;
      },
  
      // Function to randomly select employees who will be working
      getWorkingEmployees() {
        const workingCount = Math.floor(Math.random() * 5) + 3; // Random number of working employees between 3 and 7
        const shuffled = this.employeeNames.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, workingCount);
      },
  
      // Function to close the modal
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    padding: 20px;
  }
  
  .text-center {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  
  .calendar {
    display: grid;
    grid-template-columns: repeat(8, 1fr); /* 8 items per row */
    gap: 15px;
    margin-top: 20px;
  }
  
  .calendar-card {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .calendar-date {
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  .calendar-day {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #007bff;
  }
  
  .calendar-card:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  
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
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  .close-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  .close-btn:hover {
    background-color: #0056b3;
  }
  </style>
  