<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form>
                        <h1>Vue Form</h1>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" class="form-control" v-model="userInput.firstName"/>

                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" class="form-control" v-model="userInput.lastName"/>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" class="form-control" v-model="userInput.email"/>
                            <label for="password">Password</label>
                            <input type="text" id="password" class="form-control" v-model="userInput.password"/>
                        </div>

                        <div class="form-group">
                            <input id="saveDb" type="checkbox" v-model="userInput.isSaveDb" :checked="userInput.isSaveDb"/>
                            <label for="saveDb">Save In Database?</label>
                            <button class="btn btn-primary" @click.prevent="submit">Submit</button>
                        </div>
                    </form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{userInput.email}} </p>
                        <p>Password: {{userInput.password}} </p>
                        <p>Store in Database?: {{userInput.isSaveDb}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        firstName: '',
        lastName: '',
        email: '',
        isSaveDb: true
      },
      submitted: false
    }
  },
  computed: {
    fullName() {
      return this.userInput.firstName + ' ' + this.userInput.lastName
    }
  },
  methods: {
    submit() {
      this.submitted = true
    }
  }
}
</script>

<style>
</style>
