'use strict';

const re = {
  SIRET: /^\d{14}$/,
  SIREN: /^\d{9}$/,
  VAT: /^FR\d{11}$/,
  formatSIRET: /^(\d{3})(\d{3})(\d{3})(\d{5})$/g,
  formatSIREN: /(\d\d\d\B)/g,
  formatVAT: /^([A-Z]{2})(\d{2})(\d{3})(\d{3})(\d{3})$/,
};

/**
 * Return TRUE if the string evaluation on the Luhn algorithm succeeds
 * @param {string} value
 * @return {boolean}
 */
function checkLuhn(value) {
  let digit;
  let i;
  let sum = 0;
  let even = false;
  for (i = value.length - 1; i >= 0; i -= 1) {
    digit = parseInt(value[i], 10);
    if (even) {
      digit += digit;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    even = !even;
  }
  return (sum % 10) === 0;
}

/**
 * Return the french VAT key for a SIREN
 * @param {string} siren
 * @return {number}
 */
function getVATKey(siren) {
  return (12 + (3 * (parseInt(siren, 10) % 97))) % 97;
}

/**
 * Return TRUE if the VAT is correct
 * @param {string} vat
 * @return {boolean}
 */
function checkVAT(vat) {
  const siren = vat.substr(4);
  return getVATKey(siren) === parseInt(vat.substr(2, 2), 10) && checkLuhn(siren);
}

/**
 * Return TRUE if the SIREN is valid
 * @param {string} siren
 * @return {boolean}
 */
function isSIREN(siren) {
  return typeof siren === 'string' && re.SIREN.test(siren) && checkLuhn(siren);
}

/**
 * Return TRUE if the SIRET is valid
 * @param {string} siret
 * @return {boolean}
 */
function isSIRET(siret) {
  return typeof siret === 'string' && re.SIRET.test(siret) && checkLuhn(siret);
}

/**
 * Return TRUE if the VAT is valid
 * @param {string} vat
 * @return {boolean}
 */
function isVAT(vat) {
  return typeof vat === 'string' && re.VAT.test(vat) && checkVAT(vat);
}

/**
 * Convert a SIREN / SIRET / VAT to a SIREN
 * @param {string} value
 * @return {string|boolean}
 */
function toSIREN(value) {
  if (isSIRET(value)) {
    return value.substr(0, 9);
  }
  if (isVAT(value)) {
    return value.substr(4);
  }
  if (isSIREN(value)) {
    return value;
  }
  return false;
}

/**
 * Convert a SIREN / SIRET / VAT to a VAT
 * @param {string} value
 * @return {string|boolean}
 */
function toVAT(value) {
  let siren = value;
  if (isSIRET(value)) {
    siren = toSIREN(value);
  } else if (isVAT(value)) {
    return siren;
  } else if (!isSIREN(value)) {
    return false;
  }
  const key = getVATKey(siren);
  return `FR${key}${siren}`;
}

/**
 * Format (prettify) a SIRET
 * @param {string} value
 * @return {string}
 */
function formatSIRET(value) {
  if (!isSIRET(value)) {
    return value;
  }
  return value.replace(re.formatSIRET, '$1 $2 $3 $4');
}

/**
 * Format (prettify) a SIREN
 * @param {string} value
 * @return {string}
 */
function formatSIREN(value) {
  if (!isSIREN(value)) {
    return value;
  }
  return value.replace(re.formatSIREN, '$1 ');
}

/**
 * Format (prettify) a VAT
 * @param {string} value
 * @return {string}
 */
function formatVAT(value) {
  if (!isVAT(value)) {
    return value;
  }
  return value.replace(re.formatVAT, '$1 $2 $3 $4 $5');
}

module.exports = {
  isSIREN,
  isSIRET,
  isVAT,
  toSIREN,
  toVAT,
  formatSIRET,
  formatSIREN,
  formatVAT,
};
