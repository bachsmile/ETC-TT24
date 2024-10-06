<template>
  <div class="flex flex-col gap-[32px] p-[24px]">
    <div class="mb-[20px]">
      <div class="flex border-b border-[#EAECF0]">
        <router-link
          active-class="hightLight"
          class="hightLight h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="#"
        >
          Học Viên
        </router-link>

        <router-link
          class="h-[50px] flex justify-center items-center text-[#667085] px-6 py-2 border-b-2 border-[#ffffff00]"
          to="#"
        >
          Giảng viên
        </router-link>
      </div>
      <div>
        <h1
          class="text-[#101828] text-[18px] leading-[28px] font-semibold my-[24px]"
        >
          Đánh giá
        </h1>
        <div class="shadow-lg w-full rounded-[8px] overflow-hidden">
          <div
            class="bg-white py-[24px] px-[30px] flex items-center justify-center gap-[32px] w-full"
          >
            <div
              class="flex-[0_0_30%] flex flex-col gap-[16px] items-center justify-center"
            >
              <h1
                class="text-[60px] font-semibold leading-[44px] tracking-[-2%] text-[#344054]"
              >
                {{ getCourse.totalStars }}
              </h1>
              <div class="flex gap-2">
                <img :src="Star" alt="" />
                <img :src="Star" alt="" />
                <img :src="Star" alt="" />
                <img :src="Star" alt="" />
                <img :src="Star" alt="" />
              </div>
              <div
                class="text-[14px] leading-[20px] text-center text-[#1570EF] font-medium"
              >
                {{ getCourse.totalReviews }} Đánh giá
              </div>
            </div>
            <div
              class="flex-[0_0_70%] flex flex-col gap-[16px] justify-center items-start"
            >
              <CmProgess :ratio="getCourse.vote.fiveStarVotes" star="5 sao" />
              <CmProgess :ratio="getCourse.vote.fourStarVotes" star="4 sao" />
              <CmProgess :ratio="getCourse.vote.threeStarVotes" star="3 sao" />
              <CmProgess :ratio="getCourse.vote.twoStarVotes" star="2 sao" />
              <CmProgess :ratio="getCourse.vote.oneStarVotes" star="1 sao" />
            </div>
          </div>
        </div>
        <div class="w-full text-center pt-4">
          <button
            class="bg-[#1570ef] text-white py-[10px] px-[16px] rounded-xl"
            @click="showCommen"
          >
            Viết đánh giá
          </button>
        </div>

        <div
          v-show="isComment"
          class="p-8 rounded-[8px] bg-white shadow-md flex items-center gap-10 relative"
        >
          <img
            class="size-[100px] rounded-full object-cover"
            src="https://i.pinimg.com/564x/4b/e9/35/4be935f22ca10847aa557dc988215251.jpg"
            alt=""
          />
          <div class="w-[90%]">
            <div class="w-[100%] overflow-hidden relative mb-5">
              <input
                type="text"
                class="placeholder:text-[12px] placeholder:text-[#281018] text-[12px] text-[#281018] h-full w-[100%] bg-[#f2f4f7] px-6 py-5 rounded-2xl"
                placeholder="Đánh giá tại đây ..."
              />
              <div
                class="absolute bg-blue-500 px-6 py-3 rounded-e-2xl top-0 right-0"
              >
                <i
                  class="fa-solid fa-paper-plane text-white text-[30px] h-full w-[100%]"
                ></i>
              </div>
            </div>
          </div>

          <div
            class="group cursor-pointer rounded-full size-[25px] flex justify-center items-center absolute top-0 right-2"
            @click="showCommen"
          >
            <i
              class="text-[15px] text-black fa-solid fa-xmark group-hover:text-red-500"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="flex justify-center items-center gap-3 py-[8px] px-[14px] bg-[#EFF8FF] rounded-[8px]"
      >
        <img src="../../../assets/chervon-down.svg" alt="" />
        <h1 class="text-[#1659cc] font-semibold">Tất cả</h1>
      </button>
    </div>
    <div class="flex flex-col justify-start gap-6">
      <CmComment
        v-for="comment in getCourse.comments"
        :key="comment.id"
        :content-comment="comment.content"
        :img-user="comment.imgURL"
        :name-user="comment.commenterName"
        :time-comment="comment.commentedAt"
        :default-comment="comment.default"
      />
    </div>
    <button
      class="flex justify-center items-center gap-3 animate-bounce mx-auto py-[8px] px-[14px] bg-[#EFF8FF] rounded-[8px]"
    >
      <img src="@/assets/Arrow-down.svg" alt="" />
      <h1 class="text-[#1659cc] font-semibold">Xem thêm</h1>
    </button>
  </div>
</template>

<script>
import CmProgess from '@/commons/CmProgess.vue';
import Star from '@/assets/start.svg';
import CmComment from '@/commons/CmComment.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'VoteContent',

  components: {
    CmProgess,
    CmComment,
  },

  data() {
    return {
      Star,
      isComment: false,
    };
  },

  computed: {
    ...mapGetters('course', ['getCourse']),
  },

  methods: {
    showCommen() {
      this.isComment = !this.isComment;
    },
  },
};
</script>

<style>
.hightLight {
  color: #175cd3;
  border-bottom: 2px solid #175cd3;
  background-color: #eff8ff;
}
</style>
