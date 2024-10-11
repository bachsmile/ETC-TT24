<!-- Card.vue -->
<template>
  <div class="card">
    <div class="title">
      <p class="course-name">{{idCourse}} {{courseName}}</p>
      <p class="content-name">{{contentName}}</p>
    </div>
    <div class="confirm">
      <div class="loading-percentage">
        {{loadingPercent}}%
      </div>
    <CmButton class="begin-button" label="Bắt đầu" @click="handleClick" />

    </div>
    <!-- Dùng slot để thêm nội dung tuỳ chỉnh -->
  </div>
</template>

<script>
import CmButton from './CmButton.vue';

export default {
  name: "LearningContent",
  components: {
    CmButton
},

  props: {
    idCourse:{
      type: Number,
      required: true
    },
    courseName: {
      type: String,
      required: true,
    },
    contentName: {
      type: String,
      required: true,
    },
    loadingPercent: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>

.card[data-v-462b507e] {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 500px;
  margin: 10px 0;
}
.title {
  height: 120px;
}

.content-name {
  color: #475569;
  /* Darker shade for content name */
  font-size: 14px;
  font-weight: 500;
}

.course-name {
  color: #1d4ed8;
  /* Blue for course name */
  font-size: 18px;
  font-weight: 700;
}

.confirm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.loading-percentage {
  display: flex;
  align-items: center;
}

.loading-percentage::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #22c55e;
  /* Green dot for loading */
  border-radius: 50%;
  margin-right: 8px;
}

.loading-percentage {
  font-size: 14px;
  color: #475569;
  /* Gray text for percentage */
}

button.begin-button {
  background-color: #1d4ed8;
  /* Blue button background */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

button.begin-button:hover {
  background-color: #1e40af;
  /* Darker blue on hover */
}

.right-card .begin-button {
  background-color: #0ea5e9;
  /* Lighter blue for the right card */
}

.right-card .begin-button:hover {
  background-color: #0284c7;
  /* Darker shade for hover */
}
</style>
