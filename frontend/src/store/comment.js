import { fetch } from "./csrf";

const GET_COMMENTS = "comments/all";

// TODO: add an add comment action to properly update state;

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

export const comments = () => async (dispatch) => {
  const res = await fetch("/api/comments/all");
  dispatch(getComments(res.data));

  return res;
};

const commentsReducer = (state = { comments: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.comments = action.payload;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
