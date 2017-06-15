let loader = {
  displayRight: 'block',
  displayLeft: 'block'
};

export const loaderReducer = (state = loader, action) => {
  switch (action.type) {
    case ('LOADER_UPDATE_DISPLAY_LEFT'):
      return {
        ...state,
        displayLeft: action.payload
      };
    case ('LOADER_UPDATE_DISPLAY_RIGHT'):
      return {
        ...state,
        displayRight: action.payload
      };
    default:
      return state;
  }
};