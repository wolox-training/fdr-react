export const actions = {
  GET_OPEN: '@@SHOPPINGCART/GET_OPEN',
  GET_CLOSE: '@@SHOPPINGCART/GET_CLOSE'
};

const actionsCreator = {
  getOpen: () => ({
    type: actions.GET_OPEN,
    payload: { isOpen: true }
  }),
  getClose: () => ({
    type: actions.GET_CLOSE,
    payload: { isClose: false }
  })
};

export default actionsCreator;
