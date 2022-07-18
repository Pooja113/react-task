import React from 'react'
import './JobItem.css'
import {  useNavigate } from 'react-router-dom';


const JobItem = ({job}) => {
  const navigate = useNavigate();


  const openPost = () => navigate(`/post/${job._id}`);

  return (
    <React.Fragment>
      <div className="job-box"  onClick={() => openPost(job._id)} key={job._id}>
        <h2 className="head-secondary">{job.user}</h2>
        <p>{job.desc}</p>
      </div>

    </React.Fragment>
  )
}

export default JobItem
