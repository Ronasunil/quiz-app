import axios from "axios";

class QuizApi {
  #axiosInstance(url) {
    const instance = axios.create({
      url,
      headers: {
        " Content-Type": "application/json",
        "X-Api-Key": "3lsgjMYPph1HBauH1DXErdP5POak0dhb2Mp0S060",
      },
    });

    return instance;
  }

  instance() {
    const quizApiInstance = this.#axiosInstance("https://quizapi.io");
    return quizApiInstance;
  }
}

export const quizAxios = new QuizApi().instance;
