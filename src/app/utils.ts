import {isNode} from './platform';

export const fromBase64 = (base64String: string) => {
  return isNode ? Buffer.from(base64String, 'base64').toString() : atob(base64String);
};

export const toBase64 = (value: string) => {
  return isNode ? Buffer.from(value).toString('base64') : btoa(value);
};
