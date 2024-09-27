<template>
  <form action="#">
    <div class="inputGroup">
      <CmInput lable="Họ" name="lastName" :typeUi="2" />
      <CmInput lable="Tên" name="firstName" :typeUi="2" />
    </div>

    <CmInput lable="Email" name="email" :typeUi="1" />
    <CmInput lable="Số điện thoại" name="tel" :typeUi="1" :activeImg="true" />
    <CmInput lable="Tên đăng nhập" name="userName" :typeUi="1" />

    <div class="inputGroup">
      <CmInput lable="Mật khẩu" name="password" inputType="password" :showContent="true" :typeUi="2" />
      <CmInput lable="Nhập lại mật khẩu" name="passwordConfirm" inputType="password" :showContent="true" :typeUi="2" />
    </div>

    <CmInput
      lable='Tôi đồng ý cho "Trí Việt Test CLS 4.0s" sử dụng các thông tin trên cho mục đích học tập.'
      name="forget"
      inputType="checkbox"
      :typeUi="1"
    />

    <CmButton child="Đăng kí" type-button="submit" />
  </form>
</template>

<script>
import CmButton from '@/components/commons/CmButton.vue';
import CmInput from '@/components/commons/CmInput.vue';

export default {
  components: {
    CmInput,
    CmButton,
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.inputGroup {
  display: flex;
  gap: 10px;
}
</style>
