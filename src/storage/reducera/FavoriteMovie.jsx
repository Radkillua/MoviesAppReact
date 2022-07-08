const INITIAL_STATE = [
  
];

export default function favouriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CURRENT_FAVOURITE":
      return [...state, action.payload];
    case "REMOVE_AVAILABLE_FAVOURITE":
      let list = [...state];
      let newList = list.filter((movie) => movie.id !== action.payload.id);
      return newList;
    default:
      return state;
  }
}
