const lib = require('../index');

[0, 1, true, false, {}, [], '813454717', 'FR42813454717', '813454717000141', '181345471700014'].forEach((value) => {
  test(`formatSIRET bad value ${JSON.stringify(value)}`, () => {
    expect(() => lib.formatSIRET(value)).toBe(value);
  });
});

test(`format SIRET good values`, () => {
  expect(['81345471700014', '80341715300035'].map(lib.formatSIRET)).toEqual(['813 454 717 00014', '803 417 153 00035']);
});
