export const initialState = {
  authors: {
    data: [],
    singleAuthor: {},
    loading: {
      active: false,
      error: false,
    },
  },
  paintings: {
    data: [],
    singlePainting: {},
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    cartCost: 0,
    data: [],
    singleProduct: {},
    loading: {
      active: false,
      error: false,
    }
  },
  orders: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
