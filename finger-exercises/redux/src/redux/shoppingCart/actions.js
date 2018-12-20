export const actions = {
  CHART_OPEN: '@@SHOPPINGCART/CHART_OPEN',
  CHART_CLOSE: '@@SHOPPINGCART/CHART_CLOSE'
};

const actionsCreator = {
  openChart: () => ({
    type: actions.CHART_OPEN
  }),
  closeChart: () => ({
    type: actions.CHART_CLOSE
  })
};

export default actionsCreator;
