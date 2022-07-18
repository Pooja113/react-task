import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  user: String,
  desc: String,
  comments: { type: [String], default: [] },
  createdAt: {
    type:Date,
    default: new Date()
  },
})

const PostJob = mongoose.model('PostJob',jobSchema);

export default PostJob