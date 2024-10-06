<template>
  <div class="home-right">
    <div :class="['card']">
      <div class="shadow-1 p-2">
        <img
          class="h-full w-full max-h-[180px] object-contain rounded-[8px]"
          :src="getCourse.imgURL"
          alt=""
        />
      </div>
      <div>
        <CmProgess :ratio="70" />
      </div>

      <div>
        <CmInfomation
          :content="[
            {
              src: code,
              content: 'Mã khóa học ' + getCourse.statistics.courseCode,
            },
            {
              src: book,
              content: getCourse.statistics.totalLessons + ' Nội dung',
            },
            { src: clock, content: getCourse.statistics.totalDuration },
            { src: monitor, content: 'Hình thức ' + getCourse.statistics.mode },
            {
              src: award,
              content:
                getCourse.statistics.isCertified === true
                  ? 'Có chứng nhận'
                  : 'Không có chứng nhận',
            },
            { src: calendar, content: getCourse.statistics.expiryDate },
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
import { mapGetters } from 'vuex';
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
    };
  },

  computed: {
    ...mapGetters('course', ['getCourse']),
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isFixed = window.scrollY > 250;
    },
  },
};
</script>

<style scoped>
.shadow-1 {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.home-right {
  flex: 0 0 28%;
  position: relative; /* Thêm dòng này */
}

.card {
  box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky; /* Thay đổi từ fixed thành sticky */
  top: 20px; /* Khoảng cách từ đỉnh trang khi trở thành sticky */
  max-width: 376px;
}
.card.fixed {
  position: fixed; /* Gán vị trí fixed */
  width: calc(28% - 32px); /* Đảm bảo chiều rộng đúng */
  z-index: 1000; /* Đảm bảo nó nằm trên các phần tử khác */
  top: 20px; /* Sử dụng topOffset để xác định khoảng cách top */
  max-width: 376px;
}
</style>
