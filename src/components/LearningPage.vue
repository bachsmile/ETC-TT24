<template>
  <div class="learning-content">
    <CmLeftContent />
    <CmRightContent />
  </div>
</template>
<script>
import CmLeftContent from "./common/CmLeftContent.vue";
import CmRightContent from "./common/CmRightContent.vue";

export default {
  name: "CmContainer",
  components: {
    CmRightContent,
    CmLeftContent,
  },
};
</script>
<style>
.learning-content {
  display: flex;
}

/* Right div */
.right {
  flex-grow: 1;
  /* Let the right div take up the remaining space */
  background-color: #ffffff;
  padding: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Add some shadow */
}

/* left */
.left {
  width: 278px;
  background-color: #fff;
  padding: 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 800px;
  /* Adds shadow for a slight 3D effect */
}
</style>
