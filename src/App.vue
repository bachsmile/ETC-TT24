<template>
  <div>
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import MethodsUtil from './utils/MethodsUtil';

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      message: [],
      title: "Learning"
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {
    const params = {
      id: 1
    }
    MethodsUtil.requestApiCustom('https://jsonplaceholder.typicode.com/posts/1/comments', 'GET', params).then((value) => {
      // console.log(value);
    })
    MethodsUtil.setLocalStorage('key', 'value12321');

    this.$forceUpdate();
    const data = false
    this.$nextTick(() => {
      const data = true
    })
    // localStorage.setItem('key', 'value12321');
  },
  methods: {
    addMore(e) {
      console.log('click');
    },

  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.text-danger {
  color: purple
}
</style>
