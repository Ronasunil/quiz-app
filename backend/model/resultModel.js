import { model, Schema } from "mongoose";

const resultSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  score: {
    type: Number,
    required: true,
  },

  isHighScore: {
    type: Boolean,
    required: true,
  },

  totalQUestion: {
    type: Number,
    required: true,
    default: 20,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const ResultModel = model("Result", resultSchema);

export { ResultModel };
