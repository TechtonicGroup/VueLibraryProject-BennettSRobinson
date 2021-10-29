<!--BookShelf page -->
<template>
  <v-container class="pt-16 scroll">
    <v-card>
      <v-card-title class="d-flex justify-center align-center">
        Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</v-card-title
      >
    </v-card>
    <v-container v-if="books.length">
      <v-row gutters>
        <v-col v-for="(book, n) in books" :key="n" cols="12" sm="4">
          <v-card
            class="pa-2"
            outlined
            tile
            justify="center"
            align="center"
            nuxt
            :to="`/books/${book.id}`"
          >
            <v-img
              :src="book.picture"
              height="250px"
              width="250px"
              class="ma-auto"
            />
            <br />

            {{ book.title }}

            <br />
            {{ book.Author.firstName + " " + book.Author.lastName }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--If the books state is empty then display this -->
    <v-container v-else class="d-flex justify-center align-center">
      <v-card>
        <v-card-title class="text-h3" justify="center" align="center"
          >No Books in Library</v-card-title
        >
        <br />
        <v-card-text
          >Please got add some
          <nuxt-link to="/add">books</nuxt-link></v-card-text
        >
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Bookshelf",

  //gets all books on initial render
  created() {
    this.getBooks();
  },
  //grabs the state from store
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    getBooks() {
      //calls the getBooks action from store with the search value
      this.$store.dispatch("getBooks", this.$route.query.search);
    },
  },
  //always watches the books state to see if there are any changes to the array
  watch: {
    books() {
      this.getBooks();
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: scroll;
}
</style>
