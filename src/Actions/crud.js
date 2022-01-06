import { callFetch } from '../Container';

export const DELETE = 'DELETE';
export const INIT = 'INIT';
export const ADD = 'ADD';

export const deleteItem = (item) => {
  return (dispatch, getStore) => {
    const { sentence } = getStore();
    const index = sentence.indexOf(item);
    const newSentence = [ ...sentence ];
    newSentence.splice(index, 1);
    dispatch({
      type: DELETE,
      payload: newSentence,
    });
  }
};

export const initial = (allItem) => {
  return dispatch => callFetch(dispatch, 'INIT');
};

export const addItem = () => {
  return (dispatch, getStore) => callFetch(dispatch, 'ADD');
};