const initialState = {
  list: []
};

export const OtherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OTHER_UPDATE':
      return {
        ...state,
        list: action.list
      };

    default:
      return state;
  }
};
