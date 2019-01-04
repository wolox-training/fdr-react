import actionCreators, { actions } from './actions'

describe('Action --- Test simple calculator actions', () => {
  it('actionCreator ADD', () => {
    const add = actionCreators.add();
    const expectedAction = { type: actions.ADD };

    expect(add).toEqual(expectedAction);
  });

  it('actionCreator SUBSTRACT', () => {
    const subtract = actionCreators.substract();
    const expectedAction = { type: actions.SUBSTRACT };

    expect(subtract).toEqual(expectedAction);
  });
});
