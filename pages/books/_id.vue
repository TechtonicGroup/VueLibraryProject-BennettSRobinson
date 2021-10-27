<template>
  <div class="pt-16">
    <h1>Hello book {{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
