// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Lightning Payments endpoints
 */
export class LightningPayments extends APIResource {
  /**
   * Retrieve all data about a single Payment.
   *
   * @example
   * ```ts
   * await client.lightningPayments.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v0/payments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Start sending instant Bitcoin payments through the ZBD API.
   *
   * @example
   * ```ts
   * await client.lightningPayments.send({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   description: 'string',
   *   internalId: 'string',
   *   invoice: 'string',
   * });
   * ```
   */
  send(body: LightningPaymentSendParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v0/payments', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LightningPaymentSendParams {
  /**
   * Amount to be paid to this Charge/Invoice -> in millisatoshis _(only valid if
   * Amountless Invoice)_
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Payment updates to
   */
  callbackUrl?: string;

  /**
   * Note or comment for this Payment
   */
  description?: string;

  /**
   * Open metadata string property
   */
  internalId?: string;

  /**
   * Lightning Network Payment Request / Charge
   */
  invoice?: string;
}

export declare namespace LightningPayments {
  export { type LightningPaymentSendParams as LightningPaymentSendParams };
}
