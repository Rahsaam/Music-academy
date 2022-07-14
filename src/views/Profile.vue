<template>
<section class="profile">
  <div class="pro">
    <div class='container'>
      <!-- <h1 class="display-4 text-monospace text-center text-white">profile</h1> -->
      <div class="row">
          <div class="card shadow col-3" >
            <img src="../images/sample.jpg" class="card-img-top" alt="sample">
            <div class="card-body text-white">
              <h5 class="card-title">Hesam Rahmani</h5>
              <p class="card-text">piano student</p>
            </div>
          </div>

          <form @submit.prevent="handleSubmit">
            <h3>massage to master</h3>
            <div class="sentEamil">
              <label for="sentEmail">email address:</label>
              <input type="email" v-model="email" required>
              <i class="bi bi-telegram"></i>
            </div>
            <div class="sentMassage">
              <label for="">write massage:</label>
              <textarea rows="5" v-model="detail" required>

              </textarea>
              <button class="sent btn btn-warning">
                sent
              </button>
            </div>
          </form>













          <!-- <div class="card col-md-8 p-2 ml-5">
            <div class="card-header">
              <input v-model="email" class="col-11 border-0" type="email" placeholder="massage to..." required>
              <i class="bi bi-telegram"></i>
            </div>
          
            <div class="col-md-12 mx-auto">
              <div class="card-body">
                <textarea rows="10" v-model="massage" class="massage col-md-12" placeholder="your massege" required></textarea>
              </div>
              <a href="#" class="btn btn-primary btn-block">sent massage</a>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      detail: '',
    }
  },
  methods: {
    handleSubmit() {
      let addMassage = {
        email: this.email,
        detail: this.detail,
        complete: false
      }
      fetch('http://localhost:3000/massages', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(addMassage)
      }).then(() => {
        this.$router.push('/sentbox')

        console.log(addMassage);
      })
    }
  }
}
</script>

<style scoped>
.bi {
  color: yellow;
  cursor: pointer;
  margin-left: 10px;
}
.bi:hover {
  color: #fff;
}
.card-header input {
  background: #fff;
}
.small-pic {
  width: 50px;
}
.profile {
  background: url(../images/background-p.jpg);
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
}
.card {
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
}
.pro {
  padding-top: 90px;
}



form {
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 30px;
    background: rgba(0, 0, 0, 0.7);
  }
  label {
    display: inline-block;
    text-transform: uppercase;
    font-size: 16px;
    color: #999;
    letter-spacing: 2px;
  }
  input {
    display: inline-block;
    width: 93%;
    border: 0;
    border-bottom: 1px solid #999;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px;
    color: #fff;
  }
  .sentEamil {
    margin: 30px 0px;
  }
  textarea {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  form button {
    width: 100%;
    margin-top: 15px;
  }
</style>