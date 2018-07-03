<template>
  <div class="grid" :class="{ 'is-collapsed': isCollapsed }">
    <div class="grid-header">
      <nav class="navbar is-primary">
        <div class="navbar-brand">
          <a class="navbar-item" @click="toggleNavDrawer">
            <b-icon icon="chevron-left" size="large" class="navbar-chevron"></b-icon>
            <b-icon icon="bars" size="large" class="navbar-bars"></b-icon>
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="navbar-item navbar-title">
            Buefy Dashboard
          </div>
        </div>
      </nav>
    </div>
    <div class="grid-nav-drawer nav-drawer">
      <aside class="menu">
      <ul class="menu-list">
        <li><a>Home</a></li>
        <li><a>Profile</a></li>
      </ul>
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
    </div>
    <div class="grid-main">
      <router-view></router-view>
    </div>
    <div class="grid-footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  methods: {
    toggleNavDrawer () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
