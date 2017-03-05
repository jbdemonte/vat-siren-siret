const lib = require('../index');

[0, 1, true, false, {}, [], '81345471', '813454717000141', '181345471700014'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(lib.toSIREN(value)).toBe(false);
  });
});

test('SIRET to SIREN', () => {
  expect(lib.toSIREN('81345471700014')).toBe('813454717');
  expect(lib.toSIREN('80341715300035')).toBe('803417153');
});

test('VAT to SIREN', () => {
  expect(lib.toSIREN('FR42813454717')).toBe('813454717');
  expect(lib.toSIREN('FR30803417153')).toBe('803417153');
});

test('SIREN to SIREN', () => {
  expect(lib.toSIREN('813454717')).toBe('813454717');
  expect(lib.toSIREN('803417153')).toBe('803417153');
});
