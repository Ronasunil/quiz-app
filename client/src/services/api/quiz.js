import { quizAxios } from "../axios";

class QuizService {
  async getQuizCategories() {
    const res = await quizAxios.get("/api/v1/categories");
    return res.data;
  }

  async getQuestionByCategory(category) {
    const res = await quizAxios.get(`api/v1/questions?category=${category}`);
    return res.data;
  }
}
