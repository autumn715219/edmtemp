import { handleActions } from 'redux-actions';
import { setCurrentStep, clearCurrentStep } from '@/actions/currentUndoStep';

const initialState = null;

const currentUndoStep = handleActions(
  {
    [setCurrentStep]: (state, action) => {
      return action.payload;
    },
    [clearCurrentStep]: () => null,
  },
  initialState,
);

export default currentUndoStep;
