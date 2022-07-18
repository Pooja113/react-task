import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FETCH_POST } from "../../actionTypes";
import { useStateValue } from '../../StateProvider';
import * as api from '../../api'
import CommentSection from './CommentSection';


const PostDetails = () => {
  const { id } = useParams();
  const [{post},dispatch] = useStateValue();


  // useEffect(() => {
  //   dispatch(fetchPost(id));
  // }, [id]);

  useEffect( ()=>{
    api.getPost(id).then((res)=>{
      dispatch({
      type:FETCH_POST,
      payload: res
    });
    })
    .catch((err)=>console.log(err))
  },[id])
  return (
    <div className="job-box">
        <h2 className="head-secondary">{post?.data?.user}</h2>
        <p> {post?.data?.desc}</p>
        <CommentSection post={post?.data}/>
    </div>
  )
}

export default PostDetails
