import React from 'react'
import './JobItem.css'
//import { useStateValue } from '../../StateProvider';



const JobItem = ({job}) => {
  //const [{user},] = useStateValue();

  return (
    <React.Fragment>
      <div className="job-box">
        <h2 className="head-secondary">{job.user}</h2>
        <p>{job.desc}</p>
      </div>

    </React.Fragment>
  )
}

export default JobItem
