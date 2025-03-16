import axios from "axios";

class QuizApi {
  #axiosInstance(url) {
    const instance = axios.create({
      url,
      headers: {
        " Content-Type": "application/json",
        "X-Api-Key": "dsjVCe5c98ngJGEDNIfx0djtv2sJoQP73F1KKzS5",
      },
    });

    return instance;
  }

  instance() {
    const quizApiInstance = this.#axiosInstance("https://quizapi.io");
    return quizApiInstance;
  }
}

export const quizAxios = new QuizApi().instance();
