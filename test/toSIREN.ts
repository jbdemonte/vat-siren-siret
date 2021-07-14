import { toSIREN } from '../src';

['81345471', '813454717000141', '181345471700014'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(toSIREN(value)).toBe('');
  });
});

test('SIRET to SIREN', () => {
  expect(toSIREN('81345471700014')).toBe('813454717');
  expect(toSIREN('80341715300035')).toBe('803417153');
});

test('VAT to SIREN', () => {
  expect(toSIREN('FR42813454717')).toBe('813454717');
  expect(toSIREN('FR30803417153')).toBe('803417153');
});

test('SIREN to SIREN', () => {
  expect(toSIREN('813454717')).toBe('813454717');
  expect(toSIREN('803417153')).toBe('803417153');
});
