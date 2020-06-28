import { USER_PROFILE } from './types';

// User Profile
export const userProfile = data => {
  return {
    type: USER_PROFILE,
    payload: data
  };
};


