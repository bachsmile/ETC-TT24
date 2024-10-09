<template>
  <div class="application">
    <div class="head-icon">
      <DynamicIcon :svgMarkup="icon" />
    </div>
    <div class="label-app">{{ title }}</div>

    <!-- Clickable icon to toggle Ctdt visibility -->
    <div class="icon-app" @click="toggleCtdt">
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.910826 0.410765C1.23626 0.0853278 1.7639 0.0853278 2.08934 0.410765L7.08934 5.41076C7.41477 5.7362 7.41477 6.26384 7.08934 6.58928L2.08934 11.5893C1.7639 11.9147 1.23626 11.9147 0.910826 11.5893C0.585389 11.2638 0.585389 10.7362 0.910826 10.4108L5.32157 6.00002L0.910826 1.58928C0.585389 1.26384 0.585389 0.736202 0.910826 0.410765Z"
          fill="#344054"
        />
      </svg>
    </div>

    <!-- Conditionally render the Ctdt component -->
    <Ctdt v-if="isCtdtVisible" :items="listItems" />
  </div>
</template>

<script>
import DynamicIcon from "./DynamicIcon.vue";
import Ctdt from "./Ctdt.vue";

export default {
  name: "Application",
  components: {
    DynamicIcon,
    Ctdt,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
    icon: {
      type: String, // Expecting the SVG markup as a string
      required: true,
    },
  },
  data() {
    return {
      isCtdtVisible: false, // Control the visibility of Ctdt
    };
  },
  methods: {
    toggleCtdt() {
      this.isCtdtVisible = !this.isCtdtVisible; // Toggle visibility
    },
  },
};
</script>

<style scoped>
.application {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-top: 15px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid #eee;
}

.label-app {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-app {
  display: flex;
  font-size: 18px;
  color: #888;
}

.application:hover {
  color: #0056b3;
}

.application:hover .icon-app {
  color: #0056b3;
}
</style>
