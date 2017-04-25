//state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    //if this action has a type of BOOK_SELECTED, it will return the book that was selected (payload)
  case 'BOOK_SELECTED':
    return action.payload;
    //this is the returned book that is selected
  }
  //else just return the current state
  return state;
}
