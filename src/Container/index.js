import { ADD, INIT } from '../Actions';

export const callFetch = (dispatch, type) => {
  fetch(
    'https://v1.hitokoto.cn'
  ) .then((response) => response.json())
    .then((data) => {
      switch (type) {
        case 'INIT':
          dispatch({
            type: INIT,
            payload: [`${data?.hitokoto},${data?.from},${data?.from_who || 'None'}`],
          });
          break;
        case 'ADD':
          dispatch({
            type: ADD,
            payload: `${data?.hitokoto},${data?.from},${data?.from_who || 'None'}`,
          })
          break;
        default:
          break;
      }
      
  })
};