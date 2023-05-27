<template>
    <div>
    <h1>Contact Us</h1>
    <div v-if="showSuccessAlert" class="alert alert-success mt-3">
      Thank you for your message! We will get back to you soon.
    </div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name">
        <div class="invalid-feedback">Please enter your name.</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email">
        <div class="invalid-feedback">Please enter a valid email address.</div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4" v-model="message" ></textarea>
        <div class="invalid-feedback">Please enter a message.</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
  </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false,
      showSuccessAlert: false
    };
  },

  methods: {
    submitForm() {
      this.submitted = true;
      console.log('Form submitted!');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

    
      this.showSuccessAlert = true;

     
      this.name = '';
      this.email = '';
      this.message = '';

      
      setTimeout(() => {
        this.showSuccessAlert = false;
      }, 4000);
    }
  }

  }
  </script>
  