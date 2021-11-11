import { initialState } from "./initialState";
import Axios from 'axios';
import { API_URL } from '../../src/config.js';

/* selectors */
export const getAll = ({ paintings }) => paintings.data;
export const getOne = ({ paintings }) => paintings.singlePainting;
export const getPaintingsInCart = ({ paintings }) => paintings.paintingsInCart;

/* action name creator */
const reducerName = 'paintings';
const createActionName = name => `app/${reducerName}/${name}`;

/* action paintings */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_SUCCESS_SINGLE = createActionName('FETCH_SUCCESS_SINGLE');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SET_IN_CART = createActionName('SET_IN_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchSuccessSingle = payload => ({ payload, type: FETCH_SUCCESS_SINGLE });
export const setInCart = payload => ({ payload, type: SET_IN_CART });

/* thunk creators */
export const fetchAllPaintings = () => {
  return (dispatch, getState) => {

    //if(!state.paintings.data.length && state.paintings.loading.active === false){
      dispatch(fetchStarted());

      Axios
        .get(`${API_URL}api/paintings`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });

   // }
  };
};

export const fetchOnePainting = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}api/painting/${id}`)
      .then(res => {
        dispatch(fetchSuccessSingle(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_SUCCESS_SINGLE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        singlePainting: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case SET_IN_CART: {
      if(!statePart.paintingsInCart.includes(statePart.singlePainting._id)){
        statePart.paintingsInCart.push(statePart.singlePainting._id)
      }
      return {
        ...statePart,
        paintingsInCart: [...statePart.paintingsInCart],
      }
    }
    default:
      return statePart;
  }
};
