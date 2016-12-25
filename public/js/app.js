class Errors {
  constructor() {
    this.errors = {};
  }
  
  has(field) {
    return !!this.errors[field];
  }
  
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }
  
  any() {
    return Object.keys(this.errors).length > 0;
  }
  
  record(errors) {
    this.errors = errors;
  }
  
  clear(field) {
    delete this.errors[field];
  }
}

new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      description: '',
      errors: new Errors()
    }
  },
  methods: {
    onSubmit() {
      axios.post('/projects', this.$data)
        .then(response => this.onSuccess(response))
        .catch(error => {
          this.errors.record(error.response.data);
        });
    },
    
    onSuccess(response) {
      this.name = '';
      this.description = '';
    }
  }
})