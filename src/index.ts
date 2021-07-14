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
 */
function checkLuhn(value: string): boolean {
  let digit: number;
  let sum = 0;
  let even = false;
  for (let i = value.length - 1; i >= 0; i -= 1) {
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
 */
function getVATKey(siren: string): number {
  return (12 + (3 * (parseInt(siren, 10) % 97))) % 97;
}

/**
 * Return TRUE if the VAT is correct
 */
function checkVAT(vat: string): boolean {
  const siren = vat.substr(4);
  return getVATKey(siren) === parseInt(vat.substr(2, 2), 10) && checkLuhn(siren);
}

/**
 * Return TRUE if the SIREN is valid
 */
export function isSIREN(siren: string): boolean {
  return re.SIREN.test(siren) && checkLuhn(siren);
}

/**
 * Return TRUE if the SIRET is valid
 */
export function isSIRET(siret: string): boolean {
  return re.SIRET.test(siret) && checkLuhn(siret);
}

/**
 * Return TRUE if the VAT is valid
 */
export function isVAT(vat: string): boolean {
  return re.VAT.test(vat) && checkVAT(vat);
}

/**
 * Convert a SIREN / SIRET / VAT to a SIREN
 */
export function toSIREN(value: string): string {
  if (isSIRET(value)) {
    return value.substr(0, 9);
  }
  if (isVAT(value)) {
    return value.substr(4);
  }
  if (isSIREN(value)) {
    return value;
  }
  return '';
}

/**
 * Convert a SIREN / SIRET / VAT to a VAT
 */
export function toVAT(value: string): string {
  if (isVAT(value)) {
    return value;
  }
  const siren = toSIREN(value);
  if (siren) {
    const key = getVATKey(siren);
    return `FR${key < 10 ? '0' : ''}${key}${siren}`;
  }
  return '';
}

/**
 * Format (prettify) a SIRET
 */
export function formatSIRET(value: string): string {
  if (!isSIRET(value)) {
    return value;
  }
  return value.replace(re.formatSIRET, '$1 $2 $3 $4');
}

/**
 * Format (prettify) a SIREN
 */
export function formatSIREN(value: string): string {
  if (!isSIREN(value)) {
    return value;
  }
  return value.replace(re.formatSIREN, '$1 ');
}

/**
 * Format (prettify) a VAT
 */
export function formatVAT(value: string): string {
  if (!isVAT(value)) {
    return value;
  }
  return value.replace(re.formatVAT, '$1 $2 $3 $4 $5');
}
