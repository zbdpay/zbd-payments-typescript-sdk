// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Lightning Charges endpoints
 */
export class LightningCharges extends APIResource {
  /**
   * Start receiving instant Bitcoin payments through the ZBD API.
   *
   * @example
   * ```ts
   * await client.lightningCharges.create({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   description: 'string',
   *   expiresIn: NaN,
   *   internalId: 'string',
   * });
   * ```
   */
  create(
    body: LightningChargeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v0/charges', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all data about a single Charge.
   *
   * @example
   * ```ts
   * await client.lightningCharges.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v0/charges/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LightningChargeCreateParams {
  /**
   * The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Charge (visible to payer)
   */
  description?: string;

  /**
   * Time until Charge expiration -> in seconds
   */
  expiresIn?: number;

  /**
   * Open metadata string property
   */
  internalId?: string;
}

export declare namespace LightningCharges {
  export { type LightningChargeCreateParams as LightningChargeCreateParams };
}
