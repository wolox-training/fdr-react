import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    expect.assertions(1);
    await expect(getData(true)).resolves.toBeTruthy();
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect.assertions(1);
    return getData(true).then(data => {
      expect(data).toBeTruthy();
    });
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    try {
      await getData(false);
    } catch (data) {
      expect(data).toEqual(new Error('error'));
    }
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {    
    return getData(false).catch(data => expect(data).toEqual(new Error('error')));
  });
});
