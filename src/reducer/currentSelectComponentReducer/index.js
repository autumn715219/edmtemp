import { handleActions } from 'redux-actions';
import {
  setCurrentSelectComponent,
  clearCurrentSelectComponent,
} from '@/actions/currentSelectComponent';

const initialState = null;

const currentSelectComponentReducer = handleActions(
  {
    [setCurrentSelectComponent]: (state, action) => {
      return action.payload;
    },
    [clearCurrentSelectComponent]: () => {
      return null;
    },
  },
  initialState,
);

export default currentSelectComponentReducer;
