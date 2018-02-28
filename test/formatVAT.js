const lib = require('../index');

[0, 1, true, false, {}, [], '813454717', 'FR4281345471', 'FR428134547171'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(() => lib.formatVAT(value)).toBe(value);
  });
});

test(`format VAT good values`, () => {
  expect(['FR42813454717', 'FR30803417153'].map(lib.formatVAT)).toEqual(['FR 42 813 454 717', 'FR 30 803 417 153']);
});
