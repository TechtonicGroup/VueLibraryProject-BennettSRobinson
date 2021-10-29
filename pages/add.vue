<!--Add Book page -->
<template>
  <v-container class="mt-16" max-height="500px">
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-h3" large
        >Add Book</v-card-title
      >
      <AppForm :book="book" :author="author" />
    </v-card>
  </v-container>
</template>

<script>
import Empty from "@/assets/empty.jpeg";
import AppForm from "@/components/AppForm.vue";
export default {
  name: "Add",
  components: {
    AppForm,
  },
  data() {
    return {
      //skelketon of book object and author object for add form
      book: {
        title: "",
        summary: "",
        published: "",
        pages: 0,
        rating: 0,
        picture: Empty,
      },
      author: {
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
