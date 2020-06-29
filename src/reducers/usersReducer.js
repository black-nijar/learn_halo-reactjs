import { USERS_DATA } from "../actions/types";

const initState = {
users: []
};

export const usersReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_DATA:
      const { users } = payload;
      const usersDetail = [];
      for (let key in users) {
        const email = users[key].email;
        const familyName = users[key].familyName;
        const givenName = users[key].givenName;
        const id = users[key].id;
        const name = users[key].name;
        const photoUrl = users[key].photoUrl;
        usersDetail.push({ email, familyName, givenName, id, name, photoUrl });
      }
      return {
        ...state,
        users: usersDetail
      };
    default:
      return state;
  }
};