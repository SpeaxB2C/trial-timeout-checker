
export const config = require('config')

export const apiKey = config.api.key;
export const apiSecret = config.api.secret;
export const apiBaseUrl = config.api.baseUrl;

export const apiRequestHeaders = {
    Accept: 'application/json',
    Authorization: 'Voxy ${apiKey}:${apiSecret}',
  };


export const databaseClientParameters = {"host": 'localhost'}