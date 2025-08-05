// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@zbdpay/payments-sdk/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apikey = req.headers['apikey'] instanceof Array ? req.headers['apikey'][0] : req.headers['apikey'];
  return { apikey };
};
