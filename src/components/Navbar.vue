<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <router-link class="navbar-brand" to="/">General page</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/sentbox" v-if="$store.state.isAuthenticated">Sentbox</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/profile" v-if="$store.state.isAuthenticated">Profile</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login" v-if="!$store.state.isAuthenticated">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register" v-if="!$store.state.isAuthenticated">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/logout" v-if="$store.state.isAuthenticated">Logout</router-link>
      </li>
    </ul>
  </div>
</nav>


</template>

<script>
export default {

}
</script>

<style>
nav.navbar {
  margin: 0;
}
nav {
  background: rgba(0, 0, 0, 0.8);
}

</style>