import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //when we pass a reducer into this combineReducers, we are telling redux how to create our applications state
  //this is the mapping of our reducers
  books: BooksReducer,
  activeBook: ActiveBook
  // value is books reducer which holds the data
});

export default rootReducer;
