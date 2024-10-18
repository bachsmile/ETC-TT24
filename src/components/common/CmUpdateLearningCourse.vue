<template>
  <div class="form">
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>UPDATE LEARNING COURSE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td><input type="text" v-model="id" /></td>
        </tr>
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
    <div class="btn-cus">
      <CmButton class="SaveChange" label="Save Change" @click="saveChanges" />
      <CmButton class="Cancel" label="Cancel" @click="cancelEdit" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CmButton from "./CmButton.vue";

export default {
  name: "CmUpdateLearningCourse",
  components: {
    CmButton,
  },
  data() {
    return {
      id: "",
      nameCourse: "",
      description: "",
      dateBegin: "",
      dateEnd: "",
    };
  },
  methods: {
    async saveChanges() {
      const courseUpdateData = {
        id: this.id,
        NameCourse: this.nameCourse,
        Description: this.description,
        DateBegin: this.dateBegin,
        DateEnd: this.dateEnd,
        LearningCourseId: this.learningCourseId,
      };
      try {
        const response = await axios.put(
          `https://localhost:7066/LearningCourse/${this.id}`,

          courseUpdateData
        );
        console.log("Update successful:", response.data);
        this.$emit("close"); // Close the form after successful update
        window.location.href = "http://localhost:8080/learning";
      } catch (error) {
        console.error("Error updating course:", error);
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

.form {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

.SaveChange {
  margin-right: 12px;
}

.Cancel {
  margin-right: 12px;
}
</style>
