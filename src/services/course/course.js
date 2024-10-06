import apiClient from '@/plugins/Axios';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getCourseById = async (idCourse = 1) => {
  try {
    const response = await apiClient.get(`Courses/${idCourse}`);

    await delay(2000);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    throw error; // Ném lỗi lên để xử lý ở nơi gọi
  }
};
