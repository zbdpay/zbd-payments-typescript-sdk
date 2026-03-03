// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Lightning Charges endpoints
 */
export class LightningStaticCharges extends APIResource {
  /**
   * Start accepting payments on Lightning with Static QR codes.
   *
   * @example
   * ```ts
   * await client.lightningStaticCharges.create({
   *   allowedSlots: 123,
   *   callbackUrl: 'string',
   *   description: 'string',
   *   identifier: 'string',
   *   internalId: 'string',
   *   maxAmount: 'string',
   *   minAmount: 'string',
   *   successMessage: 'string',
   * });
   * ```
   */
  create(
    body: LightningStaticChargeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v0/static-charges', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all data about a single Static Charge.
   *
   * @example
   * ```ts
   * await client.lightningStaticCharges.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v0/static-charges/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Change the configuration of a Static Charge QR code.
   *
   * @example
   * ```ts
   * await client.lightningStaticCharges.update('id', {
   *   allowedSlots: 123,
   *   callbackUrl: 'string',
   *   description: 'string',
   *   internalId: 'string',
   *   maxAmount: 'string',
   *   minAmount: 'string',
   *   successMessage: 'string',
   * });
   * ```
   */
  update(
    id: string,
    body: LightningStaticChargeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/v0/static-charges/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LightningStaticChargeCreateParams {
  /**
   * Number of payments this Static Charge can accept
   */
  allowedSlots?: number;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Static Charge (visible to payer)
   */
  description?: string;

  /**
   * Used for Custom Lightning Addresses (see guide)
   */
  identifier?: string;

  /**
   * Open metadata string property
   */
  internalId?: string;

  /**
   * Maximum allowed amount for the Static Charge -> in millisatoshis
   */
  maxAmount?: string;

  /**
   * Minimum allowed amount for the Static Charge -> in millisatoshis
   */
  minAmount?: string;

  /**
   * Message displayed to the payer AFTER payment settles. Maximum of 144 characters.
   */
  successMessage?: string;
}

export interface LightningStaticChargeUpdateParams {
  /**
   * Number of payments this Static Charge can accept
   */
  allowedSlots?: number;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Static Charge (visible to payer)
   */
  description?: string;

  /**
   * Open metadata string property
   */
  internalId?: string;

  /**
   * Maximum allowed amount for the Static Charge -> in millisatoshis
   */
  maxAmount?: string;

  /**
   * Minimum allowed amount for the Static Charge -> in millisatoshis
   */
  minAmount?: string;

  /**
   * Message displayed to the payer AFTER payment settles
   */
  successMessage?: string;
}

export declare namespace LightningStaticCharges {
  export {
    type LightningStaticChargeCreateParams as LightningStaticChargeCreateParams,
    type LightningStaticChargeUpdateParams as LightningStaticChargeUpdateParams,
  };
}
