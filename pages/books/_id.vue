<!--Book Details page -->
<template>
  <div>
    <v-container
      class="pt-16 d-lg-flex d-md-flex justify-center d-sm-block order-sm-2"
    >
      <v-card class="mt-16">
        <v-img
          :src="currentBook.book.picture"
          class="image mt-4"
          width="400px"
          height="500px"
          contain
        />
        <br />
        <v-rating
          length="5"
          size="64"
          :value="currentBook.book.rating"
          readonly
        >
        </v-rating>
      </v-card>
      <v-card class="mt-16 order-sm-1 pt-10" width="400px">
        <v-card-title class="justify-center">
          {{ currentBook.book.title }}
        </v-card-title>
        <v-card-text align="center">
          {{ fullName() }}
        </v-card-text>
        <v-card-text align="center">
          Published: {{ currentBook.book.published }}
        </v-card-text>
        <v-card-text align="center">
          Pages: {{ currentBook.book.pages }}
        </v-card-text>
        <v-card-text align="center">
          Synopsis: {{ currentBook.book.summary }}
        </v-card-text>
      </v-card>
    </v-container>
    <v-container class="justify-center align-center">
      <v-row class="justify-center align-center">
        <v-btn
          class="primary ml-4 mr-4 mt-4 mb-4"
          rounded
          dark
          nuxt
          :to="`/edit/${currentBook.book.id}`"
          :block="$vuetify.breakpoint.xsOnly"
          >Edit this Book</v-btn
        >
        <v-btn
          class="error ml-4 mr-4 mt-4 mb-4"
          rounded
          dark
          :block="$vuetify.breakpoint.xsOnly"
          @click="handleDelete"
          >Delete this Book</v-btn
        >
        <v-btn
          class="gray ml-4 mr-4 mt-4 mb-4"
          rounded
          dark
          nuxt
          to="/bookshelf"
          :block="$vuetify.breakpoint.xsOnly"
          >Cancel</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id, //gets current book id
    };
  },

  computed: {
    //currentBook = {book: {state.book}, author:{state.author}}
    currentBook() {
      this.$store.dispatch("getBook", this.id);
      return {
        book: this.$store.state.book,
        author: this.$store.state.Author,
      };
    },
  },
  methods: {
    //full name of the author
    fullName() {
      return (
        this.currentBook.author.firstName +
        " " +
        this.currentBook.author.lastName
      );
    },
    //calls the deleteBook action in the store and redirects back to bookshelf page
    handleDelete() {
      this.$store.dispatch("deleteBook", this.id);
      this.$router.push({ name: "Bookshelf" });
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 400px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.scroll {
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
