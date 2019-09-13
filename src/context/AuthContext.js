import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import pippinApi from '../api/pippin';
import { navigate } from '../navigationRef';
import {
   SIGN_UP_ERROR,
   USER_SIGN_IN,
   CLEAR_ERRORS,
   SIGN_OUT
 } from './AuthTypes';

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return {...state, errorMessage: action.payload }

    case USER_SIGN_IN:      
      return { token: action.payload, errorMessage: '' }
    
    case CLEAR_ERRORS:
      return { ...state, errorMessage: '' }

    case SIGN_OUT:
      return { token: null, errorMessage: '' }

    default:
      return state;
  }
};

const signUp = (dispatch) => ({ email, password }) => {
  let token;
  pippinApi.post('/signup', { email, password })
  .then(response => {
    token = response.data.token;
    return AsyncStorage.setItem('token', token)
  })
  .then(() => {
    dispatch({type: USER_SIGN_IN, payload: token})
    navigate('SchoolSearch')
  })
  .catch(error => {
    console.log(error);
    dispatch({type: SIGN_UP_ERROR, payload: 'Sign up error'})
  })
}

const signIn = (dispatch) => ({ email, password }) => {
  let token;
  pippinApi.post('/signin', { email, password })
  .then(response => {
    token = response.data.token;
    return AsyncStorage.setItem('token', token)
  })
  .then(() => {
    dispatch({type: USER_SIGN_IN, payload: token})
    navigate('Home')
  })
  .catch(error => {
    console.log(error);
    dispatch({type: SIGN_UP_ERROR, payload: 'Sign up error'})
  })
}

const localSignIn = (dispatch) => () => {
  AsyncStorage.getItem('token')
  .then(token => {
    if (token) {
      dispatch({type: USER_SIGN_IN, payload: token})
      // navigate('TrackList')
    } else {
      navigate('Landing')
    }
  })
  .catch(error => {
    navigate('Landing')
  })
}

const clearErrors = (dispatch) => () => {
  dispatch({ type: CLEAR_ERRORS })
}

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: SIGN_OUT })
  navigate('Landing')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrors, localSignIn },
  { token: null, errorMessage: '' }
)