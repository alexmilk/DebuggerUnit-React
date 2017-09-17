import expect from 'expect';
import * as Exports from '../src/index';

describe('react-flexbox-grid exports', () => {
  it('exports all the symbols it should', () => {
    ['Grid', 'Row', 'Col', 'getColumnProps', 'getRowProps'].forEach((prop) => {
      expect(Exports.hasOwnProperty(prop)).toBe(true);
    });
  });
});
