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


export const LOADING_TOGGLE_ACTION = '  TOGGLE_LOADING';
export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  }
}