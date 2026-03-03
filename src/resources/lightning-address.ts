// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Lightning Address endpoints
 */
export class LightningAddress extends APIResource {
  /**
   * Generate a payment request for a Lightning Address.
   *
   * @example
   * ```ts
   * await client.lightningAddress.createCharge({
   *   amount: 'string',
   *   description: 'string',
   *   lnaddress: 'string',
   * });
   * ```
   */
  createCharge(
    body: LightningAddressCreateChargeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v0/ln-address/fetch-charge', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send instant Bitcoin payments to any Lightning Address.
   *
   * @example
   * ```ts
   * await client.lightningAddress.sendPayment({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   comment: 'string',
   *   internalId: 'string',
   *   lnAddress: 'string',
   * });
   * ```
   */
  sendPayment(
    body: LightningAddressSendPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v0/ln-address/send-payment', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verify the validity of a Lightning Address.
   *
   * @example
   * ```ts
   * await client.lightningAddress.validate('address');
   * ```
   */
  validate(address: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v0/ln-address/validate/${address}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LightningAddressCreateChargeParams {
  /**
   * The amount for the Charge -> in millisatoshis
   */
  amount?: string;

  /**
   * Note or comment of this Charge
   */
  description?: string;

  /**
   * The Lightning Address of the intended recipient
   */
  lnaddress?: string;
}

export interface LightningAddressSendPaymentParams {
  /**
   * The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Charge updates to
   */
  callbackUrl?: string;

  /**
   * Note or description of this Payment
   */
  comment?: string;

  /**
   * Open metadata string property
   */
  internalId?: string;

  /**
   * The Lightning Address of the intended recipient (e.g. andre@zbd.gg)
   */
  lnAddress?: string;
}

export declare namespace LightningAddress {
  export {
    type LightningAddressCreateChargeParams as LightningAddressCreateChargeParams,
    type LightningAddressSendPaymentParams as LightningAddressSendPaymentParams,
  };
}
