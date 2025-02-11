<template>
  <div class="login-container">
    <!-- Left Section -->
    <div class="left-section">
      <div class="logo">
        <img src="../assets/modernTech Logo.jpg" alt="Company Logo" />
      </div>
      <h1>ModernTech</h1>
      <p class="slogan">"Innovating the future of business"</p>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Right Section -->
    <div class="right-section">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await axios.post("http://localhost:3000/login", {
          username: this.username,
          password: this.password,
        });

        // Save token to localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to home
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage =
          error.response?.data?.message || "Login failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped> 
.login-container {
  position: fixed; /* Full viewport coverage */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #f7f8fa, #e6eaf0); /* Subtle gradient */
  z-index: 9999; /* Ensures the login page is above other content */
  font-family: 'Arial', sans-serif;
}

.left-section,
.right-section {
  flex: 1; /* Each side takes half of the width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center text alignment */
  padding: 20px;
}

.logo img {
  max-width: 150px;
  margin-bottom: 20px;
  border-radius: 30px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin: 10px 0;
}

.slogan {
  font-size: 1.2rem;
  color: #555;
  font-style: italic;
}

.divider {
  width: 2px;
  background: #ddd;
  height: 100%; /* Extend vertically to center with content */
  align-self: stretch;
}

.right-section {
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin-right: 180px;
  margin-left: 180px
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

form div {
  margin-bottom: 15px;
  width: 100%; /* Ensure form inputs take full width */

}

label {
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: #f9f9f9;
  outline: none;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

input:focus {
  border-color: #6a11cb;
  background: #ffffff;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background: #6a11cb;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
}

button:hover {
  background: #4e0fb0;
  transform: translateY(-2px);
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 10px;
}

.forgot-password {
  margin-top: 10px;
  text-align: center;
}

.forgot-password a {
  font-size: 0.85rem;
  color: #6a11cb;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}


</style>