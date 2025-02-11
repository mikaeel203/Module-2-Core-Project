import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from '@/components/LoginComp.vue'
import HomeView from '../views/HomeView.vue'
import EmployeeDataManagementView from '../views/EmployeeDataManagementView.vue'
import AttTrackingView from '@/views/AttTrackingView.vue'
import PayrollView from '@/views/PayrollView.vue'

// const isAuthenticated = () => {
//   return localStorage.getItem('isAuthenticated') === 'true'; // Check the stored value
// };
function isAuthenticated() {
  const user = localStorage.getItem("user");
  return user !== null && user !== "undefined"; // Ensure it's not "undefined" as a string
}

const routes = [
  {//LOGIN PAGE MAY HAVE FORGOTTEN
    path: '/',
    name: 'login',
    component: LoginComp,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next('/employeeDataManagement'); // Redirect to the employee data management if already logged in
      } else {
        next();
      }
    }
  },
  {//HOME VIEW [STILL FIGURING OUT WHAT TO DO HERE - MAYBE SOME GRAPHS OR SOMETHING]
    path: '/home',
    name: 'home',
    component: HomeView,
    // beforeEnter: (to, from, next) => {
    //   if (!isAuthenticated()) {
    //     next('/'); // Redirect to login if not authenticated
    //   } else {
    //     next();
    //   }
    // }
    beforeEnter: (to, from, next) => {
      console.log("Checking authentication...");
      console.log("Stored user:", localStorage.getItem("user"));
      
      if (!isAuthenticated()) {
        console.log("Not authenticated, redirecting to login...");
        next('/');
      } else {
        console.log("Authenticated, allowing navigation...");
        next();
      }
    }
  },
  {//EMPOYEE DATA MANAGEMENT - REVIEWS, TIME ON/OFF STARTING DATE ETC
    path: '/employeeDataManagement',
    name: 'employeeDataManagement',
    component: EmployeeDataManagementView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/'); // Redirect to login if not authenticated
      } else {
        next();
      }
    }
  },
  {//ATTENDENCE TRACKING
    path: '/attTracking', 
    name: 'attTracking',
    component: AttTrackingView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/'); // Redirect to login if not authenticated
      } else {
        next();
      }
    }
  }, 
  {//PAYROLL
    path: '/payroll',
    name: 'payroll',
    component: PayrollView,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/'); // Redirect to login if not authenticated
      } else {
        next();
      }
    }
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
