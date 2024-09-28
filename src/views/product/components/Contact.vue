<template>
  <div>
    <div>{{ $store.state.data }}</div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    console.log(this.$store.commit('setData', [ 1, 2 ]));
    this.$store.dispatch('updateMTData', 2);
  },
}
</script>

<style lang="scss" scoped></style>