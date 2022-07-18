import axios from 'axios'

const url = 'https://mern-task-test.herokuapp.com/joblist'
//const url = 'http://localhost:5000/joblist'



export const fetchPosts = () =>  axios.get(url)
export const getPost = (id) => axios.get(`${url}/post/${id}`);
export const createPosts =  (newPost) =>  axios.post(url , newPost)
export const commentPost = (value, id) => axios.post(`${url}/post/${id}/commentPost`, {value});
