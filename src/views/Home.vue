<template>
  <div class="home">
    <img src="../assets/logo.png">
    <router-link to="profile">Profile</router-link>
    <time-tracker></time-tracker>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import TimeTracker from '@/components/TimeTracker'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TimeTracker
  }
}
</script>
