<template>
  <div class="form-container">
    <h1>Contact Page</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required class="form-container--input">
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required class="form-container--input">
      </div>

      <div>
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required class="form-container--input"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div v-if="showSuccessMessage" class="success-message">
      <p>Form submitted successfully!</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showSuccessMessage: false,
    };
  },
  methods: {
    submitForm() {
      // Reset form data after submission (if needed)
      this.name = '';
      this.email = '';
      this.message = '';

      // Display success message after form submission
      this.showSuccessMessage = true;
    },
    resetSuccessMessage() {
      // Hide success message
      this.showSuccessMessage = false;
    }
  },
  watch: {
    name(newValue) {
      if (newValue !== '') {
        this.resetSuccessMessage();
      }
    },
    email(newValue) {
      if (newValue !== '') {
        this.resetSuccessMessage();
      }
    },
    message(newValue) {
      if (newValue !== '') {
        this.resetSuccessMessage();
      }
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 220px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

.success-message {
  background-color: #dff0d8;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
