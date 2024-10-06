<template>
  <div class="flex max-h-[100vh] transition-all duration-300">
    <!-- Sidebar -->
    <SideBar :is-visible="isSidebarVisible" @toggle-sidebar="toggleSidebar" />

    <!-- Main Content -->
    <div
      :class="mainContentClass"
      class="p-[32px] bg-[#F9FAFB] flex flex-col gap-[25px] overflow-auto transition-all duration-300"
    >
      <HeaderLayout />
      <Location />
      <main class="flex">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderLayout from './components/Header.vue';
import Location from './components/Location.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    HeaderLayout,
    Location,
    SideBar,
  },
  data() {
    return {
      isSidebarVisible: true,
    };
  },
  computed: {
    mainContentClass() {
      return this.isSidebarVisible ? 'w-[calc(100%-320px)]' : 'w-[calc(100%-80px)]';
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>
