<template>
  <div>
    <b-button v-b-modal.modal-1>Thêm Khóa Học</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>CREATE LEARNING COURSE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Course Name</td>
            <td><input type="text" v-model="nameCourse" /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td><input type="text" v-model="description" /></td>
          </tr>
          <tr>
            <td>Date Begin</td>
            <td><input type="text" v-model="dateBegin" /></td>
          </tr>
          <tr>
            <td>Date End</td>
            <td><input type="text" v-model="dateEnd" /></td>
          </tr>
          <tr>
            <td>learningCourseId</td>
            <td><input type="text" v-model="learningCourseId" /></td>
          </tr>
        </tbody>
      </table>
      <template #modal-footer>
        <b-button variant="ok" @click="ok">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";
import CmButton from "./CmButton.vue";
import axios from "axios";

export default {
  name: "CmCreateLearningCourse",
  components: {
    CmButton,
    BModal,
    BButton,
  },
  data() {
    return {
      nameCourse: "",
      description: "",
      dateBegin: "",
      dateEnd: "",
      learningCourseId: "",
    };
  },
  methods: {
    async ok() {
      const courseCreateData = {
        nameCourse: this.nameCourse,
        description: this.description,
        dateBegin: this.dateBegin,
        dateEnd: this.dateEnd,
        learningCourseId: this.learningCourseId,
      };

      try {
        const response = await axios.post(
          `https://localhost:7066/LearningCourse`,
          courseCreateData
        );
        console.log("Update successful:", response.data);
        this.$emit("close"); // Close the form after successful update
        window.location.href = "http://localhost:8080/learning";
      } catch (error) {
        console.error("Error creating course:", error);
      }
    },
    cancelEdit() {
      this.$emit("close"); // Close the form without saving
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f7f6;
  margin: 0;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

thead {
  background-color: #6c7ae0;
  color: #fff;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  font-weight: bold;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input[type="text"]:focus,
input[type="date"]:focus {
  border-color: #6c7ae0;
  outline: none;
  box-shadow: 0 0 8px rgba(108, 122, 224, 0.3);
}

.cm-button {
  background-color: #6c7ae0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.cm-button:hover {
  background-color: #5765d4;
}

.cm-button.cancel {
  background-color: #e74c3c;
}

.cm-button.cancel:hover {
  background-color: #c0392b;
}

.btn-cus {
  display: flex;
  justify-content: space-between; /* This will place the buttons on opposite sides */
  margin-top: 20px;
}

button.close {
  border-radius: 6px;
}

.modal-header {
  justify-content: space-between;
}
</style>
