import { GET_DATA_SUCCEED, GET_DATA_FAILED, GET_DATA_REQUESTED, LOADING_TOGGLE_ACTION} from './actions';

export const initialPostsState = {
  data: [],
  error: null,
  loading: false,
};

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case LOADING_TOGGLE_ACTION:
      return {
        ...state,
        data: action.payload,
        loading: true,
      }
    case GET_DATA_SUCCEED:
      return { ...state, data: action.payload, loading: false };
    case GET_DATA_FAILED:
      return { ...state, error: action.error, loading: false };
    default:
      return { ...state };
  }
};
