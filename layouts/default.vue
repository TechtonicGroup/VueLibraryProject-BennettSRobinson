<template>
  <div>
    <v-app dark>
      <AppHeader />
      <v-container>
        <Nuxt />
      </v-container>
      <AppFooter />
    </v-app>
  </div>
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
