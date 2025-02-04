
<template>

  <div id="Header">
    <div>
      <img src="./assets/modernTech Logo.jpg" alt="company logo placeholder">
      <h2 id="compName">ModernTech</h2>
    </div>
    <div>
      <img src="./assets/admin.avif" alt="User placeholder">
      <h4>Admin User </h4>
      <button @click="logout" v-if="isAuthenticated()">Logout</button>
    </div>
  </div>



  <div id="app">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/home" class="nav-link" :class="{ active: isActive('/home') }">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/employeeDataManagement" class="nav-link" :class="{ active: isActive('/employeeDataManagement') }">
          Employee Data Management
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/attTracking" class="nav-link" :class="{ active: isActive('/attTracking') }">
          Time Off Tracking & Attendance
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/payroll" class="nav-link" :class="{ active: isActive('/payroll') }">
          Payroll
        </router-link>
      </li>
    </ul>

   
    <router-view />
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const isActive = (path) => route.path === path;

    // This checks if user is authenticated, else
    const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

    // Logout method
    const logout = () => {
      localStorage.removeItem('isAuthenticated'); // Remove authentication state from localStorage
      router.push('/'); // Redirect peoples to login page
    };

    return {
      isActive,
      isAuthenticated,
      logout,
    };
  },
};
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#compName{
  font-family: 'Montserrat', sans-serif;
}

/* ody styling */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  padding: 20px;
}

/* Header */
#Header {
  background-color: #1e2a3a;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

#Header img {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
}

#Header h2 {
  font-size: 1.8em;
  font-weight: 600;
  color: #fff;
}

#Header div {
  display: flex;
  align-items: center;
}

#Header img:last-of-type {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

#Header h4 {
  font-size: 1.1em;
  font-weight: 400;
  margin-right: 20px;
  color: #fff;
}

#Header button {
  padding: 8px 16px;
  background-color: #e74c3c;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

#Header button:hover {
  background-color: #c0392b;
}

/* Navbar styling */
.nav-tabs {
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  color: #555;
  font-size: 1.1em;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #ddd;
}

.nav-link.active {
  background-color: #1e2a3a;
  color: white;
  border-radius: 4px;
}

.nav-item .nav-link.active:hover {
  background-color: #34495e;
}

/* main content area */
#app {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}



</style>


<!-- color: #42b983; -->

<!-- Styles for media responsiveness -->
<style>
/* Default Styles (Desktop-first approach) */
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
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