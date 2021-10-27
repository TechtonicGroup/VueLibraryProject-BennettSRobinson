<template>
  <v-container class="mt-16">
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-h3" large
        >Edit Book</v-card-title
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
