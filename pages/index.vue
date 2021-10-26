<template>
  <v-container>
    <v-card>
      <AppHero />
    </v-card>
    <v-card
      class="d-flex flex-column align-center justify-center text-center pb-16"
    >
      <v-card-title> Welcome to the Library</v-card-title>
      <v-card-text class="body1">
        This is the greatest book in the world you should definietly come pick
        it up.
      </v-card-text>
      <v-btn to="/bookshelf"> See Books </v-btn>
      <v-card-text class="body-1">
        This is a very long text that you should look at if you want to know
        what is going on. This project wants me to write some text about some
        books
      </v-card-text>
      <v-btn to="/add"> Add a Book </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import AppHero from "@/components/AppHero.vue";

export default {
  components: {
    AppHero,
  },
};
</script>
