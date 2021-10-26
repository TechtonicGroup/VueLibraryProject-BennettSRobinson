<template>
  <v-app dark>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scope></style>
