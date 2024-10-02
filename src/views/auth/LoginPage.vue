<template>
  <div class="container flex justify-end items-center">
    <div>
      <img class="bg" src="../../assets/bg.jpg" alt="" />
      <img class="logo" src="../../assets/logo.svg" alt="" />
    </div>

    <div class="content">
      <LogHeader />
      <LogBody />

      <div class="navigate">
        <p>Bạn đã chưa có tài khoản?</p>
        <router-link to="/register"> Đăng kí ngay </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LogHeader from './components/LogHeader.vue';
import LogBody from './components/LogBody.vue';

export default {
  components: {
    LogHeader,
    LogBody,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: end;
  padding: 1% 5%;
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
  padding: 20px 32px;
  box-shadow: 14px -3px 36px #02020208, 4px 3px 36px #00000078;
}

.navigate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 13px;
  gap: 5px;
}

.navigate p {
  color: #667085;
}

.navigate a {
  font-weight: 500;
  text-decoration: none;
  color: #1570ef;
}
</style>
