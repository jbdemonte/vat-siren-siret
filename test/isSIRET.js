const lib = require('../index');

[0, 1, true, false, {}, [], '813454717', 'FR42813454717', '813454717000141', '181345471700014'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(lib.isSIRET(value)).toBe(false);
  });
});

['81345471700014', '80341715300035'].forEach((value) => {
  test(`good value ${value}`, () => {
    expect(lib.isSIRET(value)).toBe(true);
  });
});
