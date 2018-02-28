const lib = require('../index');

test(`formatSIRET bad values`, () => {
  const badValues = [0, 1, true, false, {}, [], '813454717', 'FR42813454717', '813454717000141', '181345471700014'];
  expect(badValues.map(lib.formatSIRET)).toEqual(badValues);
});

test(`format SIRET good values`, () => {
  expect(['81345471700014', '80341715300035'].map(lib.formatSIRET)).toEqual(['813 454 717 00014', '803 417 153 00035']);
});
