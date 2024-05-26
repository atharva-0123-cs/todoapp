import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    text: String,
    description: String,
    status: { type: Boolean, default: false },
    dueDate: Date,
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;