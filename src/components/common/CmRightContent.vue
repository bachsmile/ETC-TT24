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
    <CmContainer />

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
    <CmPagination />
  </div>
</template>
<script>
import CmCard from "./CmCard.vue";
import CmPagination from "./CmPagination.vue";
import CmHeader from "./CmHeader.vue";
import CmContainer from "./Container.vue";
import axiosIns from "@/plugins/Axios";

export default {
  name: "CmRightContent",
  components: {
    CmHeader,
    CmContainer,
    CmCard,
    CmPagination,
  },
  data() {
    return {
      courseList: [],
      pageNumber: 1,
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
