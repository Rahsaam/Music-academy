<template>
<div class="logout text-center">
  <h2>Logout</h2>
  <button class="btn btn-warning" @click="doLogout">logout</button>
</div>
</template>

<script>
export default {


methods: {
    doLogout() {
        this.$store.commit('logout')
        this.$router.push('/login')
    }
}
}
</script>

<style>
.logout {
  margin-top: 70px;
}
</style>