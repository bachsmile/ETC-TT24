<template>
  <div class="pagination">
    <button class="pagination-button prev" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      ← Trước
    </button>
    <div class="page-numbers">
      <span v-for="(page, index) in visiblePages" :key="`${page}-${index}`"> 
        <span v-if="page === '...'" class="ellipsis">...</span>
        <span
          v-else
          class="page-number"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </span>
      </span>
    </div>
    <button class="pagination-button next" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
      Sau →
    </button>
  </div>
</template>

<script>
export default {
name: 'PaginationComponent',
props: {
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  tab: {
    type: String,
    required: true,
  },
},
computed: {
  visiblePages() {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);

    for (let i = this.currentPage - delta; i <= this.currentPage + delta; i++) {
      if (i < this.totalPages && i > 1) {
        range.push(i);
      }
    }

    range.push(this.totalPages);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  },
},
methods: {
  async changePage(page) {
    if (page === this.currentPage) {
      return; // Prevent navigation if it's the same page
    }

    this.$emit('page-change', page);
    
    try {
      await this.$router.push({
        query: { ...this.$route.query, tab: this.tab, page }
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }
}
};
</script>

<style scoped>
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
.pagination-button:disabled {
opacity: 0.5;
cursor: not-allowed;
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