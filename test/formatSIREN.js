const lib = require('../index');

[0, 1, true, false, {}, [], '81345471', '8134547171', 'FR42813454717', '81345471700014'].forEach((value) => {
  test(`formatSIREN bad value ${JSON.stringify(value)}`, () => {
    expect(() => lib.formatSIREN(value)).toBe(value);
  });
});

test(`format SIREN good values`, () => {
  expect(['813454717', '803417153'].map(lib.formatSIREN)).toEqual(['813 454 717', '803 417 153']);
});
