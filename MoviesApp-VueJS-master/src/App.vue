<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Movies App</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/">Popular</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="top-rated">Top Rated</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="upcoming">Upcoming</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
</style>
