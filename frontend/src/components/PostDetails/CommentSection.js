import React, { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import { Typography, TextField, Button } from '@mui/material';
import * as api from '../../api'
import { COMMENT } from "../../actionTypes";



const CommentSection = ({post}) => {
  const [{user},dispatch] = useStateValue();
  const [comment, setComment] = useState('');


  const [comments, setComments] = useState(post?.comments);
  
  const handleComment = () => {
    const newComments = api.commentPost(`${user?.displayName}: ${comment}`, post._id).then((res)=>{
      dispatch({
      type:COMMENT,
      payload: res
    });
    })
    .catch((err)=>console.log(err))
    
    setComment('');
    setComments(newComments);

  };

  return (
    <div className='jobpost__form__info'>
        <div>
          <Typography gutterBottom variant="h6">Comments</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
        </div>
        <div>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField fullWidth rows={4} label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
    </div>
  )
}

export default CommentSection
