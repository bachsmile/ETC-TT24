<template>
    <p class="date-line">
      <img :src="iconSrc" :alt="altText" class="date-icon" />
      {{ formattedDate }}
    </p>
  </template>
  
  <script>
  export default {
    name: 'DateDisplay',
    props: {
      date: {
        type: String,
        required: true,
      },
      iconSrc: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
    },
    computed: {
      formattedDate() {
        if (!this.date) return 'N/A';
        const d = new Date(this.date);
        if (isNaN(d.getTime())) return 'Invalid Date';
        const hours = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        const day = d.getDate().toString().padStart(2, "0");
        const month = (d.getMonth() + 1).toString().padStart(2, "0");
        const year = d.getFullYear();
        
        return `${hours}:${minutes} ${day}/${month}/${year}`;
      },
    },
  };
  </script>
  
  <style scoped>
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
  </style>