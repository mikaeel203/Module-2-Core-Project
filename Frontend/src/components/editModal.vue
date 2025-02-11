<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="'#exampleModal'"+ employees.employee_id
  >
    Edit
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'exampleModal'"+ employees.employee_id
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Employee</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Employee Name:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Employee ID:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.employee_id"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Position Name:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.position_name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Department Name:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.department_name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Salary:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.salary"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Contact:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editedEmployees.email"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="patchEmployee()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props: ["employees"],
    data(){
        return{
            editedEmployees:{
            name: this.employees.name,
            employee_id: this.employees.employee_id,
            position_name: this.employees.position_name,
            department_name: this.employees.department_name,
            salary: this.employees.salary,
            employment_history: this.employees.employment_history,
            email: this.employees.email,
            }
        }
    },
    methods:{
        patchEmployee(){
            this.$store.dispatch('patchEmployee', this.editedEmployees)
        }
    },
}
</script>
