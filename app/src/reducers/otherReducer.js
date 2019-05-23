const initialState = {
  newValue: ''
};

export const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OTHER_REDUCER':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
