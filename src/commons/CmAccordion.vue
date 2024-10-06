<template>
  <div class="cursor-pointer group">
    <div
      :class="[
        'max-w-[100%] w-full h-auto p-3 bg-[#f2f4f7] flex items-center gap-3 transition-all duration-300 rounded-md',
        { 'justify-between': isSidebarVisible, 'justify-center': !isSidebarVisible },
      ]"
      @click="toggleShow"
    >
      <img :src="imgIcon" alt="" class="w-6 h-6" />
      <div v-if="isSidebarVisible" class="w-full flex items-center justify-between gap-3">
        <h1 class="font-semibold text-[#4b5668] text-[16px]">
          {{ title }}
        </h1>
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.41058 6.91073C4.73602 6.5853 5.26366 6.5853 5.58909 6.91073L9.99984 11.3215L14.4106 6.91073C14.736 6.5853 15.2637 6.5853 15.5891 6.91073C15.9145 7.23617 15.9145 7.76381 15.5891 8.08925L10.5891 13.0892C10.2637 13.4147 9.73602 13.4147 9.41058 13.0892L4.41058 8.08925C4.08514 7.76381 4.08514 7.23617 4.41058 6.91073Z"
              fill="#4b5668"
            />
          </svg>
        </span>
      </div>
    </div>
    <div
      v-if="isSidebarVisible"
      ref="contentWrapper"
      class="max-w-[100%] w-full px-5 py-1 overflow-hidden transition-all duration-500"
      :style="{ maxHeight: isShow ? contentHeight + 'px' : '0px' }"
    >
      <div
        v-for="(item, index) in content"
        :key="index"
        class="flex w-full py-4 border-b-[0.5px] border-gray-200 text-[#4b5668] hover:text-[#2997ff]"
      >
        <li>
          <a href="" class="text-[16px]">{{ item.value }}</a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    imgIcon: {
      type: String,
      required: true,
    },
    isSidebarVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
      contentHeight: 0,
    };
  },
  methods: {
    toggleShow() {
      if (this.isSidebarVisible) {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.$nextTick(() => {
            this.contentHeight = this.$refs.contentWrapper.scrollHeight;
          });
        } else {
          this.contentHeight = 0;
        }
      }
    },
  },
};
</script>

<style scoped></style>
