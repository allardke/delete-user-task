import { createClient } from '@extrahorizon/javascript-sdk';
import { requestLogger } from 'axios-logger';
import apiConfig from '../config';

export const sdk = createClient({
  host: apiConfig.host,
  consumerKey: apiConfig.oauthConsumer.key,
  consumerSecret: apiConfig.oauthConsumer.secret,
  requestLogger,
});

export function authenticateSDK() {
  return sdk.auth.authenticate({
    token: apiConfig.oauthToken.key,
    tokenSecret: apiConfig.oauthToken.secret,
  });
}
