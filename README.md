# vat-siren-siret

[![travis build](https://img.shields.io/travis/jbdemonte/vat-siren-siret.svg)](https://travis-ci.org/jbdemonte/vat-siren-siret)
[![Coverage Status](https://coveralls.io/repos/github/jbdemonte/vat-siren-siret/badge.svg?branch=master)](https://coveralls.io/github/jbdemonte/vat-siren-siret?branch=master)
[![NPM Version](https://img.shields.io/npm/v/vat-siren-siret.svg)](https://www.npmjs.com/package/vat-siren-siret)

This library allows to check french VAT, SIRET and SIREN and to generate VAT or SIREN from SIRET, SIREN and VAT.

## Installation

```
npm install vat-siren-siret --save
```

## Usage

```js
import { isSIREN, isSIRET, isVAT, toVAT, toSIREN, formatSIREN, formatSIRET, formatVAT } from 'vat-siren-siret';

// Check string
isSIREN('889405619'); // true
isSIRET('88940561900012'); // true
isVAT('FR39889405619'); // true

// Generate french VAT
toVAT('889405619'); // 'FR39889405619'
toVAT('88940561900012'); // 'FR39889405619'

// Generate SIREN
toSIREN('88940561900012'); // '889405619'
toSIREN('FR39889405619'); // '889405619'

// Format
formatSIREN('889405619'); // '889 405 619'
formatSIRET('88940561900012'); // '889 405 619 00012'
formatVAT('FR39889405619'); // 'FR 39 889 405 619'
```

### isSIREN(value)

Evaluate if the `value` is a SIREN and return a `boolean`.

### isSIRET(value)

Evaluate if the `value` is a SIRET and return a `boolean`.

### isVAT(value)

Evaluate if the `value` is a french VAT and return a `boolean`.

### toVAT(value)

Generate the french VAT from a SIREN or a SIRET and return a `string` or an empty string when the value is wrong.
Return `value` if it already is a VAT.

### toSIREN(value)

Generate the SIREN from a VAT or a SIRET and return a `string` or an empty string when the value is wrong.

## formatSIREN(value)

If `value` is a valid SIREN, returns a properly formatted SIREN (eg. `552 100 554`). Otherwise, returns the value.

## formatSIRET(value)

If `value` is a valid SIRET, returns a properly formatted SIRET (eg. `732 829 320 00074`). Otherwise, returns the value.

## formatVAT(value)

If `value` is a valid VAT number, returns a properly formatted VAT number (eg. `FR 30 803 417 153`). Otherwise, returns the value.

## License

[MIT](https://opensource.org/licenses/MIT)
