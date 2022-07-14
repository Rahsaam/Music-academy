<template>
  <!-- <h3 class="text-center mt-5">edit page</h3> -->
  <section class="edit">
  <form @submit.prevent="handleEdit">
    <div class="edit-eamil">
      <label for="editEmail">Edit email:</label>
      <input type="email" v-model="email">
    </div>
    <div class="edit-massage">
      <label for="">edit massage:</label>
      <textarea rows="5" v-model="detail">

      </textarea>
      <button class="sentEdit btn btn-warning">
        sent
      </button>
    </div>
  </form>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      email: '',
      detail: '',
      uri: 'http://localhost:3000/massages/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.email = data.email
      this.detail = data.detail
    })
  },
  methods: {
    handleEdit() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email: this.email, detail: this.detail})
      }).then(() => {
        this.$router.push('/sentbox')
      })
    }
  }
}
</script>

<style scoped>
  .edit {
    background: url(../images/background-e.jpg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  form {
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 15px;
    margin-top: 90px;
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
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #999;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  .edit-eamil {
    margin: 30px 0px;
  }
  textarea {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  .edit-massage button {
    width: 100%;
    margin: 15px 0;
  }
</style>