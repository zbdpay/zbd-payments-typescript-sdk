// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Wallet endpoints
 */
export class Wallet extends APIResource {
  /**
   * Retrieve all data about a ZBD Project's Wallet.
   */
  retrieveBalance(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v0/wallet', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
