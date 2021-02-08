export enum ClassificationLevel {
  topsecretsci = 'TOP SECRET//SCI',
  topsecret = 'TOP SECRET',
  secret = 'SECRET',
  restricted = 'RESTRICTED',
  controlled = 'CONTROLLED (CUI)',
  unclassified = 'UNCLASSIFIED',
  confidential = 'CONFIDENTIAL'
}

export function deriveClassification(classification: string) {
  switch (classification) {
    case 'controlled':
      return 'CUI';
    case 'unclassified':
      return 'UNCLASSIFIED';
    case 'restricted':
      return 'RESTRICTED';
    case 'confidential':
      return 'CONFIDENTIAL';
    case 'secret':
      return 'SECRET';
    case 'topsecret':
      return 'TOP SECRET';
    case 'topsecretsci':
      return 'TOP SECRET//SCI';
    default:
      return classification;
  }
}

export function formatBannerText(classification: string, controls: string[]) {
  const SEPARATOR = '//';

  return (controls.length > 0) ?
    `${classification}${SEPARATOR}${controls.join('/')}`.toUpperCase() :
    `${classification}`.toUpperCase();
}

