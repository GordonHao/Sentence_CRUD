import { DELETE, INIT, ADD } from '../Actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, sentence: [ action.payload, ...state.sentence ] };
    case DELETE:
      return { ...state, sentence: [...action.payload] };
    case INIT:
      return { sentence: [...action.payload] };
    default:
      return { ...state };
  }
};
