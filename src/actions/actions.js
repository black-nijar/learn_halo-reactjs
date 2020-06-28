import { USER_PROFILE, USERS_DATA } from './types';

// User Profile
export const userProfile = data => {
  return {
    type: USER_PROFILE,
    payload: data
  };
};

// Users data
export const usersData = users => {
  return {
    type: USERS_DATA,
    payload: users
  }
}
