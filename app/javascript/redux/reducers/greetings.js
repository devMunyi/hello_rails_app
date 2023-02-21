import { FETCH_GREETING } from '../actions/greetings';

// set initial state
const initialState = [];

// rockets reducer
const greetingsReducers = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_GREETING}/fulfilled`:
      return payload;
    default:
      return state;
  }
};

// export rockets reducer as default
export default greetingsReducers;