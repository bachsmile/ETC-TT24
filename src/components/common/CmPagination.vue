<!-- Pagination.vue -->
<template>
  <div class="pagination">
    <div class="button-left">
      <button @click="prevPage" :disabled="pageNumber === 1">
        <div class="previous-button">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.58917 0.577406C7.91461 0.902843 7.91461 1.43048 7.58917 1.75592L3.17843 6.16666H12.8333C13.2935 6.16666 13.6666 6.53976 13.6666 6.99999C13.6666 7.46023 13.2935 7.83333 12.8333 7.83333H3.17843L7.58917 12.2441C7.91461 12.5695 7.91461 13.0971 7.58917 13.4226C7.26374 13.748 6.7361 13.748 6.41066 13.4226L0.57733 7.58925C0.251893 7.26381 0.251893 6.73618 0.57733 6.41074L6.41066 0.577406C6.7361 0.251969 7.26374 0.251969 7.58917 0.577406Z"
              fill="#344054"
            />
          </svg>
        </div>
        <div>Trước</div>
      </button>
    </div>
    <div class="number-page">
      <div class="number-around">
        <div class="number" @click="changePage(1)">1</div>
      </div>
      <div class="number-around">
        <div class="number" @click="changePage(2)">2</div>
      </div>
      <div class="number-around">
        <div class="number" @click="changePage(3)">3</div>
      </div>
    </div>
    <div class="button-right" @click="nextPage">
      <button>
        <div class="behind-button">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.41066 0.577406C6.7361 0.251969 7.26374 0.251969 7.58917 0.577406L13.4225 6.41074C13.7479 6.73618 13.7479 7.26381 13.4225 7.58925L7.58917 13.4226C7.26374 13.748 6.7361 13.748 6.41066 13.4226C6.08523 13.0971 6.08523 12.5695 6.41066 12.2441L10.8214 7.83333H1.16659C0.706348 7.83333 0.333252 7.46023 0.333252 6.99999C0.333252 6.53976 0.706348 6.16666 1.16659 6.16666H10.8214L6.41066 1.75592C6.08523 1.43048 6.08523 0.902843 6.41066 0.577406Z"
              fill="#344054"
            />
          </svg>
        </div>
        <div>Sau</div>
      </button>
    </div>
  </div>
</template>

<script>


export default {
    data(){
        return{    
        pageNumber: 1,
        }
    },
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber -= 1;
        this.cource();
      }
    },
    // Go to the next page
    nextPage() {
      this.pageNumber += 1;
      this.cource();
    },
    // Change to specific page
    changePage(page) {
      this.pageNumber = page;
      this.cource();
    },

};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  /* Center the pagination */
  align-items: center;
  gap: 30px;
  /* Space between left button, numbers, and right button */
  margin-top: 20px;
}

.button-left button,
.button-right button {
  background-color: white;
  border: 1px solid #e5e7eb;
  /* Light border */
  border-radius: 8px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #344054;
  /* Text color */
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.button-left button:hover,
.button-right button:hover {
  background-color: #f1f5f9;
  /* Change background on hover */
}

.number-page {
  display: flex;
  align-items: center;
  gap: 10px;
  /* Space between number items */
}

.number-around {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #344054;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.number-around:hover {
  background-color: #f1f5f9;
  /* Hover effect */
}

.number-around .number {
  color: #344054;
}

.number-around.active {
  background-color: #eff6ff;
  /* Active background color */
}

.number-around.active .number {
  color: #1d4ed8;
  /* Active text color */
}

svg {
  fill: #344054;
  /* Default color for icons */
}

/* Optional: Responsive behavior */
@media (max-width: 768px) {
  .pagination {
    gap: 10px;
  }

  .number-page {
    gap: 5px;
  }

  .button-left button,
  .button-right button {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
