// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Utilities endpoints
 */
export class Utils extends APIResource {
  /**
   * Verify if a user is coming from a supported region.
   *
   * @example
   * ```ts
   * await client.utils.checkIPSupport('ip');
   * ```
   */
  checkIPSupport(ip: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v0/is-supported-region/${ip}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Understand the inner properties of a Charge QR code.
   *
   * @example
   * ```ts
   * await client.utils.decodeLightningCharge({
   *   invoice: 'string',
   * });
   * ```
   */
  decodeLightningCharge(
    body: UtilDecodeLightningChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v0/decode-invoice', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the official IP addresses of ZBD servers.
   *
   * @example
   * ```ts
   * await client.utils.listProdIPs();
   * ```
   */
  listProdIPs(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v0/prod-ips', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the latest price for Bitcoin in US Dollars.
   *
   * @example
   * ```ts
   * await client.utils.retrieveBtcUsd();
   * ```
   */
  retrieveBtcUsd(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v0/btcusd', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UtilDecodeLightningChargeParams {
  /**
   * The Charge or Invoice QR code contents
   */
  invoice?: string;
}

export declare namespace Utils {
  export { type UtilDecodeLightningChargeParams as UtilDecodeLightningChargeParams };
}
