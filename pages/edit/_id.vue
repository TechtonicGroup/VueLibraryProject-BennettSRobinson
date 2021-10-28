<template>
  <v-container class="mt-16">
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-h3" large
        >Edit Book</v-card-title
      >
      <AppForm :book="book" :author="Author" form="edit" />
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Empty from "@/assets/empty.jpeg";
import AppForm from "@/components/AppForm.vue";
export default {
  components: {
    AppForm,
  },
  created() {
    this.$store.dispatch("getBook", this.$route.params.id);
  },
  computed: {
    ...mapState(["book", "Author"]),
  },
};
</script>

<style lang="scss" scoped></style>
