import PostJob from "../models/jobPost.js"

export const createPost = async (req,res) => {
  const body = req.body;
  const newPost = new PostJob(body)
  try {
    await newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({error: error})
  }
}

export const getPosts = async (req,res) => {
  try {
    const postMessages = await PostJob.find();
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({error: error})
  }
}

export const getPost = async (req,res) => {
  const { id } = req.params;
  try {
    const postMessages = await PostJob.findById(id);
    
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({error: error})
  }
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  
  const post = await PostJob.findById(id);
  
  post.comments.push(value);

  const updatedPost = await PostJob.findByIdAndUpdate(id, post, { new: true });
  console.log(updatedPost)
  res.json(updatedPost);
};

