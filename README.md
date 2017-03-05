# vat-siren-siret

[![travis build](https://img.shields.io/travis/jbdemonte/vat-siren-siret.svg)](https://travis-ci.org/jbdemonte/vat-siren-siret)
[![Coverage Status](https://coveralls.io/repos/github/jbdemonte/vat-siren-siret/badge.svg?branch=master)](https://coveralls.io/github/jbdemonte/vat-siren-siret?branch=master)
[![](https://img.shields.io/npm/v/vat-siren-siret)](https://www.npmjs.com/package/vat-siren-siret)

This library allows to check french VAT, SIRET and SIREN and to generate VAT or SIREN from SIRET, SIREN and VAT.

## Installation
```
npm install vat-siren-siret --save
```

## Usage
```js
const vss = require('vat-siren-siret');

// Check string

console.log( vss.isSIREN('813454717') );        // true
console.log( vss.isSIRET('81345471700014') );   // true
console.log( vss.isVAT('FR42813454717') );      // true

// Generate french VAT
console.log( vss.toVAT('813454717') );          // FR42813454717
console.log( vss.toVAT('81345471700014') );     // FR42813454717

// Generate SIREN
console.log( vss.toSIREN('81345471700014') );   // 813454717
console.log( vss.toSIREN('FR42813454717') );    // 813454717


```

### isSIREN(value)

Evaluate if the `value` is a SIREN and return a `boolean`.

### isSIRET(value)

Evaluate if the `value` is a SIRET and return a `boolean`.

### isVAT(value)

Evaluate if the `value` is a french VAT and return a `boolean`.

### toVAT(value)

Generate the french VAT from a SIREN or a SIRET and return a `string` or `false` as `boolean` when value is wrong.
Return `value` if it already is a VAT.

### toSIREN(value)

Generate the SIREN from a VAT or a SIRET and return a `string` or `false` as `boolean` when value is wrong.
Return `value` if it already is a SIREN.

## License
[MIT](https://opensource.org/licenses/MIT)
