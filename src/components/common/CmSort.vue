<template>
  <!-- container -->
  <div class="filter">
    <div class="filter-container">
      <!-- Chỉ ẩn thẻ div.on khi nhấn "Ẩn lọc" -->
      <div v-if="isFilterVisible" class="on">
        <!-- Các thành phần như combobox và calendar -->
        <CmCombobox label="Khóa học" />
        <CmCelendar propName="Từ Ngày" />
        <CmCelendar propName="Đến Ngày" />
      </div>

      <!-- search and hide-button  -->
      <div class="filter-search">
        <div class="search-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.16675 3.33329C5.94509 3.33329 3.33341 5.94496 3.33341 9.16663C3.33341 12.3883 5.94509 15 9.16675 15C10.7384 15 12.1648 14.3784 13.2137 13.3678C13.2357 13.3393 13.2597 13.3118 13.2858 13.2857C13.312 13.2596 13.3394 13.2355 13.3679 13.2136C14.3786 12.1647 15.0001 10.7382 15.0001 9.16663C15.0001 5.94496 12.3884 3.33329 9.16675 3.33329ZM15.0267 13.848C16.053 12.565 16.6667 10.9375 16.6667 9.16663C16.6667 5.02449 13.3089 1.66663 9.16675 1.66663C5.02461 1.66663 1.66675 5.02449 1.66675 9.16663C1.66675 13.3088 5.02461 16.6666 9.16675 16.6666C10.9376 16.6666 12.5651 16.0529 13.8482 15.0265L16.9108 18.0892C17.2363 18.4147 17.7639 18.4147 18.0893 18.0892C18.4148 17.7638 18.4148 17.2361 18.0893 16.9107L15.0267 13.848Z"
              fill="#344054"
            />
          </svg>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div class="btn-hide">
          <CmButton
            :label="isFilterVisible ? 'Ẩn lọc' : 'Hiện lọc'"
            class="btnHide"
            @click="toggleFilter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmCelendar from "./CmCelendar.vue";
import CmButton from "./CmButton.vue";
import CmCombobox from "./CmCombobox.vue";

export default {
  name: "CmContainer",
  components: {
    CmCelendar,
    CmButton,
    CmCombobox,
  },
  data() {
    return {
      isFilterVisible: true, // Hiện filter mặc định
    };
  },

  methods: {
    toggleFilter() {
      this.isFilterVisible = !this.isFilterVisible; // Thay đổi trạng thái ẩn/hiện
    },
  },
};
</script>
<style>
.filter-container {
  border: 1px solid #d3d3d3;
  /* Light grey solid border */
  padding: 20px;
  border-radius: 8px;
  /* Rounded corners */
  background-color: #f9f9f9;
  /* Light background */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  /* Soft shadow */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter {
  border: 1px solid #d3d3d3;
  /* Light grey solid border */
  border-radius: 8px;
  /* Rounded corners */
  background-color: #f9f9f9;
  /* Light background */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  /* Soft shadow */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.on {
  display: flex;
  justify-content: space-between;
  /* Space between elements */
  gap: 20px;
  flex-wrap: wrap;
  /* Allows wrapping on smaller screens */
}

#datepicker-dateformat1__outer_,
#datepicker-dateformat1__dialog_ {
  width: 300px;
}
#datepicker-dateformat1__dialog_ .date-picker-container {
  position: relative;
}
/* icon of calendar */
.btn .bi-calendar {
  position: absolute;
  font-size: 18px;
  transform: translateY(-50%);
  color: #888;
  left: 5px;
}

.date-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-65%);
  font-size: 18px;
  color: #888;
}

.search-box > input[type="text"] {
  padding-left: 40px;
  /* Spacing for the icon */
}

.date-icon:hover {
  color: #555;
}

.btnHide:hover {
  background-color: rgb(147, 206, 255);
}
.btn-on {
  float: right;
  margin: 20px;
}
.btnOn:hover {
  background-color: rgb(147, 206, 255);
}
.filter-search {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  /* Align to right */
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-box input {
  padding: 10px 40px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

.search-box svg {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #888;
}

.search-box input:focus {
  border-color: #71b0f3;
  outline: none;
}
.btn-hide {
  --bs-btn-padding-x: 0;
  --bs-btn-padding-y: 0;
  position: relative;
}

.button-hide {
  padding: 0px 60px;
  width: 60px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #000000;
}
/* .custom-button[data-v-d3ae83c0] {
  padding: 10px 25px;
  background-color: #3091ed;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  cursor: pointer;
} */

.btn-hide svg {
  position: absolute;
  font-size: 18px;
  transform: translateY(50%);
  color: #888;
  left: 5px;
}

input[type="date"] {
  display: none;
  /* Keep hidden */
}

@media (max-width: 768px) {
  .on {
    flex-direction: column;
    gap: 10px;
  }

  .filter-group,
  .filter-search {
    margin: 0;
    width: 100%;
  }

  .search-box input {
    width: 100%;
    /* Full width on smaller screens */
  }
}
</style>
