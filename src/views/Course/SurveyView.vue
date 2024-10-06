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
          <img src="@/assets/image/mess.jpg" alt="message-icon" />
        </div>
        <div class="icon flag-icon">
          <img src="@/assets/image/alert.jpg" alt="alert-icon" />
        </div>
        <div class="profile-dropdown">
    <div class="profile" @click="toggleDropdown">
      <img
        src="@/assets/image/acc.jpg"
        alt="Profile picture"
        class="profile-pic"
      />
      <span class="status-indicator"></span>
    </div>
    <div v-if="isOpen" class="dropdown-content">
      <a href="#" @click.prevent="logout">Đăng xuất</a>
    </div>
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

      <div class="td">
        <h5>{{ tabTitle }}</h5>
      </div>

      <div class="survey-filter">
        <div class="filter-container">
          <div class="filter-row">
            <div class="filter-item">
              <label class="filter-label">Chủ đề</label>
              <div class="select-wrapper">
                <select v-model="selectedTopic" class="filter-select">
                  <option value="">Chọn chủ đề</option>
                  <option
                    v-for="(topic,index) in topics"
                    :key="index"
                    :value="topic"
                  >
                    {{ topic }}
                  </option>
                </select>
                <img
                  src="@/assets/image/select.jpg"
                  alt="Calendar icon"
                  class="select-image"
                />
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
                  v-model="toDate"
                  placeholder="hh:mm DD/MM/YYYY"
                  class="date-input"
                  @focus="showToDatePicker = true"
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
                  <img src="@/assets/image/loc.jpg" alt="Filter icon" />
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
              <p class="date-line">
                <img
                  src="@/assets/image/start_date.jpg"
                  alt="Start Date"
                  class="date-icon"
                />
                {{ formatDate(survey.startDate) }}
              </p>
              <p class="date-line">
                <img
                  src="@/assets/image/end_date.jpg"
                  alt="End Date"
                  class="date-icon"
                />
                {{ formatDate(survey.endDate) }}
              </p>
            </div>
            <button class="survey-button">Vào khảo sát</button>
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


<script>
import axios from "axios";

export default {
  name: "SurveyView",
  data() {
    return {
      surveys: [],
      activeTab: "ongoing",
      name: "PaginationUI",
      fromDate: "",
      toDate: "",
      showFromDatePicker: false,
      showToDatePicker: false,
      selectedTopic: "",
      topics: [],
      searchQuery: "",
      isOpen: false
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
        const token = localStorage.getItem("token");
        const response = await axios.get("https://localhost:44347/Surveys", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.surveys = response.data;
      } catch (error) {
        console.error(
          "Có lỗi xảy ra khi lấy dữ liệu từ API:",
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.status === 401) {
          this.handleAuthError();
        }
      }
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    logout() {
     
      console.log('Logging out...')
      this.handleAuthError();
      
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
    async fetchTopics() {
  try {
    const response = await axios.get("https://localhost:44347/api/Item/categories");
    this.topics = response.data;
    console.log(response.data);
    
  } catch (error) {
    console.error("Error fetching topics:", error);
    
  }
},

    formatDate(date) {
      const d = new Date(date);
      const hours = d.getHours().toString().padStart(2, "0");
      const minutes = d.getMinutes().toString().padStart(2, "0");
      const day = d.getDate().toString().padStart(2, "0");
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const year = d.getFullYear();

      return `${hours}:${minutes} ${day}/${month}/${year}`;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      this.fetchSurveys();
    },
    handleAuthError() {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      this.$router.push("/login");
    },
  },
  watch: {
    activeTab() {
      this.fetchSurveys();
    },
    selectedTopic() {
      this.fetchSurveys();
    },
  },
  mounted() {
    this.fetchSurveys();
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  },
};
</script>



<style scoped>
.survey-container {
  font-family: Arial, sans-serif;
}
.head-user-menu {
  display: flex;
  width: 1098px;

  align-items: center;
  justify-content: flex-end;
  padding: 8px;
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
.profile-dropdown {
  position: relative;
  display: inline-block;
}

.profile {
  position: relative;
  cursor: pointer;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #4CAF50; 
  border: 2px solid white;
}

.dropdown-content {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
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
  height: 85px;
  width: 1098px;
}
.tabs {
  display: flex;
}
.tab {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  gap: 16px;
}
.tab.active {
  border-bottom: 2px solid #175cd3;
  color: #175cd3;
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
  padding: 16px;
  height: 430px;
  width: 350px;
  gap: 16px;
}
.survey-card img {
  object-fit: cover;
  border-radius: 8px;
}
.survey-info {
  padding: 8px;
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
  margin-left: 21%;
}

.tabs-container {
  border-bottom: 1px solid #e2e8f0;
}
.survey-filter {
  background: #fff;
  width: 1098px;
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  display: inline-block;
}

.filter-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 30px;
  background-color: transparent;
  border: 1px solid #ede8e8;
  border-radius: 4px;
  padding: 8px 30px 8px 10px;
  width: 100%;
  color: #9a9a9a;
  ;
}

.select-image {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
  width: 11.67px;
  height: 6.67px;
}

.filter-select::-ms-expand {
  display: none;
}

select::-ms-expand {
  display: none;
}
.select-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: #9a9a9a;
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
.date-line {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #3d4a5d;
  margin-bottom: 4px;
}

.survey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1098px;
}
.survey-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
.image-br img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.survey-info {
  padding: 16px;
}
.category {
  color: #175cd3;
  font-size: 14px;
  margin-bottom: 8px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}
.survey-dates {
  margin-bottom: 16px;
}
.date-line {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #3d4a5d;
  margin-bottom: 4px;
}
.date-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}
.survey-button {
  width: 100%;
  padding: 10px;
  background-color: #1470ef;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
.date-input::placeholder {
  color: #94a3b8;
}
input.date-input {
  border: none;
  outline: none;
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
  padding: 8px 8px 8px 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.select {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  object-fit: contain;
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
  height: 44px;
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
  width: 1098px;
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
.td {
  height: 40px;
  width: 1098px;
}
button.tab.active {
  background: #eff8ff;
}
</style>