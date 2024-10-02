<template>
  <div class="title">
    <router-link to="/">
      <img class="logo" src="../../../assets/logo.jpg" alt="" />
    </router-link>
    <h1>Đăng nhập</h1>
    <p>Nhanh chóng và dễ dàng</p>
  </div>
</template>

<script>
export default {};
</script>

<style scopde>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 16px;
}

.title h1 {
  font-weight: 700;
  color: #101828;
}

.title p {
  font-size: 13px;
  font-weight: 400;
  color: #667085;
}

.title .logo {
  width: 126px;
  height: 58px;
  gap: 0px;
  opacity: 0px;
}
</style>
