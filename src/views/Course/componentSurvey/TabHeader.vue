<template>
    <div class="header">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="tab"
          :class="{ active: $route.query.tab === tab.value }"
          @click="changeTab(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TabHeader',
    data() {
      return {
        tabs: [
          { value: 'ongoing', label: 'Kỳ khảo sát đang diễn ra' },
          { value: 'upcoming', label: 'Kỳ khảo sát sắp diễn ra' },
          { value: 'completed', label: 'Kỳ khảo sát đã kết thúc' },
        ],
      };
    },
    methods: {
      changeTab(tabValue) {
        this.$router.push({ query: { ...this.$route.query, tab: tabValue } });
        this.$emit('tab-change', tabValue);
      },
    },
  };
  </script>
  
  
  <style scoped>
 .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  
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
    background: #eff8ff;
  }
  </style>