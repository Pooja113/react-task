import React, { useState } from 'react'
import './JobForm.css'
import {  useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import * as api from '../../api'
import { CREATE_JOBS } from "../../actionTypes";


const JobForm = () => {
  const [, dispatch] = useStateValue();
  const [{user},] = useStateValue();

  const [jobPost , setJobPost] = useState({
    desc: ''
    })
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    api.createPosts({...jobPost,user:user?.displayName}).then((res)=>{
      dispatch({
      type:CREATE_JOBS,
      payload: {posts : res}
    });
    navigate('/')
    })
    .catch((err)=>console.log(err))
   
  }
  return (
    <section id='jobpost'> 
    {user ? 
      (<div id='jobpost__form'>
      <React.Fragment><h1 className="head-primary">Add your post</h1>
        <div className='jobpost__form__info'>
          <form  onSubmit={submitHandler} >
              <div className="form-group">
                <label htmlFor='jobdesc'>Post</label>
                <textarea id='jobdesc' rows='4' name='desc' value={jobPost.desc} onChange={(e) => setJobPost({...jobPost, desc: e.target.value}) } />
              </div>
              <div>
                </div>
              <button className="btn">Submit</button>
            </form>
        </div>
        </React.Fragment>
    </div>)
      : (<div className='postsignIn'>Please Sign In to Enter a post </div>)
    }     
      
    </section>
  )
}

export default JobForm;
