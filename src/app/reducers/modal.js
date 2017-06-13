let emptyModal = {
  content: '',
  visible: false,
  height: 250,
  width: 350
};

export const modalReducer = (state = emptyModal, action) => {
  switch (action.type) {
    case 'MODAL_CHANGE_CONTENT':
      // console.log(action.payload);
      return {
        ...state,
        content: action.payload
      };
    case 'MODAL_TOGGLE':
      if (state.visible) {
        // clear content if closing modal
        state.content = '';
      }
      return {
        ...state,
        visible: !state.visible, // this is not an action, so no payload property
      };
    case 'MODAL_CHANGE_DIMENSIONS': // !todo not used
      return {
        ...state,
        height: action.height,
        width: action.width
      };
    default:
      return state;
  }
};