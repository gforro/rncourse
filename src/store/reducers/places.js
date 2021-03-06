import {
  ADD_PLACE,
  DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [
      {key: '111', name: 'Test', image: {uri: 'https://live.staticflickr.com/1929/30795964947_26d6f9cc56_b.jpg'}},
      {key: '112', name: 'Test', image: {uri: 'https://live.staticflickr.com/1929/30795964947_26d6f9cc56_b.jpg'}},
      {key: '113', name: 'Test', image: {uri: 'https://live.staticflickr.com/1929/30795964947_26d6f9cc56_b.jpg'}}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: '' + Math.random(),
          name: action.placeName,
          image: {
            uri:
                'https://live.staticflickr.com/1929/30795964947_26d6f9cc56_b.jpg'
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };

    default:
      return state;
  }
};

export default reducer;
