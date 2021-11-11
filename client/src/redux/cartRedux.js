import { initialState } from "./initialState";
import Axios from 'axios';
import { API_URL } from '../../src/config.js';

/* selectors */
export const getAll = ({ cart }) => cart.data;
export const getOne = ({ cart }) => cart.singleProduct;
export const getCartCost = ({ cart }) => cart.cartCost;
export const getNumberOfProducts = ({ cart }) => cart.numberOfProducts;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_SUCCESS_SINGLE = createActionName('FETCH_SUCCESS_SINGLE');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchSuccessSingle = payload => ({ payload, type: FETCH_SUCCESS_SINGLE });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {

    const state = getState();

    if(!state.examples.data.length && state.examples.loading.active === false){
      dispatch(fetchStarted());

      Axios
        .get(`${API_URL}api/examples`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });

    }
  };
};

export const fetchOneMaterial = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}api/examples/${id}`)
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
        singleMaterial: action.payload,
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
    case ADD_TO_CART: {
      let productInCart = action.payload;
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        cartCost: statePart.cartCost +  parseInt(productInCart.price),
        numberOfProducts: statePart.numberOfProducts += 1,
        data: [...statePart.data, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
        let productToRemove = action.payload;
        let price = parseInt(productToRemove.price);
        let products = statePart.data;
        let index = products.indexOf(productToRemove);
        products.length === 1 ? products = [] : products.splice(index, 1);
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
        cartCost: statePart.cartCost - price,
        numberOfProducts: statePart.numberOfProducts -= 1,
        data: products,
      };
    }
    default:
      return statePart;
  }
};
