<!--Forms for Edit and Add book page -->
<template>
  <div>
    <v-card class="d-lg-flex d-sm-block pl-lg-16 justify-space-between">
      <v-form v-model="valid" validation>
        <v-container>
          <v-col>
            <v-row cols="12" md="4">
              <v-text-field
                label="Title"
                v-model="title"
                :rules="titleRules"
                required
              ></v-text-field>
            </v-row>
            <v-row cols="10" md="4">
              <v-text-field
                v-model="firstName"
                label="First name"
                class="mr-10"
                :rules="authorRules"
                required
              ></v-text-field>

              <v-text-field
                label="Last Name"
                v-model="lastName"
                :rules="authorRules"
                required
              ></v-text-field>
            </v-row>
            <v-row cols="12" md="4">
              <v-textarea
                label="Summary"
                v-model="summary"
                class="mr-10"
                outlined
              ></v-textarea>
            </v-row>
            <v-row cols="12" md="4">
              <v-text-field
                label="Published"
                v-model="published"
                type="date"
              ></v-text-field>
              <v-text-field
                label="Pages"
                class="ml-10"
                type="number"
                v-model="pages"
              ></v-text-field>
            </v-row>
            <v-row cols="12" md="4">
              <v-rating length="5" size="64" :value="rating" v-model="rating">
              </v-rating>
            </v-row>
          </v-col>
        </v-container>
      </v-form>
      <br />
      <v-card class="pl-lg-16 pa-10">
        <v-img
          :src="image"
          :row="$vuetify.breakpoint.xsOnly"
          contain
          width="400px"
          height="400px"
          v-model="image"
        />
        <br />
        <v-container class="d-flex justify-center align-center">
          <v-btn class="primary" @click="getFile" rounded>Add Image </v-btn>
          <input
            accept="image/*"
            class="d-none"
            ref="uploader"
            type="file"
            @change="handleImage"
          />
        </v-container>
      </v-card>
    </v-card>
    <!--Only see this if its the edit page -->
    <v-card v-if="form === 'edit'">
      <v-row class="d-flex justify-center align-center">
        <v-btn
          class="primary mr-lg-5"
          :block="$vuetify.breakpoint.xsOnly"
          type="submit"
          :disabled="!valid"
          rounded
          @click="handleSubmit"
          >Submit</v-btn
        >

        <v-btn
          class="none ml-lg-5"
          :block="$vuetify.breakpoint.xsOnly"
          nuxt
          to="/bookshelf"
          rounded
          >Cancel
        </v-btn>
      </v-row>
    </v-card>
    <v-card v-else>
      <v-row class="d-flex justify-center align-center">
        <v-btn
          class="primary mr-lg-5"
          :block="$vuetify.breakpoint.xsOnly"
          type="submit"
          :disabled="!valid"
          rounded
          @click="handleSubmit"
          >Add Book</v-btn
        >

        <v-btn
          class="none ml-lg-5"
          :block="$vuetify.breakpoint.xsOnly"
          nuxt
          to="/bookshelf"
          rounded
          >Cancel
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Empty from "@/assets/empty.jpeg";
export default {
  props: ["form", "book", "author", "id"], //gets the props
  data() {
    return {
      valid: false,
      title: this.book.title,
      firstName: this.author.firstName,
      lastName: this.author.lastName,
      summary: this.book.summary,
      published: this.book.published
        ? this.deFormatDate(this.book.published)
        : this.book.published,
      rating: this.book.rating,
      pages: this.book.pages,
      //form rules
      titleRules: [(v) => !!v || "Title is required"],
      authorRules: [(v) => !!v || "Author name is required"],
      image: this.book.picture,
    };
  },
  computed: {
    ...mapState(["file"]),
  },
  methods: {
    //Clicks the file input tag so you can upload images
    getFile() {
      this.$refs.uploader.click();
    },
    //gets the image and saves it to the data image and update the file state
    handleImage(e) {
      const newImage = e.target.files[0];
      this.image = URL.createObjectURL(newImage);
      this.$store.commit("updateImage", newImage);
    },
    //once submitted converts the data values into a form data
    //Edit - it will update the current book with the form data
    //Else - it will add the book with the form data
    //then it will redirect to the bookshelf page
    handleSubmit() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("first", this.firstName);
      formData.append("last", this.lastName);
      formData.append("summary", this.summary || undefined);
      formData.append("published", this.formatDate(this.published));
      formData.append("pages", this.pages);
      formData.append("rating", this.rating);
      formData.append("picture", this.file);

      if (this.form === "edit")
        this.$store.dispatch("updateBook", { id: this.id, data: formData });
      else this.$store.dispatch("addBook", formData);
      this.$store.commit("updateImage", Empty);
      this.$router.push({ name: "Bookshelf" });
    },
    //formats the data of the input date picker to MM/DD/YYYY
    formatDate(date) {
      if (!date) return undefined;
      const [YYYY, MM, DD] = date.split("-");
      const newPublished = `${MM}/${DD}/${YYYY}`;
      return newPublished;
    },
    //reformats the date MM/DD/YYYY to YYYY-MM-DD so the date picker can read it
    deFormatDate(date) {
      if (!date) return undefined;
      const [MM, DD, YYYY] = date.split("/");
      return `${YYYY}-${MM}-${DD}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
