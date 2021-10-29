<!--Search Bar Component -->
<template>
  <div clipped-right app>
    <v-text-field
      label="Search"
      class="mt-4"
      v-model="search"
      @keypress.enter="handleSearch"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      right: true,
      search: "",
    };
  },
  methods: {
    //gets the v-model search value and gives it to a tmp value so you can reset the search data value to ''
    // and sends the search value to bookshelf
    handleSearch() {
      const result = this.search;
      this.search = "";
      this.$router.push({ path: "/bookshelf", query: { search: result } });
    },
  },
};
</script>

<style lang="scss" scoped>
v-text-field {
  color: white;
}
</style>
