import { formatSIREN } from '../src';

test('test SIREN bad values', () => {
  const badValues = ['81345471', '8134547171', 'FR42813454717', '81345471700014'];
  expect(badValues.map(formatSIREN)).toEqual(badValues);
});

test('format SIREN good values', () => {
  expect(['813454717', '803417153'].map(formatSIREN)).toEqual(['813 454 717', '803 417 153']);
});
