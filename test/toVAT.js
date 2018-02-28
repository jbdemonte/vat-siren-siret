const lib = require('../index');

[0, 1, true, false, {}, [], '8134547174', 'FR428134547175', '8134547170001415', '1813454717000145'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(lib.toVAT(value)).toBe(false);
  });
});

test('SIRET to VAT', () => {
  expect(lib.toVAT('81345471700014')).toBe('FR42813454717');
  expect(lib.toVAT('80341715300035')).toBe('FR30803417153');
});

test('SIREN to VAT', () => {
  expect(lib.toVAT('813454717')).toBe('FR42813454717');
  expect(lib.toVAT('803417153')).toBe('FR30803417153');
});

test('SIREN to VAT having a single digit VAT key', () => {
  expect(lib.toVAT('000894402')).toBe('FR04000894402');
});

test('VAT to VAT', () => {
  expect(lib.toVAT('FR42813454717')).toBe('FR42813454717');
  expect(lib.toVAT('FR30803417153')).toBe('FR30803417153');
});
