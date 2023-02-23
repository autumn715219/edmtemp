import { handleActions } from 'redux-actions';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  loginUser,
  logoutUser,
  signInWithGoogle,
  signUpUser,
} from '@/actions/userAuth';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const userAuth = handleActions(
  {
    [loginRequest]: (state) => ({
      ...state,
      error: null,
    }),
    [loginSuccess]: (state, { payload: { user } }) => ({
      ...state,
      isAuthenticated: true,
      user,
    }),
    [loginFailure]: (state, { payload: { error } }) => ({
      ...state,
      isAuthenticated: false,
      error,
    }),
    [logout]: () => initialState,
  },
  initialState,
);

export default userAuth;
