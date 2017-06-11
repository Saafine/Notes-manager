let emptyModal = {
  content: '',
  visible: false
};

export const modalReducer = (state = emptyModal, action) => {
  switch (action.type) {
    case 'MODAL_CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload
      };
    case 'MODAL_TOGGLE':
      return {
        ...state,
        visible: !state.visible // this is not an action, so no payload property
      };
    default:
      return state;
  }
};