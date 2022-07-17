import axios from 'axios'

const url = 'https://mern-task-test.herokuapp.com/joblist'

export const fetchPosts = () =>  axios.get(url)
export const createPosts =  (newPost) =>  axios.post(url , newPost)