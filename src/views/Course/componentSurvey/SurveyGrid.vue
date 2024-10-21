<template>
  <div :class="['survey-grid', viewMode]">
    <SurveyCard
      v-for="survey in displayedSurveys"
      :key="survey.id"
      :survey="survey"
      :tab="tab"
      :page="page"
      @go-to-survey="goToSurvey"
    />
  </div>
</template>

<script>
import SurveyCard from './SurveyCard.vue';

export default {
  name: 'SurveyGrid',
  components: {
    SurveyCard,
  },
  props: {
    surveys: {
      type: Array,
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
    viewMode: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'grid', 'list'].indexOf(value) !== -1
      }
    },
  },
  computed: {
    displayedSurveys() {
      let limit;
      switch (this.viewMode) {
        case 'default':
          limit = 9;
          break;
        case 'grid':
          limit = 12;
          break;
        case 'list':
          limit = 6;
          break;
        default:
          limit = this.surveys.length;
      }
      return this.surveys.slice(0, limit);
    }
  },
  methods: {
    goToSurvey(id) {
      this.$router.push({ path: '/survey', query: { tab: this.tab, surveyId: id, page: this.page } });
    },
  },
};
</script>

<style scoped>
.survey-grid {
  display: grid;
  gap: 20px;
  width: 100%;
}

.survey-grid.default {
  grid-template-columns: repeat(3, 1fr);
}

.survey-grid.grid {
  grid-template-columns: repeat(4, 1fr);
}

.survey-grid.list {
  grid-template-columns: repeat(2, 1fr);
}
</style>