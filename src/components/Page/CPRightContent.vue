<template>
  <!-- phía bên phải -->
  <div class="right">
    <!-- header -->
    <CmHeader />
    <!-- content -->
    <div class="name-content">
      <p class="p-name-content">Nội dung đang học</p>
    </div>
    <!-- container -->
    <CmSort />
    <CmButton label="Thêm khóa học" @click="handleCreate" />
    <CmCreateLearningCourse
      v-if="createOn"
      @close="createOn = false"
    />
    <!-- khóa học chính  -->
    <div class="main-content">
      <div class="left-card">
        <div
          v-for="(course, index) in courseList"
          v-if="index % 2 === 0"
          :key="course.id"
        >
          <CmCard
            :idCourse="course.id"
            :courseName="course.nameCourse"
            :contentName="course.description"
            loadingPercent="Loadding 100"
          >
          </CmCard>
        </div>
      </div>
      <div class="right-card">
        <div
          v-for="(course, index) in courseList"
          v-if="index % 2 !== 0"
          :key="course.id"
        >
          <CmCard
            :idCourse="course.id"
            :courseName="course.nameCourse"
            :contentName="course.description"
            loadingPercent="Loadding 100"
          >
          </CmCard>
        </div>
      </div>
    </div>
    <!-- trang footer phân trang -->
    <CmPagination @updatePageNumber="updatePageNumber" />
  </div>
</template>
<script>
import CmCard from "../common/CmCard.vue";
import CmPagination from "../common/CmPagination.vue";
import CmHeader from "../common/CmHeader.vue";
import CmSort from "../common/CmSort.vue";
import axiosIns from "@/plugins/Axios";
import CmButton from "../common/CmButton.vue";
import CmCreateLearningCourse from "../common/CmCreateLearningCourse.vue";

export default {
  name: "CmRightContent",
  components: {
    CmHeader,
    CmSort,
    CmCard,
    CmPagination,
    CmButton,
    CmCreateLearningCourse,
  },
  data() {
    return {
      courseList: [],
      pageNumber: 1,
      createOn: false,
    };
  },
  async created() {
    await this.cource(); // Fetch the courses when component is created
  },
  methods: {
    async cource() {
      try {
        const res = await axiosIns.get(
          `LearningCourse?pageNumber=${this.pageNumber}&pageSize=10`
        );
        this.courseList = res.data;

        console.log(this.courseList);
      } catch (error) {
        throw error;
      }
      // Go to the previous page
    },
    updatePageNumber(newPageNumber) {
    this.pageNumber = newPageNumber;
    this.cource();  // Fetch courses based on the new page number
    },
    handleCreate(){
      this.createOn = true;
      // console.log("handleClick");
    }
  },
};
</script>
<style>
/* Right div */
.right {
  flex-grow: 1;
  /* Let the right div take up the remaining space */
  background-color: #ffffff;
  padding: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.button-add{
  margin-top: 10px;
}
.left-card {
  float: left;
  margin: 1px;
}
.right-card {
  float: right;
  margin: 1px;
}

/* footer */
</style>
