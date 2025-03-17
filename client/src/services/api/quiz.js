import { quizAxios } from "../axios";

class QuizService {
  async getQuizCategories() {
    const res = await quizAxios.get("/api/v1/categories");
    return res.data;
  }

  async getQuestionByCategory(category) {
    try {
      const res = await quizAxios.get(`/api/v1/questions?category=${category}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const quizService = new QuizService();
