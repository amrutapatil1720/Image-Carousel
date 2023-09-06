const initialState = {
  images: [],
  currentIndex: 0,
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.payload,
      };
    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: action.payload,
      };
    default:
      return state;
  }
};

export default carouselReducer;
