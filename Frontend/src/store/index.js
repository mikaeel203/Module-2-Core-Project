import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: null,
    attendanceAndLeave: null,
    employeeInformation: null,
    payrollData: null,
    leaveSummary: null 
  },
  getters: {},
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setAttendanceAndLeave(state, payload) {
      state.attendanceAndLeave = payload;
    },
    setEmployeeInformation(state, payload) {
      state.employeeInformation = payload;
    },
    setPayrollData(state, payload) {
      state.payrollData = payload;
    },
    setLeaveSummary(state, payload) {
      state.leaveSummary = payload;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        let response = await fetch('http://localhost:3000/employees');
        let employees = await response.json();
        commit('setEmployees', employees);
      } catch (error) {
        console.error("Failed to fetch employees. Please try again.", error);
      }
    },
    async getAttendanceAndLeave({ commit }) {
      try {
        let response = await fetch('http://localhost:3000/attendance');
        let attendanceAndLeave = await response.json();
        commit('setAttendanceAndLeave', attendanceAndLeave);
      } catch (error) {
        console.error("Failed to fetch attendance and leave data.", error);
      }
    },
    async getEmployeeInformation({ commit }) {
      try {
        let response = await fetch('http://localhost:3000/employee-info');
        let employeeInformation = await response.json();
        commit('setEmployeeInformation', employeeInformation);
      } catch (error) {
        console.error("Failed to fetch employee information.", error);
      }
    },
    async getPayrollData({ commit }) {
      try {
        let response = await fetch('http://localhost:3000/payroll');
        let payrollData = await response.json();
        commit('setPayrollData', payrollData);
      } catch (error) {
        console.error("Failed to fetch payroll data.", error);
      }
    },
    async getLeaveSummary({ commit }) {
      try {
        let response = await fetch('http://localhost:3000/home/leave-summary');
        let leaveSummary = await response.json();
        commit('setLeaveSummary', leaveSummary);
      } catch (error) {
        console.error("Failed to fetch leave summary data.", error);
      }
    }
  },
  modules: {}
});
