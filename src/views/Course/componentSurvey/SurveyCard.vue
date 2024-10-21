<!-- SurveyCard.vue -->
<template>
    <div class="survey-card">
      <div class="image-wrapper">
        <img :src="survey.image || '/placeholder-image.jpg'" :alt="survey.title" class="survey-image" />
      </div>
      <div class="survey-info">
        <h5 class="category">{{ survey.category }}</h5>
        <p class="title">{{ survey.title }}</p>
        <div class="survey-dates">
          <p class="date-line">
            <img src="@/assets/image/start_date.jpg" alt="Start Date" class="date-icon" />
            {{ formatDate(survey.startDate) }}
          </p>
          <p class="date-line">
            <img src="@/assets/image/end_date.jpg" alt="End Date" class="date-icon" />
            {{ formatDate(survey.endDate) }}
          </p>
        </div>
        <button class="survey-button" @click="goToSurvey">Vào khảo sát</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SurveyCard',
    props: {
      survey: {
        type: Object,
        required: true,
      },
      tab: {
        type: String,
        required: true,
      },
      page: {
        type: Number,
        required: true,
      },
    },
    methods: {
      formatDate(date) {
        if (!date) return 'N/A';
        const d = new Date(date);
        if (isNaN(d.getTime())) return 'Invalid Date';
        const hours = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        const day = d.getDate().toString().padStart(2, "0");
        const month = (d.getMonth() + 1).toString().padStart(2, "0");
        const year = d.getFullYear();
        
        return `${hours}:${minutes} ${day}/${month}/${year}`;
      },
      goToSurvey() {
        this.$router.push({ path: '/survey', query: { tab: this.tab, surveyId: this.survey.id, page: this.page } });
      },
    },
  };
  </script>
  
  <style scoped>
  .survey-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 430px; 
    width: 100%;
  }
  
  .image-wrapper {
    width: 100%;
    height: 200px; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fefefe; 
  }
  
  .survey-image {
    width: 95%;
    height: 90%;
    object-fit: cover; 
    object-position: center; 
    border-radius: 8px;
  }
  
  .survey-info {
    flex: 1;
    display: flex;
    flex-direction: column;
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
    margin-top: auto; 
  }
  </style>