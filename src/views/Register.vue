<template>
  <div class="register">
  <form @submit.prevent="doRegister" class="form col-lg-4 rounded p-4 mx-auto">
    <h2>Register</h2>
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

  <div class="form-group text-left mb-5">
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

  <div class="form-group text-left mb-5 text-white">
    <label for="Password2">confirm password:</label>
    <input 
    v-model="password2"
     type="password" 
     class="form-control shadow" 
     id="Password2" 
     placeholder="confirm password"
     :class="{
        'is-invalid': password2E === true,
        'is-valid': password2E === false
     }">
     <div class="invalid-feedback" v-if="password2E == true">
        {{ this.password2EM }}
     </div>
  </div>

  <div class="form-group text-left text-white mb-5">
    <label for="select">Role:</label>
    <select v-model="role">
        <option value="piano">piano student</option>
        <option value="violin">violin student</option>
        <option value="guitar">guitar student</option>
    </select>
  </div>

  <div class="form-group text-left text-white mb-4">
    <label for="gender">Gender:</label>
        <div class="gender">
            <input type="radio" name="gender">male
            <input type="radio" name="gender">female
        </div>
  </div>

    <div class="form-group text-left text-white">
        <input type="checkbox" required>
        <label class="mx-2">Accept terms and conditions</label>
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
            passwordEM: null, 
            password2: '',
            password2E: null,
            password2EM: null,
            role: 'piano'
        }
    },
    methods: {
        doRegister() {
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
                access = false
                this.passwordE = true
                if (this.password.length == 0) {
                    this.passwordEM = 'password required'
                } else {
                   this.passwordEM = 'password characters must be at least 6' 
                }
            } else {
                this.passwordE = false
            }


            if (this.password2.length < 6) {
                access = false
                this.password2E = true
                if (this.password2.length == 0) {
                    this.password2EM = 'confirm password required'
                } else {
                   this.password2EM = 'password characters must be at least 6' 
                }
            } else {
                this.password2E = false
            }

            if(this.password != this.password2) {
                access = false
                this.password2E = true
                this.passwordE = true
                this.passwordEM = "passwords are'nt same"
            } else {
                // if(!this.paswordEM && !this.passwordEM2) {
                //     this.passwordEM = ''
                // }
            }
            
            if(access) {
                this.$store.commit('login', `${this.username} : ${this.password}`)
                this.$router.push('/profile')
            }
        }
    }
}
</script>

<style>
.register {
    background: url(../images/background.jpg);
    width: 100%;
    height: 130vh;
    background-position: center;
    background-size: cover;
}
form {
    top: 90px;
}
.form {
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.7);
}
label {
    display: inline-block;
    padding: 0 10px 0 0;
}
select {
    background: linear-gradient(#fff, rgb(255, 255, 255, 0.6));
    border: none;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 6px 0; 
}
.gender {
    padding: 0 10px;
    display: inline-block;
}
input [type="checkbox"] {
    width: 16px;
    margin-right: 10px !important;
}
</style>