<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />

    <!-- Header Section -->
    <div class="header-container">
      <h1>Employee Leave Dashboard</h1>
      <p class="header-subtext">
        Track and manage employee leave requests efficiently.
      </p>
    </div>

    <!-- Alert Section for Leave Requests -->
    <div class="container my-5">
      <h2 class="section-title">Leave Request Summary</h2>
      <div class="alert-cards">
        <div class="alert-card approved-alert">
          <i class="fas fa-check-circle"></i>
          <h4>Approved</h4>
          <p>{{ approved }}</p>
        </div>
        <div class="alert-card denied-alert">
          <i class="fas fa-times-circle"></i>
          <h4>Denied</h4>
          <p>{{ denied }}</p>
        </div>
        <div class="alert-card pending-alert">
          <i class="fas fa-clock"></i>
          <h4>Pending</h4>
          <p>{{ pending }}</p>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer>
      <div class="social-buttons">
        <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a class="social-button tiktok" href="https://www.tiktok.com/" target="_blank"
          ><i class="fab fa-tiktok"></i
        ></a>
        <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"
          ><i class="fab fa-youtube"></i
        ></a>
        <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
      <p class="footer-text">
        &copy; 2024 Modern Tech Solutions Pty Ltd. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState(["leaveSummary"]),
    approved() {
      return this.leaveSummary?.approved || 0;
    },
    denied() {
      return this.leaveSummary?.denied || 0;
    },
    pending() {
      return this.leaveSummary?.pending || 0;
    }
  },
  methods: {
    ...mapActions(["getLeaveSummary"])
  },
  mounted() {
    this.getLeaveSummary();
  }
};
</script>

<style scoped>
/* Header Styles */
.header-container {
  text-align: center;
  padding: 20px;
  background: #f7f9fc;
  border-bottom: 1px solid #e0e0e0;
}

.header-container h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.header-container .header-subtext {
  font-size: 1rem;
  color: #666;
}

/* Section Titles */
.section-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
}

/* Alert Cards */
.alert-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.alert-card {
  background: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  flex: 1;
  transition: transform 0.3s ease;
}

.alert-card i {
  font-size: 2rem;
  margin-bottom: 10px;
}

.alert-card h4 {
  font-size: 1.25rem;
  color: #333;
}

.alert-card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.alert-card:hover {
  transform: translateY(-5px);
}

.approved-alert {
  background-color: #e6f7e6;
  color: #28a745;
}

.denied-alert {
  background-color: #fce6e6;
  color: #dc3545;
}

.pending-alert {
  background-color: #fff6e6;
  color: #ffc107;
}

/* Footer Styles */
footer {
  background: #f7f9fc;
  padding: 20px;
  text-align: center;
}

.social-buttons {
  margin-bottom: 10px;
}

.social-button {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease;
}

.social-button:hover {
  color: #007bff;
}

.footer-text {
  font-size: 0.875rem;
  color: #666;
}
</style>
