<template>
  <v-container class="mt-16" max-height="500px">
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-h3" large
        >Add Book</v-card-title
      >
    </v-card>
    <v-card class="d-lg-flex d-sm-block pl-lg-16 justify-space-between">
      <v-form>
        <v-container>
          <v-col>
            <v-row cols="12" md="4">
              <v-text-field
                v-model="firstname"
                label="Title"
                required
              ></v-text-field>
            </v-row>
            <!-- <v-card-title class="justify-center align-center"
              >Author:
            </v-card-title> -->
            <v-row cols="10" md="4">
              <v-text-field
                v-model="lastname"
                label="First name"
                class="mr-10"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Last Name"
                required
              ></v-text-field>
            </v-row>
            <v-row cols="12" md="4">
              <v-textarea
                v-model="lastname"
                label="Summary"
                class="mr-10"
                outlined
              ></v-textarea>
            </v-row>
            <v-row cols="12" md="4">
              <v-text-field
                v-model="email"
                label="Published"
                type="date"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Pages"
                class="ml-10"
                type="number"
              ></v-text-field>
            </v-row>
          </v-col>
        </v-container>
      </v-form>
      <br />
      <v-card class="pl-lg-16 pa-10">
        <v-img :src="img" :row="$vuetify.breakpoint.xsOnly" contain />
        <br />
        <v-container class="d-flex justify-center align-center">
          <v-btn class="primary">Add Image </v-btn>
        </v-container>
      </v-card>
    </v-card>
    <v-card>
      <v-row class="d-flex justify-center align-center">
        <v-btn class="primary mr-lg-5" :block="$vuetify.breakpoint.xsOnly"
          >Add Book</v-btn
        >
        <v-btn
          class="none ml-lg-5"
          :block="$vuetify.breakpoint.xsOnly"
          nuxt
          to="/bookshelf"
          >Cancel
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Empty from "@/assets/empty.jpeg";
export default {
  name: "Add",
  data() {
    return {
      img: Empty,
    };
  },
};
</script>

<style lang="scss" scoped></style>
