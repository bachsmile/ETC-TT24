<template>
  <header>
    <div class="logo"></div>

    <div class="flex items-center gap-[15px]">
      <div>
        <CmIcon custom="w-[35px]" :src="require('../../assets/vietnamICon.jpg')" />
      </div>
      <div class="flex gap-[2px]">
        <CmIcon :src="require('../../assets/user.svg')" />
        <CmIcon :src="require('../../assets/message.svg')" />
        <CmIcon :src="require('../../assets/bell.svg')" />
      </div>
      <div class="flex items-center relative group" @click="changeShowProfile">
        <CmIcon
          :custom="'!size-[40px] !object-cover rounded-full '"
          path="#"
          :type-icon="true"
          :src="require('../../assets/account.png')"
        />
        <div
          v-show="showProfile"
          class="pt-3 z-[999] bg-white p-4 shadow-xl border border-[#e0e1e2] rounded-2xl h-max w-max absolute bottom-0 translate-y-[105%] translate-x-[-70%]"
        >
          <div class="mb-6">
            <h1 class="font-bold">
              {{ user.lastName + user.firstName }}
            </h1>
            <p class="font-light text-[13px]">
              {{ user.emailAddress }}
            </p>
          </div>
          <div class="flex flex-col gap-2 px-2">
            <div
              class="hover:tracking-[-0.15px] hover:text-black hover:font-bold hover:shadow-md transition-all duration-150 cursor-pointer hover:bg-[#f4f4f5] flex gap-3 items-center text-[#5a5e60] text-[14px] rounded-2xl py-3 px-4"
            >
              <i class="fa-solid fa-user"></i>
              Thông tin cá nhân
            </div>
            <div
              class="hover:tracking-[-0.15px] hover:text-black hover:font-bold hover:shadow-md transition-all duration-150 cursor-pointer hover:bg-[#f4f4f5] flex gap-3 items-center text-[#5a5e60] text-[14px] rounded-2xl py-3 px-4"
              @click="logout"
            >
              <i class="fa-solid fa-right-from-bracket"></i>Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CmIcon from '@/commons/CmIcon.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderLayout',

  components: {
    CmIcon,
  },

  data() {
    return {
      showProfile: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),
  },

  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    changeShowProfile() {
      this.showProfile = !this.showProfile;
    },
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
