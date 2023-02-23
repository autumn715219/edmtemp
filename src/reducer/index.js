import { combineReducers } from 'redux';
import pageListReducer from './pageListReducer';
import currentSelectComponentReducer from './currentSelectComponentReducer';
import currentSelectPageReducer from './currentSelectPageReducer';
import componentPanelReducer from './componentPanelReducer';
import undoStackReducer from './undoStackReducer';
import currentUndoStep from './currentUndoStep';
import userAuth from './userAuth';

const reducers = combineReducers({
  userAuth,
  pageListReducer,
  currentSelectComponentReducer,
  currentSelectPageReducer,
  componentPanelReducer,
  undoStackReducer,
  currentUndoStep,
});
export default reducers;
