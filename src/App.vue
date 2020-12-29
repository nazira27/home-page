<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "app",
  components: {
   
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  main {
    padding: 0 !important;
  }
}
</style>
