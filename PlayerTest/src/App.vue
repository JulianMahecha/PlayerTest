<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Julián Mahecha - Players App</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/">Players</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
</style>
