<template>
  <div class="flex-[0_0_28%]">
    <div :class="['card', { fixed: isFixed }]" :style="{ top: isFixed ? `${topOffset}px` : 'auto' }">
      <div>
        <img class="h-full w-full max-h-[180px] object-cover rounded-[8px]" src="../../../assets/khoahoc.jpg" alt="" />
      </div>
      <div>
        <CmProgess :ratio="70" />
      </div>

      <div>
        <CmInfomation
          :content="[
            { src: code, content: 'Mã khóa học 003' },
            { src: book, content: '123 nội dung' },
            { src: clock, content: '1h 23m' },
            { src: monitor, content: 'Hình thức online' },
            { src: award, content: 'Có chứng nhận' },
            { src: calendar, content: 'Ngày hết hạn 03/11/2022' },
          ]"
        />
      </div>

      <div class="px-[10px]">
        <CmButton child="Tiếp tục" type-button="button" />
      </div>
    </div>
  </div>
</template>

<script>
import CmButton from '@/commons/CmButton.vue';
import CmProgess from '@/commons/CmProgess.vue';
import CmInfomation from '@/commons/CmInfomation.vue';

import code from '../../../assets/code.svg';
import book from '../../../assets/book.svg';
import clock from '../../../assets/clock.svg';
import monitor from '../../../assets/monitor.svg';
import award from '../../../assets/award.svg';
import calendar from '../../../assets/calendar.svg';

export default {
  components: {
    CmButton,
    CmProgess,
    CmInfomation,
  },

  data() {
    return {
      code,
      book,
      clock,
      monitor,
      award,
      calendar,
      isFixed: false, // Trạng thái để xác định xem có nên gán fixed không
      topOffset: 20, // Khoảng cách từ đỉnh khi có fixed
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isFixed = window.scrollY > 250; // Thay đổi giá trị này theo nhu cầu của bạn
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s linear;
  padding: 16px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card.fixed {
  position: fixed; /* Gán vị trí fixed */
  width: calc(28% - 32px); /* Đảm bảo chiều rộng đúng */
  z-index: 1000; /* Đảm bảo nó nằm trên các phần tử khác */
  top: 20px; /* Sử dụng topOffset để xác định khoảng cách top */
}
</style>
