declare module 'vat-siren-siret' {
  export function isSIREN(siren: string): boolean;
  export function isSIRET(siret: string): boolean;
  export function isVAT(vat: string): boolean;

  export function toSIREN(value: string): string | false;
  export function toVAT(value: string): string | false;

  export function formatSIRET(value: string): string;
  export function formatSIREN(value: string): string;
  export function formatVAT(value: string): string;
}
