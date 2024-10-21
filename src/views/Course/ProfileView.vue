<template>
  <div class="survey-view">
    <div class="main-content">
      <div class="create-survey-section">
        <div class="image-container">
          <img
            src="@/assets/image/logo_1.jpg"
            alt="CLS Icon"
            class="cls-icon"
          />
        </div>
        <h3>Tạo bài khảo sát</h3>
        <form @submit.prevent="createSurvey">
          <div class="form-group">
            <label for="image">Hình ảnh </label>
            <div class="image-input">
              <input type="file" id="imageFile" @change="handleImageUpload" />
            </div>
            <div>
              <span>Hoặc</span>
            </div>
            <div class="image-input">
              <input
                type="text"
                v-model="newSurvey.imageName"
                placeholder="Enter image name"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="category">Danh mục</label>
            <input
              type="text"
              id="category"
              v-model="newSurvey.category"
              required
            />
          </div>
          <div class="form-group">
            <label for="title">Tiêu đề </label>
            <input type="text" id="title" v-model="newSurvey.title" required />
          </div>
          <div class="form-group">
            <label for="startDate">Ngày bắt đầu</label>
            <input
              type="datetime-local"
              id="startDate"
              v-model="newSurvey.startDate"
              required
            />
          </div>
          <div class="form-group">
            <label for="endDate">Ngày kết thúc</label>
            <input
              type="datetime-local"
              id="endDate"
              v-model="newSurvey.endDate"
              required
            />
          </div>
          <button type="submit" :disabled="isCreatingSurvey">
            {{ isCreatingSurvey ? "Creating Survey..." : "Thêm bài khảo sát" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SurveyCreationView",
  data() {
    return {
      newSurvey: {
        imageFile: null,
        imageName: "",
        category: "",
        title: "",
        startDate: "",
        endDate: "",
      },
      isCreatingSurvey: false,
    };
  },
  mounted() {
    // Set default start date to current date and time
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.newSurvey.startDate = now.toISOString().slice(0, 16);
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.newSurvey.imageFile = file;
        this.newSurvey.imageName = "";
      } else {
        alert("Vui lòng chọn một tệp hình ảnh hợp lệ.");
        event.target.value = "";
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
          formData.append("ImageFile", this.newSurvey.imageFile);
        } else {
          formData.append("Image", this.newSurvey.imageName);
        }
        formData.append("Category", this.newSurvey.category);
        formData.append("Title", this.newSurvey.title);
        formData.append("StartDate", new Date(this.newSurvey.startDate).toISOString());
        formData.append("EndDate", new Date(this.newSurvey.endDate).toISOString());

        const response = await axios.post(
          "https://localhost:44347/Surveys",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Khảo sát đã được tạo:", response.data);
        alert("Khảo sát đã được tạo thành công!");

        this.newSurvey = {
          imageFile: null,
          imageName: "",
          category: "",
          title: "",
          startDate: "",
          endDate: "",
        };

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
  align-items: center;
  min-height: 100vh;
  padding: 1rem; 
}
.main-content {
  width: 100%;
  max-width: 500px; 
  padding: 10px; 
}

.create-survey-section {
  margin-top: 1rem; 
  background-color: white;
  padding: 1rem; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px; 
}

.cls-icon {
  width: 90px;
  height: auto;
}

h3 {
  text-align: center;
  margin-bottom: 15px; 
  font-size: 1.1rem; 
}

.form-group {
  margin-bottom: 0.75rem; 
}
label {
  display: block;
  margin-bottom: 0.25rem; 
  font-weight: 500;
  font-size: 0.9rem; 
}
input[type="file"],
input[type="text"],
input[type="datetime-local"] {
  width: 100%;
  padding: 0.4rem; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem; 
}
button[type="submit"] {
  background-color: #3b82f6;
  color: white;
  padding: 0.4rem 0.8rem; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  display: block;
  margin: 0.75rem auto 0;
  width: fit-content;
  font-size: 0.9rem; 
}
button[type="submit"]:hover {
  background-color: #2563eb;
}
.image-input {
  display: flex;
  align-items: center;
  gap: 5px;
}
.image-input input[type="text"] {
  flex: 1;
}

.form-group > div > span {
  display: block;
  
  margin: 0.25rem 0;
  font-size: 0.9rem;
}
</style>