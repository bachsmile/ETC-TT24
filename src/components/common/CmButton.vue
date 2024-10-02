<template>
  <div>
    <b-button
      :variant="variant"
      @click="onClick"
    >
      {{ propName }}
    </b-button>
  </div>
</template>

<script>
  export default {
    name: "CmButton",
    props: {
      propName: {
        type: [String, Number],
        default: 'Button'
      },
      variant: {
        type: String,
        default: 'primary'
      },
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>