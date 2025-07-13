<template>
  <div id="app">
    <nav class="mb-4 navbar navbar-expand navbar-dark bg-dark shadow-sm px-3 w-100 z-1 position-sticky top-0">
      <router-link class="navbar-brand fw-bold text-light" to="/">Contact Book</router-link>
      <div class="navbar-nav flex-row gap-2">
        <router-link class="nav-link text-light" to="/">Contacts</router-link>
        <router-link class="nav-link text-light" to="/add">Add Contact</router-link>
      </div>
    </nav>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  background: #f8f9fa;
}
</style>
