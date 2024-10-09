<template>
  <div>
    <div class="title">
      <p class="course-name">{{ course.id_Course }} {{ course.nameCourse }}</p>
      <p class="content-name">{{ course.description }}</p>
    </div>
    <div class="confirm">
      <div class="loading-percentage">
        <!-- Nếu có loading percentage, có thể hiển thị ở đây -->
        loading-percentage
      </div>
      <!-- <button class="begin-button">Bắt đầu</button> -->
      <CmButton
        propName="Bắt đầu"
        variant="primary"
        class="begin-button"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
import CmButton from "./CmButton.vue";

export default {
  name: "CmCard",
  components: {
    CmButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      key: 1,
    };
  },
  watch: {
    "props.content": function (newValue, oldValue) {},
    key(newValue, oldValue) {},
  },
  methods: {
    handleClick() {
      console.log("submit");
    },
  },
};
</script>

<style scoped>
.cm-card {
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>
