import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
      };
    }

    default: {
      return state;
    }
  }
};
