import { formatSIRET } from '../src';

test('formatSIRET bad values', () => {
  const badValues = ['813454717', 'FR42813454717', '813454717000141', '181345471700014'];
  expect(badValues.map(formatSIRET)).toEqual(badValues);
});

test('format SIRET good values', () => {
  expect(['81345471700014', '80341715300035'].map(formatSIRET)).toEqual(['813 454 717 00014', '803 417 153 00035']);
});
