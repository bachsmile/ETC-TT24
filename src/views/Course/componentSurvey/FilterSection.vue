<template>
  <div class="survey-filter">
    <div class="filter-container">
      <div v-show="!isFilterHidden" class="filter-row">
        <div class="filter-item">
          <label class="filter-label">Chủ đề</label>
          <div class="select-wrapper">
            <select
              v-model="selectedTopic"
              class="filter-select"
              @change="
                $emit('filter-change', { type: 'topic', value: selectedTopic })
              "
            >
              <option value="">Chọn chủ đề</option>
              <option
                v-for="(topic, index) in topics"
                :key="index"
                :value="topic"
              >
                {{ topic }}
              </option>
            </select>
            <img
              src="@/assets/image/select.jpg"
              alt="Select icon"
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
              @click="openFromDatePicker"
            />
            <input
              type="text"
              v-model="fromDate"
              ref="fromDateInput"
              placeholder="hh:mm DD/MM/YYYY"
              class="date-input"
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
              @click="openToDatePicker"
            />
            <input
              type="text"
              v-model="toDate"
              ref="toDateInput"
              placeholder="hh:mm DD/MM/YYYY"
              class="date-input"
              readonly
            />
          </div>
        </div>
      </div>

      <div class="wapperSearch">
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
              @input="emitSearch"
            />
          </div>

          <div class="view-options">
            <button class="view-button" @click="toggleFilter">
              <img src="@/assets/image/loc.jpg" alt="Filter icon" />
              {{ isFilterHidden ? 'Hiện lọc' : 'Ẩn lọc' }}
            </button>
            <div class="view-options">
              <div class="view-button-group">
                <button
                  class="view-button"
                  :class="{ active: viewMode === 'grid' }"
                  @click="changeViewMode('grid')"
                >
                  <img src="@/assets/image/db_1.jpg" alt="Grid view" />
                </button>
                <button
                  class="view-button"
                  :class="{ active: viewMode === 'list' }"
                  @click="changeViewMode('list')"
                >
                  <img src="@/assets/image/db_2.jpg" alt="List view" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "FilterSection",
  props: {
    topics: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTopic: "",
      fromDate: "",
      toDate: "",
      searchQuery: "",
      fromDatePicker: null,
      toDatePicker: null,
      viewMode: "default",
      isFilterHidden: false,
    };
  },
  mounted() {
    this.initializeDatePickers();
  },
  methods: {
    initializeDatePickers() {
      const config = {
        enableTime: true,
        dateFormat: "H:i d/m/Y",
        time_24hr: true,
        allowInput: true,
      };

      this.fromDatePicker = flatpickr(this.$refs.fromDateInput, {
        ...config,
        onChange: (selectedDates, dateStr) => {
          this.fromDate = dateStr;
          this.$emit("filter-change", { type: "fromDate", value: dateStr });
        },
      });

      this.toDatePicker = flatpickr(this.$refs.toDateInput, {
        ...config,
        onChange: (selectedDates, dateStr) => {
          this.toDate = dateStr;
          this.$emit("filter-change", { type: "toDate", value: dateStr });
        },
      });
    },
    openFromDatePicker() {
      this.fromDatePicker.open();
    },
    openToDatePicker() {
      this.toDatePicker.open();
    },
    toggleFilter() {
      this.isFilterHidden = !this.isFilterHidden;
    },
    changeViewMode(mode) {
      this.viewMode = mode;
      this.$emit('view-mode-change', mode);
    },
    emitSearch() {
      this.$emit('search', this.searchQuery);
    },
  },
  beforeUnmount() {
    if (this.fromDatePicker) this.fromDatePicker.destroy();
    if (this.toDatePicker) this.toDatePicker.destroy();
  },
};
</script>


<style scoped>
.survey-filter {
  background: #fff;
  width: 100%;
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
.date-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 5px;
}
.date-input::placeholder {
  color: #94a3b8;
}
input.date-input {
  border: none;
  outline: none;
  width: 100%;
  padding-left: 35px;
}
img.date-icon {
  height: 30px;
  width: 30px;
  position: absolute;
  left: 5px;
  cursor: pointer;
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
  border: 1px solid #e2e8f0;
  border-radius: 8px;
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
  height: 40px;
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
input.search-input {
  height: 40px;
}
</style>