<template>
  <div class="survey-view">
    <div class="main-content">
      <div class="create-survey-section">
        <img src="@/assets/image/logo_1.jpg" alt="CLS Icon" class="cls-icon" />
        <h2>Tạo bài khảo sát</h2>
        <form @submit.prevent="createSurvey">
          <div class="form-group">
            <label for="image">Image</label>
            <div class="image-input">
              <input type="file" id="imageFile" @change="handleImageUpload" />
              <span>or</span>
              <input
                type="text"
                v-model="newSurvey.imageName"
                placeholder="Enter image name"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="category">Chủ đề</label>
            <input
              type="text"
              id="category"
              v-model="newSurvey.category"
              required
            />
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="newSurvey.title" required />
          </div>
          <DatePicker
            label="Start Date"
            v-model="newSurvey.startDate"
            :value="currentDateTime"
            inputRef="startDateInput"
            :readonly="true"
          />
          <DatePicker
            label="End Date"
            v-model="newSurvey.endDate"
            inputRef="endDateInput"
            :minDate="newSurvey.startDate"
          />
          <button type="submit" :disabled="isCreatingSurvey">
            {{ isCreatingSurvey ? "Creating Survey..." : "Create Survey" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "./componentSurvey/DatePicker.vue";
import axios from "axios";

export default {
  name: "SurveyView",
  components: {
    DatePicker,
  },
  data() {
    return {
      newSurvey: {
        imageFile: null,
        imageName: "",
        category: "",
        title: "",
        startDate: this.getCurrentDateTime(),
        endDate: "",
      },
      isCreatingSurvey: false,
    };
  },
  computed: {
    currentDateTime() {
      return this.getCurrentDateTime();
    },
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date();
      return now
        .toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour12: false,
        })
        .replace(/,/g, "");
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.newSurvey.imageFile = file;
        this.newSurvey.imageName = ""; // Clear the image name when a file is selected
      } else {
        alert("Vui lòng chọn một tệp hình ảnh hợp lệ.");
        event.target.value = ""; // Reset input file
      }
    },
    async createSurvey() {
      if (this.isCreatingSurvey) return;

      this.isCreatingSurvey = true;

      try {
        if (!this.newSurvey.imageFile && !this.newSurvey.imageName) {
          throw new Error("Vui lòng chọn một hình ảnh hoặc nhập tên hình ảnh.");
        }
        if (
          !this.newSurvey.category ||
          !this.newSurvey.title ||
          !this.newSurvey.startDate ||
          !this.newSurvey.endDate
        ) {
          throw new Error("Vui lòng điền đầy đủ thông tin.");
        }

        const formData = new FormData();
        if (this.newSurvey.imageFile) {
          formData.append("imageFile", this.newSurvey.imageFile);
        } else {
          formData.append("Image", this.newSurvey.imageName);
        }
        formData.append("Category", this.newSurvey.category);
        formData.append("Title", this.newSurvey.title);

        // Format dates to match API requirements
        const formatDate = (dateString) => {
          const [time, date] = dateString.split(" ");
          const [day, month, year] = date.split("/");
          return `${year}-${month}-${day}T${time}:00`;
        };

        formData.append("StartDate", formatDate(this.newSurvey.startDate));
        formData.append("EndDate", formatDate(this.newSurvey.endDate));

        
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/Surveys`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Khảo sát đã được tạo:", response.data);
        alert("Khảo sát đã được tạo thành công!");

        // Reset form after successful creation
        this.newSurvey = {
          imageFile: null,
          imageName: "",
          category: "",
          title: "",
          startDate: this.getCurrentDateTime(),
          endDate: "",
        };

        // Reset file input
        const fileInput = document.getElementById("imageFile");
        if (fileInput) fileInput.value = "";
      } catch (error) {
        console.error("Lỗi khi tạo khảo sát:", error);
        alert(error.message || "Không thể tạo khảo sát. Vui lòng thử lại.");
      } finally {
        this.isCreatingSurvey = false;
      }
    },
  },
};
</script>

<style scoped>
.survey-view {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.main-content {
  width: 100%;
  max-width: 600px;
}
.create-survey-section {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.cls-icon {
  width: 80px;
  margin-bottom: 1rem;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
button[type="submit"] {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  width: 100%;
  margin-top: 1rem;
}
button[type="submit"]:hover {
  background-color: #2563eb;
}
button[type="submit"]:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
.image-input {
  display: flex;
  align-items: center;
  gap: 10px;
}
.image-input input[type="text"] {
  flex: 1;
}
</style>