// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@zbdpay/payments-sdk';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const apikey = Array.isArray(req.headers['apikey']) ? req.headers['apikey'][0] : req.headers['apikey'];
  return { apikey };
};
