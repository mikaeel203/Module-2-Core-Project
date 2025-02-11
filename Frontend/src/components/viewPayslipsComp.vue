<template>
    <div>
        
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" :data-bs-toggle="'modal'" :data-bs-target="'#' + modalId">
  Show More
</button>

<!-- Modal -->
<div class="modal fade" :id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content" style="min-height: 70vh;"> <!-- Increased the height -->
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{employee.name}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
  <!-- Employee Information Display -->
  <div class="row mb-2">
    <div class="col-6"><strong>Department:</strong></div>
    <div class="col-6">{{ employee.department }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>Position:</strong></div>
    <div class="col-6">{{ employee.position }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>ID:</strong></div>
    <div class="col-6">{{ employee.employeeId }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>Worked Hours:</strong></div>
    <div class="col-6">{{ employee.hoursWorked }}</div>
  </div>

    
  <div class="row mb-2">
    <div class="col-6"><strong>Hourly Pay: </strong></div>
    <div class="col-6">R{{ (Number(employee.finalSalary)/Number(employee.hoursWorked)).toFixed(2) }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>Leave Deductions:</strong></div>
    <div class="col-6">{{ employee.leaveDeductions }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>Final Pay:</strong></div>
    <div class="col-6">R{{ Number(employee.finalSalary).toFixed(2) }}</div>
  </div>
  
  <div class="row mb-2">
    <div class="col-6"><strong>Annual Pay:</strong></div>
    <div class="col-6">R{{ Number(employee.finalSalary*12).toFixed(2) }}</div>
  </div>
  

</div>
<!-- Modal Body end here -->

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="downloadPDF">Download PDF</button>
      </div>
    </div>
  </div>
</div>



    </div>
</template>


<script>
import jsPDF from 'jspdf';

export default {
  props: {
    employee: {
      type: Object,
      required: true,
      default: () => ({}) // Ensures it always has a default value
    },
    modalId: {
      type: String,
      required: true
    }
  },
  methods: {
    downloadPDF() { //AI helped with functionalality of generating a payslip
      const doc = new jsPDF();
      
      // Set title
      doc.setFontSize(18);
      doc.text('Payslip', 20, 20);

      // Add employee details
      doc.setFontSize(12);
      doc.text(`Name: ${this.employee.name}`, 20, 40);
      doc.text(`Department: ${this.employee.department}`, 20, 50);
      doc.text(`Position: ${this.employee.position}`, 20, 60);
      doc.text(`Employee ID: ${this.employee.employeeId}`, 20, 70);
      doc.text(`Worked Hours: ${Number(this.employee.hoursWorked)}`, 20, 80);
      doc.text(
        `Hourly Pay: R${(Number(this.employee.finalSalary) / Number(this.employee.hoursWorked)).toFixed(2)}`,
        20,
        90
      );
      doc.text(`Leave Deductions: ${this.employee.leaveDeductions}`, 20, 100);
      doc.text(`Final Pay: R${Number(this.employee.finalSalary).toFixed(2)}`, 20, 110);
      doc.text(`Annual Pay: R${(Number(this.employee.finalSalary) * 12).toFixed(2)}`, 20, 120);

      // Save the PDF
      doc.save(`${this.employee.name}_payslip.pdf`);
    },
  },
};
</script>



<style scoped>
/* General modal styling */
.modal-content {
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  color: #333;
}

.modal-header {
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  text-align: center;
}

.modal-header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.modal-body {
  padding: 20px;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.col-6 {
  flex: 1;
  font-size: 1rem;
  color: #555;
}

.col-6 strong {
  font-weight: bold;
  color: #333;
}

/* Button styling */
button.btn-primary {
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.5);
}

button.btn-secondary {
  background-color: #6c757d;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button.btn-secondary:hover {
  background-color: #5a6268;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* download button emphasis */
button.btn-primary:last-child {
  background-color: #28a745; /* Green for download */
}

button.btn-primary:last-child:hover {
  background-color: #218838;
}

/* Payslip details styling */
.modal-body .row {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.modal-body .row:last-child {
  border-bottom: none;
}

.modal-body .col-6 {
  text-align: left;
}

.modal-body .col-6:last-child {
  text-align: right;
  font-weight: bold;
}

/* Footer button alignment */
.modal-footer {
  padding: 20px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
</style>
