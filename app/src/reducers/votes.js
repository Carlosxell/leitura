import { VOTE } from '../actions/types';

const initialState = {
  votes: 0
};

export const votes = (state = initialState, action) => {
  switch(action.type) {
    case VOTE:
      return {
        ...state,
        votes: action.votes
      };

    default:
      return state;
  }
};
