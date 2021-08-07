/* selectors */
export const isLogged = state => state.logged;

/* action name creator */
const reducerName = 'logged';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

/* action creators */
export const logIn = payload => ({payload, type: LOG_IN});
export const logOut = payload => ({payload, type: LOG_OUT});

/* reducer */
export const reducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case LOG_IN: {
      return true
    }
    case LOG_OUT: {
      return false
    }
    default:
      return statePart;
  }
};
