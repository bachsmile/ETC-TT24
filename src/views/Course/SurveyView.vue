<template>
  <div class="container2">
    <div class="left"></div>
    <div class="survey-container">
      <div class="head-user-menu">
        <div class="icon flag-icon">
          <img src="@/assets/image/laco.jpg" alt="Vietnam flag" />
        </div>

        <div class="icon flag-icon">
          <img src="@/assets/image/person.jpg" alt="user-icon" />
        </div>
        <div class="icon flag-icon">
          <img src="@/assets/image/mess.jpg" alt="user-icon" />
        </div>
        <div class="icon flag-icon">
          <img src="@/assets/image/alert.jpg" alt="user-icon" />
        </div>

        <div class="profile">
          <img
            src="@/assets/image/acc.jpg"
            alt="Profile picture"
            class="profile-pic"
          />
          <span class="status-indicator"></span>
        </div>
      </div>
      <div class="header">
        <div class="tabs">
          <button
            class="tab"
            :class="{ active: activeTab === 'ongoing' }"
            @click="setActiveTab('ongoing')"
          >
            Khóa học đang diễn ra
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'upcoming' }"
            @click="setActiveTab('upcoming')"
          >
            Khóa học sắp diễn ra
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'completed' }"
            @click="setActiveTab('completed')"
          >
            Khóa học đã kết thúc
          </button>
        </div>
      </div>
      <br />

      <h5>{{ tabTitle }}</h5>
      <br />

      <div class="survey-filter">
        <!-- Filter section -->
        <div class="filter-container">
          <div class="filter-row">
            <!-- Topic select -->
            <div class="filter-item">
              <label class="filter-label">Chủ đề</label>
              <div class="select-wrapper">
                <select v-model="selectedTopic" class="filter-select">
                  <option value="">Chọn chủ đề</option>
                  <option
                    v-for="topic in topics"
                    :key="topic.id"
                    :value="topic.id"
                  >
                    {{ topic.name }}
                  </option>
                </select>
                <span class="select-arrow">▼</span>
              </div>
            </div>

            <div class="filter-item">
              <label class="filter-label">Từ ngày</label>
              <div class="date-wrapper">
                <img
                  src="@/assets/image/datetime.jpg"
                  alt="Calendar icon"
                  class="date-icon"
                />
                <input
                  type="text"
                  v-model="fromDate"
                  placeholder="hh:mm DD/MM/YYYY"
                  class="date-input"
                  @focus="showFromDatePicker = true"
                  readonly
                />
                
              </div>
            </div>

            
            <div class="filter-item">
              <label class="filter-label">Đến ngày</label>
              <div class="date-wrapper">
                <img
                  src="@/assets/image/datetime.jpg"
                  alt="Calendar icon"
                  class="date-icon"
                />
                <input
                  type="text"
                  v-model="fromDate"
                  placeholder="hh:mm DD/MM/YYYY"
                  class="date-input"
                  @focus="showFromDatePicker = true"
                  readonly
                />
               
              </div>
            </div>
          </div>

          <div class="wapperSearch">
            <div style="flex: '0 0 50%'"></div>
            <div class="search-row">
              <div class="search-wrapper">
                <img
                  src="@/assets/image/search.jpg"
                  alt="Search"
                  class="search-image"
                />
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Tìm kiếm"
                  class="search-input"
                />
              </div>

              <div class="view-options">
                <button class="view-button">
                  <img src="@/assets/image/loc.jpg" alt="Search icon" />
                  Ẩn lọc
                </button>
                <div class="view-button-group">
                  <button class="view-button active">
                    <img src="@/assets/image/db_1.jpg" alt="Grid view" />
                  </button>
                  <button class="view-button">
                    <img src="@/assets/image/db_2.jpg" alt="List view" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="survey-grid">
        <div v-for="survey in surveys" :key="survey.id" class="survey-card">
          <div class="image-br">
            <img :src="survey.image" :alt="survey.title" />
          </div>
          <div class="survey-info">
            <h5 class="category">{{ survey.category }}</h5>
            <p class="title">{{ survey.title }}</p>
            <div class="survey-dates">
              <p>
                {{ formatDate(survey.startDate) }}<br />{{
                  formatDate(survey.endDate)
                }}
              </p>
            </div>
            <button class="survey-button">Vào khóa học</button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="pagination-button prev">← Trước</button>
        <div class="page-numbers">
          <span class="page-number active">1</span>
          <span class="page-number">2</span>
          <span class="page-number">3</span>
          <span class="ellipsis">...</span>
          <span class="page-number">8</span>
          <span class="page-number">9</span>
          <span class="page-number">10</span>
        </div>
        <button class="pagination-button next">Sau →</button>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js" integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
import axios from "axios";

export default {
  data() {
    return {
      surveys: [],
      activeTab: "ongoing",
      name: "PaginationUI",
      fromDate: "",
      showFromDatePicker: false,
      selectedTopic: "",
      topics: [],
      searchQuery: '',
    };
  },
  created() {
    this.fetchTopics();
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
      try {
        const response = await axios.get("https://localhost:44347/Surveys");
        this.surveys = response.data;
      } catch (error) {
        console.error(
          "Có lỗi xảy ra khi lấy dữ liệu từ API:",
          error.response ? error.response.data : error.message
        );
      }
    },
    async fetchTopics() {
      try {
        const response = await axios.get('https://localhost:44347/Surveys');
        this.topics = response.data; 
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      this.currentPage = 1;
      this.fetchSurveys();
    },

    formatDate(date) {
      const d = new Date(date);
      const datePart = d.toLocaleDateString("vi-VN");
      const timePart = d.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${timePart} ${datePart}`;
    },
  },

  mounted() {
    this.fetchSurveys();
  },
};
</script>

<style scoped>
.survey-container {
  font-family: Arial, sans-serif;
}
.head-user-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.icon {
  margin-right: 15px;
  cursor: pointer;
}
.flag-icon img {
  width: 30px;
  height: 20px;
}
.profile {
  position: relative;
  display: flex;
  align-items: center;
}
.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: green;
  border: 2px solid white;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabs {
  display: flex;
}
.tab {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
}
.tab.active {
  border-bottom: 2px solid blue;
  color: blue;
}
.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.survey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.survey-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
.survey-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.survey-info {
  padding: 15px;
}
.survey-dates {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
p {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #3d4a5d;
}
.survey-button {
  width: 100%;
  padding: 10px;
  background-color: #1470ef;
  color: white;
  border: none;
  border-radius: 9px;
  cursor: pointer;
}

.category {
  color: #175cd3;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.filter button {
  border: 1px solid #d1d5db;
}
.search-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.survey-container {
  padding: 20px;
  flex: 0 0 80%;
  margin-left: 20%;
}

.tabs-container {
  border-bottom: 1px solid #e2e8f0;
}
.survey-filter {
  background: #fff;
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-label {
  font-size: 14px;
  color: #333;
}

.select-wrapper {
  position: relative;
}

.filter-select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  appearance: none;
  background: #fff;
}

.select-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: #666;
  pointer-events: none;
}

.date-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
}

.date-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.date-input {
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
}

.date-input::placeholder {
  color: #94a3b8;
}

.search-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
}

.search-input {
  width: 100%;
  padding: 8px 8px 8px 36px; /* Increased left padding to accommodate the image */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.search-image {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  object-fit: contain;
}
.view-options {
  display: flex;
  gap: 20px;
}

.view-button {
  padding: 2px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  background: #fff;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.view-button.active {
  background: #f1f5f9;
  color: #2563eb;
}

.view-button:hover {
  background: #f8fafc;
}

.view-button-group {
  display: flex;
  overflow: hidden;
  border-radius: 6px;
}

.view-button-group .view-button {
  border-radius: 0;
  border-right: none;
}

.view-button-group .view-button:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.view-button-group .view-button:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-right: 1px solid #e2e8f0;
}
.view-button img {
  width: 36px;
  height: 26px;
  object-fit: contain;
  margin-right: 1px;
}

.wapperSearch {
  display: flex;
  justify-content: end;
}

.left {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20%;
  background-image: url("../../assets/left.svg");
  z-index: 999;
}

.container2 {
  display: flex;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.pagination-button {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #333;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 9px;
  font-size: 14px;
}

.pagination-button:hover {
  background-color: #f5f5f5;
}

.page-numbers {
  display: flex;
  align-items: center;
}

.page-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 14px;
}

.page-number:hover {
  background-color: #f5f5f5;
}

.page-number.active {
  background-color: #eff8ff;
  color: #1470ef;
}

.ellipsis {
  margin: 0 4px;
}
</style>