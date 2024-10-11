<template>
  <div class="filter-group">
    <label for="course">{{ label }}</label>
    <select
      id="course"
      name="course"
      v-model="selectedCourse"
      @change="emitSelection"
    >
      <option value="" disabled selected>Chọn khóa học</option>
      <option v-for="course in courses" :key="course.LearningCourseId" :value="course.LearningCourseId">
        {{ course.LearningCourseName }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
    name: "CmCombobox",
  props: {
    courses: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "Null",
    },
  },
  data() {
    return {
      selectedCourse: "",
    };
  },
  methods: {
    emitSelection() {
      this.$emit("courseSelected", this.selectedCourse);
    },  
  },
};
</script>

<style scoped>

.filter-group {
  flex-direction: column;
  gap: 5px;
  margin: 0 16px;
  display: flex;
  width: auto;
}

label {
  font-weight: bold;
  font-size: 14px;
  /* Increased font size */
  color: #333;
}

#course {
  padding: 8px;
  width: 100%;
  width: 300px;
  /* Adjust width */
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  /* Subtle inner shadow */
  font-size: 14px;
}
</style>
