export const modalToggle = () => {
  return {
    type: 'MODAL_TOGGLE'
  };
};

export const modalUpdateContent = (payload) => {
  return {
    type: 'MODAL_CHANGE_CONTENT',
    payload
  };
};

export const modalChangeDimensions = (height, width) => { // !todo not used
  return {
    type: 'MODAL_CHANGE_DIMENSIONS',
    height,
    width
  };
};