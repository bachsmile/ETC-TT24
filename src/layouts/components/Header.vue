<template>
  <header>
    <div class="logo">
      <img src="../../assets/logo.jpg" alt="" />
    </div>

    <div class="flex items-center gap-[15px]">
      <div>
        <CmIcon custom="w-[35px]" :src="require('../../assets/vietnamICon.jpg')" />
      </div>
      <div class="flex gap-[2px]">
        <CmIcon :src="require('../../assets/user.svg')" />
        <CmIcon :src="require('../../assets/message.svg')" />
        <CmIcon :src="require('../../assets/bell.svg')" />
      </div>
      <div class="flex items-center">
        <CmIcon
          :custom="'!size-[40px] !object-cover rounded-full'"
          path="/register"
          :type-icon="true"
          :src="require('../../assets/account.png')"
        />
      </div>
    </div>
  </header>
</template>

<script>
import CmIcon from '@/commons/CmIcon.vue';

export default {
  name: 'HeaderLayout',

  components: {
    CmIcon,
  },
};
</script>

<style scoped>
header {
  height: 78px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0px 2px 4px -2px #1018280f, 0px 4px 8px -2px #1018281a;
  padding: 16px 32px;

  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #eee;
}

.logo img {
  height: 100%;
  width: 76px;
  object-fit: contain;
}
</style>
