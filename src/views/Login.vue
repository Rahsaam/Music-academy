<template>
<div class="login">
  <form @submit.prevent="doSubmit" class=" form col-lg-4 rounded p-4 mx-auto">
    <h2>Login</h2>
  <div class="form-group mb-5 text-left">
    <label for="Username1">Username address:</label>
    <input
     v-model="username"
     type="username"
     class="form-control shadow"
     id="Username1" 
     placeholder="Enter username"
     :class="{
        'is-invalid': usernameE === true,
        'is-valid': usernameE === false
     }">
     <div class="invalid-feedback" v-if="usernameE == true">
        {{ this.usernameEM }}
     </div>
  </div>

  <div class="form-group text-left text-white mb-5">
    <label for="Password1">Password:</label>
    <input 
    v-model="password"
     type="password" 
     class="form-control shadow" 
     id="Password1" 
     placeholder="Enter password"
     :class="{
        'is-invalid': passwordE === true,
        'is-valid': passwordE === false
     }">
     <div class="invalid-feedback" v-if="passwordE == true">
        {{ this.passwordEM }}
     </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            usernameE: null,
            usernameEM: null,
            password: '',
            passwordE: null,
            passwordEM: null
        }    
    },
    methods: {
        doSubmit() {
           let access = true
           
            if (this.username.length < 5) {
                access = false
                this.usernameE = true
                if (this.username.length == 0) {
                    this.usernameEM = 'username required'
                } else {
                   this.usernameEM = 'username characters must be at least 5' 
                }
            } else {
                this.usernameE = false
            }

            if (this.password.length < 6) {
                this.passwordE = true
                if (this.password.length == 0) {
                    this.passwordEM = 'password required'
                } else {
                   this.passwordEM = 'password characters must be at least 6' 
                }
            } else {
                this.passwordE = false
            }
            
            if(access) {
                this.$store.commit('login', `${this.username} : ${this.password}`)
                this.$router.push('/profile')
            }
            
        }
    }
}
</script>

<style scoped>
form {
 top: 90px
}
.login {
    background: url(../images/background.jpg);
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
}
.form {
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.7);
}
</style>