<template>
  <div clipped-right app>
    <v-text-field label="Search" class="mt-4"></v-text-field>
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

<style lang="scss" scoped>
v-text-field {
  color: white;
}
</style>
