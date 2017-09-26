import * as util from '../lib/util.js'

describe('testing util helpers', () => {
  describe('testing loggers', () => {
    let debugCache;
    beforeAll(() => {
      if(global.__DEBUG__) debugCache = global.__DEBUG__;
    })

    afterAll(() => {
      global.__DEBUG__ = debugCache;
    })

    test('log should work when __DEBUG__ is true', () => {
      global.__DEBUG__ = true;

      //jest's spy method to keep track of whether console.log is called
      const spy = jest.spyOn(console, 'log');

      util.log('cool', 'stuff')

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('cool', 'stuff')
    })

    test('log should not work when __DEBUG__ is false', () => {
      global.__DEBUG__ = false;

      //jest's spy method to keep track of whether console.log is called
      const spy = jest.spyOn(console, 'log');

      util.log('shouldnt', 'log')

      expect(spy).notToHaveBeenCalled();
    })
  })
})
