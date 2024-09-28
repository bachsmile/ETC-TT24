<template>
  <div>
    <b-card :title="title" class="cm-card">
      <slot></slot>
    </b-card>
  </div>
</template>

<script>
import CmButton from './CmButton.vue';

export default {
  name: "CmCard",
  components: {
    CmButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      key: 1
    }
  },
  watch: {
    'props.content': function (newValue, oldValue) {

    },
    key(newValue, oldValue) {

    }
  },

  created() {
    ;
  },

  mounted() {
    ;
  },
  updated() {
    ;
  },
  destroyed() {
    ;
  },
  methods: {
    handleClick() {
      console.log('submit');
    }
  },
}
</script>

<style scoped>
.cm-card {
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>