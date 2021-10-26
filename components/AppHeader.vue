<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="d-sm-none"
      disable-resize-watcher
      right
      app
    >
      <!--  -->
      <v-list nav>
        <v-list-item-group>
          <v-list-item nuxt exact to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/bookshelf">
            <v-list-item-title>Bookshelf</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/add">
            <v-list-item-title>Add Book</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-right app>
      <v-toolbar-title
        ><nuxt-link exact to="/" style="text-decoration: none; color: inherit">
          The Library
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="d-none d-sm-inline-flex">
        <v-btn nuxt exact to="/"> Home </v-btn>
        <v-btn nuxt to="/bookshelf"> Bookshelf </v-btn>
        <v-btn nuxt to="/add"> Add Book </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      right: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
