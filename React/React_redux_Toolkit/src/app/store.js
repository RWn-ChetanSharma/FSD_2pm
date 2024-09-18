import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});



// Store - is what holds all the data your application uses.
// Reducer - is what manipulates that data when it receives an action.
// Action - is what tells reducer to manipulate the store data, 
//           it carries the name and (optionally) some data.


// Action's payload carries the data necessary to update the application state. 
// They are vital because they provide the necessary information for reducers to determine 
// how the state should be modified.