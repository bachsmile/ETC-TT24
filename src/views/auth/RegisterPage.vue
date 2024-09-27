<template>
  <div class="container">
    <div>
      <img class="bg" src="../../assets/bg.jpg" alt="" />
      <img class="logo" src="../../assets/logo.svg" alt="" />
    </div>

    <div class="content">
      <HeadContent />
      <BodyContent />
    </div>
  </div>
</template>

<script>
import HeadContent from './components/HeadContent.vue';
import BodyContent from './components/BodyContent.vue';

export default {
  components: {
    BodyContent,
    HeadContent,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: end;
  padding: 0.5% 5%;
  gap: 8px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.container .bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
}

.container .logo {
  position: absolute;
  bottom: 50%;
  left: 0;
  z-index: -1;
  transform: translate(60%, 40%);
  width: 456px;
  height: 288px;
}

.content {
  background-color: white !important;
  border-radius: 8px;
  height: max-content;
  width: 420px;
  padding: 32px;
  box-shadow: 14px -3px 36px #02020208, 4px 3px 36px #00000078;
}
</style>
