import { model, Schema } from "mongoose";

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    index: true,
  },
  highScore: {
    type: Number,
    default: 0,
  },
  currentScore: {
    type: Number,
    default: 0,
  },

  profileImage: {
    type: String,
    default: "https://i.ibb.co/0jhT2pzb/default-icon.webp",
  },
});

const UserModel = model("User", userSchema);

export { UserModel };
