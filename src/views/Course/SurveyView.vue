<template>
  <div class="main-container">
    <div class="sidebar-container">
      <LeftSidebar />
    </div>
    <div class="content-container">
      <div class="survey-container">
        <UserMenu @logout="handleLogout" />
        <TabHeader :activeTab="activeTab" @tab-change="setActiveTab" />
        <div class="td">
          <h5>{{ tabTitle }}</h5>
        </div>
        <FilterSection
          :topics="topics"
          @filter-change="handleFilterChange"
          @search="handleSearch"
          @view-mode-change="handleViewModeChange"
        />
        <br />
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <SurveyGrid
          v-else
          :surveys="filteredSurveys"
          :viewMode="viewMode"
          :tab="activeTab"
          :page="currentPage"
        />
        <PaginationComponent
          :currentPage="currentPage"
          :totalPages="totalPages"
          :tab="activeTab"
          @page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserMenu from "./componentSurvey/UserMenu.vue";
import TabHeader from "./componentSurvey/TabHeader.vue";
import FilterSection from "./componentSurvey/FilterSection.vue";
import SurveyGrid from "./componentSurvey/SurveyGrid.vue";
import PaginationComponent from "./componentSurvey/PaginationComponent.vue";
import LeftSidebar from "./componentSurvey/LeftSidebar.vue";

export default {
  name: "SurveyView",
  components: {
    UserMenu,
    TabHeader,
    FilterSection,
    SurveyGrid,
    PaginationComponent,
    LeftSidebar,
  },
  data() {
    return {
      surveys: [],
      filteredSurveys: [],
      activeTab: "ongoing",
      topics: [],
      currentPage: 1,
      totalPages: 0,
      filters: {
        topic: "",
        fromDate: "",
        toDate: "",
        searchQuery: "",
      },
      loading: false,
      error: null,
      viewMode: "default",
    };
  },
  computed: {
    tabTitle() {
      switch (this.activeTab) {
        case "upcoming":
          return "Kỳ khảo sát sắp diễn ra";
        case "completed":
          return "Kỳ khảo sát đã kết thúc";
        default:
          return "Kỳ khảo sát đang diễn ra";
      }
    },
  },
  methods: {
    async fetchSurveys() {
      this.loading = true;
      this.error = null;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://localhost:44347/Surveys", {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            page: this.currentPage,
            tab: this.activeTab,
            ...this.filters,
          },
        });

        const { items, totalPages, currentPage } = response.data;
        this.surveys = items;
        this.filterSurveys(); // Apply filtering after fetching
        this.totalPages = totalPages;
        this.currentPage = currentPage;
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy dữ liệu từ API:", error);
        this.error = "Không thể tải dữ liệu khảo sát. Vui lòng thử lại sau.";
        if (error.response && error.response.status === 401) {
          this.handleAuthError();
        }
      } finally {
        this.loading = false;
      }
    },
    async fetchTopics() {
      try {
        const response = await axios.get(
          "https://localhost:44347/Surveys/categories"
        );
        this.topics = response.data;
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      this.currentPage = 1;
      this.fetchSurveys();
    },
    handleAuthError() {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      this.$router.push("/login");
    },
    handleFilterChange(filter) {
      this.filters[filter.type] = filter.value;
      this.currentPage = 1;
      this.fetchSurveys();
    },
    handleSearch(searchQuery) {
      this.filters.searchQuery = searchQuery;
      this.filterSurveys();
    },
    //lọc các khảo sát dựa trên từ khóa tìm kiếm
    filterSurveys() {
      if (!this.filters.searchQuery) {
        this.filteredSurveys = this.surveys;
      } else {
        const searchLower = this.filters.searchQuery.toLowerCase();
        this.filteredSurveys = this.surveys.filter((survey) => {
          return (
            survey.title.toLowerCase().includes(searchLower) ||
            survey.category.toLowerCase().includes(searchLower) ||
            (survey.description &&
              survey.description.toLowerCase().includes(searchLower))
          );
        });
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchSurveys();
    },
    handleLogout() {
      this.handleAuthError();
    },
    handleViewModeChange(mode) {
      this.viewMode = mode;
    },
  },
  created() {
    this.fetchTopics();
  },
  mounted() {
    this.fetchSurveys();
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh; 
}
.sidebar-container {
  flex: 0 0 23%;
  max-width: 23%;
}
.content-container {
  flex: 1;
  overflow-y: auto;

}
.survey-container {
  padding: 40px;
}
.td {
  height: 40px;
 
}
</style>