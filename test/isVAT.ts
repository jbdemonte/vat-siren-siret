import { isVAT } from '../src';

['813454717', 'FR4281345471', 'FR428134547171'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(isVAT(value)).toBe(false);
  });
});

['FR42813454717', 'FR30803417153'].forEach((value) => {
  test(`good value ${value}`, () => {
    expect(isVAT(value)).toBe(true);
  });
});
