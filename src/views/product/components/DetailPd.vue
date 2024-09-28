<template>
  <div>
    <CmCard>
      <div class="d-flex justify-content-center align-items-center pa-2 ma-2">
        <img src="https://cdn.tgdd.vn/Products/Images/42/201228/samsung-galaxy-a80-black-200-1-750x500.png" alt="">
      </div>
      <div class="text-danger">
        SẢN PHẨM Ngừng kinh doanh
      </div>
      <div>
        <span class="text-primary">Xem địa chỉ bảo hành</span>
      </div>
      <Contact></Contact>
    </CmCard>
  </div>
</template>

<script>
import CmCard from "@/components/common/CmCard.vue";
import Contact from "./Contact.vue";

export default {
  name: "DetailPd",
  components: {
    CmCard,
    Contact
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
  },
  mounted() {
    ;
  },
  methods: {
    click() {
      console.log('click');

    }
  },
};
</script>

<style lang="scss" scoped></style>
