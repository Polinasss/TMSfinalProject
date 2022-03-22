export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const ACTION_GET_DATA_REQUESTED = () => ({
  type: GET_DATA_REQUESTED,
});

export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const ACTION_GET_DATA_SUCCEED = (payload) => ({
  type: GET_DATA_SUCCEED,
  payload,
});

export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const ACTION_GET_DATA_FAILED = (error) => ({
  type: GET_DATA_FAILED,
  error,
});

export const getPostsAction = (url) => async (dispatch) => {
  try {
    dispatch(ACTION_GET_DATA_REQUESTED());
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'error') {
      throw new Error('Error 404');
    }

    dispatch(ACTION_GET_DATA_SUCCEED(data));
  } catch (e) {
    dispatch(ACTION_GET_DATA_FAILED(e.message));
  }
};