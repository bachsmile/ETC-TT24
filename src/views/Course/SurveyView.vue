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
        <img src="@/assets/image/acc.jpg" alt="Profile picture" class="profile-pic" />
        <span class="status-indicator"></span>
      </div>
    </div>
    <div class="header">
      <div class="tabs">
        <button class="tab" :class="{ active: activeTab === 'ongoing' }" @click="setActiveTab('ongoing')">Khóa học đang diễn ra</button>
        <button class="tab" :class="{ active: activeTab === 'upcoming' }" @click="setActiveTab('upcoming')">Khóa học sắp diễn ra</button>
        <button class="tab" :class="{ active: activeTab === 'completed' }" @click="setActiveTab('completed')">Khóa học đã kết thúc</button>
      </div>
    </div>
    
    <h4>{{ tabTitle }}</h4>

    <div class="survey-filter">
    <!-- Filter section -->
    <div class="filter-container">
      <div class="filter-row">
        <!-- Topic select -->
        <div class="filter-item">
          <label class="filter-label">Chủ đề</label>
          <div class="select-wrapper">
            <select 
              v-model="selectedTopic" 
              class="filter-select"
            >
              <option value="">Chọn chủ đề</option>
              <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                {{ topic.name }}
              </option>
            </select>
            <span class="select-arrow">▼</span>
          </div>
        </div>

        <!-- From date -->
        <div class="filter-item">
          <label class="filter-label">Từ ngày</label>
          <div class="date-wrapper">
            <input 
              type="text"
              v-model="fromDate"
              placeholder="hh:mm DD/MM/YYYY"
              class="date-input"
              @focus="showFromDatePicker = true"
              readonly
            >
            <span class="date-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <!-- Date picker component would go here -->
          </div>
        </div>

        <!-- To date -->
        <div class="filter-item">
          <label class="filter-label">Đến ngày</label>
          <div class="date-wrapper">
            <input 
              type="text"
              v-model="toDate"
              placeholder="hh:mm DD/MM/YYYY"
              class="date-input"
              @focus="showToDatePicker = true"
              readonly
            >
            <span class="date-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <!-- Date picker component would go here -->
          </div>
        </div>
      </div>

    
      <div class="wapperSearch">
        <div style="flex: '0 0 50%'"></div>
        <div class="search-row">
        <div class="search-wrapper">
          <input 
            type="text"
            v-model="searchQuery"
            placeholder="Tìm kiếm"
            class="search-input"
          >
          <span class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>

        <div class="view-options">
          <button class="view-button">
            Ẩn lọc
          </button>
          <button class="view-button" @click="setViewMode('grid')" :class="{ active: viewMode === 'grid' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button class="view-button" @click="setViewMode('list')" :class="{ active: viewMode === 'list' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>

    <div class="survey-grid">
      <div v-for="survey in surveys" :key="survey.id" class="survey-card">
        <div class="image-br">
        <img :src="survey.image" :alt="survey.title">
      </div>
        <div class="survey-info">
          <h5 class="category">{{ survey.category }}</h5>
          <p class="title">{{ survey.title }}</p>
          <div class="survey-dates">
            <p>
              {{ formatDate(survey.startDate) }}<br>{{ formatDate(survey.endDate) }}
            </p>
          </div>
          <button class="survey-button">Vào khóa học</button>
        </div>
      </div>
    </div>

    <!-- <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">&lt; Trước</button>
      <button v-for="page in totalPages" 
              :key="page" 
              :class="{ active: currentPage === page }" 
              @click="changePage(page)">
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Sau &gt;</button>
    </div> -->
  </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js" integrity="sha512-DdX/YwF5e41Ok+AI81HI8f5/5UsoxCVT9GKYZRIzpLxb8Twz4ZwPPX+jQMwMhNQ9b5+zDEefc+dcvQoPWGNZ3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      surveys: [], 
      activeTab: 'ongoing', 
      // currentPage: 1, 
      // pageSize: 9, 
    };
  },
  computed: {
    tabTitle() {
      switch (this.activeTab) {
        case 'upcoming':
          return 'Kỳ khảo sát sắp diễn ra';
        case 'completed':
          return 'Kỳ khảo sát đã kết thúc';
        default:
          return 'Kỳ khảo sát đang diễn ra';
      }
    },
    totalPages() {
      return Math.ceil(this.surveys.length / this.pageSize); // Assuming 'pageSize' is 9
    },
    paginatedSurveys() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.surveys.slice(start, start + this.pageSize);
    },
  },
  methods: {
    async fetchSurveys() {
      try {
        const response = await axios.get('https://localhost:44347/Surveys');
        this.surveys = response.data;
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy dữ liệu từ API:", error.response ? error.response.data : error.message);
      }
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      this.currentPage = 1;
      this.fetchSurveys(); // Fetch surveys when the tab is changed
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    formatDate(date) {
      const d = new Date(date);
      const datePart = d.toLocaleDateString('vi-VN'); 
      const timePart = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); 
      return `${timePart} ${datePart}`;
    }
  },

  mounted() {
    this.fetchSurveys(); 
  }
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
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.pagination button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: none;
  cursor: pointer;
}
.pagination button.active {
  background-color: blue;
  color: white;
}
.category {
  color: #175cd3;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.filter button {
  border: 1px solid #d1d5db
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
  padding: 20px;
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
  border-radius: 6px;
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
}

.date-input {
  width: 100%;
  padding: 8px 12px;
  padding-right: 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.date-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.search-wrapper {
  position: relative;
  flex-grow: 1;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  padding-right: 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.view-options {
  display: flex;
  gap: 8px;
}

.view-button {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #fff;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-button.active {
  background: #f1f5f9;
  color: #2563eb;
}

.view-button:hover {
  background: #f8fafc;
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
  background-image: url('../../assets/left.svg');
  z-index: 999;
}

.container2 {
  display: flex;
}

</style>