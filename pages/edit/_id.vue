<!--Edit Book page -->
<template>
  <v-container class="mt-16">
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-h3" large
        >Edit Book</v-card-title
      >
      <AppForm
        :book="book"
        :author="Author"
        form="edit"
        :id="this.$route.params.id"
      />
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import AppForm from "@/components/AppForm.vue";
export default {
  components: {
    AppForm,
  },
  created() {
    //gets the book we are currently looking at from store actions
    this.$store.dispatch("getBook", this.$route.params.id);
  },
  computed: {
    //gets the book and author state
    ...mapState(["book", "Author"]),
  },
};
</script>

<style lang="scss" scoped></style>
