<template>
  <v-container class="pt-16 scroll">
    <v-card>
      <v-card-title class="d-flex justify-center align-center">
        Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</v-card-title
      >
    </v-card>
    <v-container>
      <v-row gutters>
        <v-col v-for="book in books" :key="book.id" cols="12" sm="4">
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
              max-height="250px"
              max-width="250px"
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
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Bookshelf",

  created() {
    this.getBooks();
  },
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    getBooks() {
      this.$store.dispatch("getBooks");
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: scroll;
}
</style>
