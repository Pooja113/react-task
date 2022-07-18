import { SET_USER, FETCH_ALL_JOBS,  CREATE_JOBS ,COMMENT ,FETCH_POST } from "./actionTypes";

export const initialState = {
  user: null,
  posts: []
}

const reducer = (state,action) =>{
  switch(action.type){
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case FETCH_ALL_JOBS:
      return {
        ...state,
       posts: action.payload
      }
      case FETCH_POST:
        return { ...state, post: action.payload };
      case COMMENT:
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post._id === +action.payload._id) {
              return action.payload;
            }
            return post;
          }),
        };   
    case CREATE_JOBS:
      return {
        ...state,
       posts: action.payload
      }  
      default:
        return state; 
  }
}

export default reducer;