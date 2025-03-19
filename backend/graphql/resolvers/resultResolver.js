import { ResultModel } from "../../model/resultModel.js";

export const resultResolver = {
  getScoreByUserId: async ({ userId }) => {
    try {
      const result = await ResultModel.find({ userId });
      if (!result) throw new Error("Result not found");
      return result;
    } catch (err) {
      throw new Error("Error retrieving result");
    }
  },

  addResult: async ({ userId, score, isHighScore, totalQuestion }) => {
    try {
      console.log(userId);
      const result = await ResultModel.create({
        userId,
        score,
        isHighScore,
        totalQuestion,
      });
      console.log(result);
      return result;
    } catch (err) {
      throw new Error("Error adding result");
    }
  },
};
