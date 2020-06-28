import { USER_PROFILE } from '../actions/types';

const initState = {
  isAuthenticated: false,
  loading: true,
  user: null
};

export const authReducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    default:
      return state;
  }
};
