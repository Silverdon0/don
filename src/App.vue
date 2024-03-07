<template>
  <div>
    <router-link to="/">Home</router-link>
&nbsp;
    <router-link to="/about">About</router-link>
    &nbsp;
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // component logic
};
</script>