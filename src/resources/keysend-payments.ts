// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Keysend Payments endpoints
 */
export class KeysendPayments extends APIResource {
  /**
   * Start sending Keysend payments on the Lightning Network.
   *
   * @example
   * ```ts
   * await client.keysendPayments.send({
   *   amount: 'string',
   *   callbackUrl: 'string',
   *   metadata: true,
   *   pubkey: 'string',
   *   tlvRecords: null,
   *   value: 'myTLVRecordValue',
   * });
   * ```
   */
  send(body: KeysendPaymentSendParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v0/keysend-payment', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KeysendPaymentSendParams {
  /**
   * The amount for the Payment -> in millisatoshis
   */
  amount?: string;

  /**
   * The endpoint ZBD will POST Keysend Payment updates to
   */
  callbackUrl?: string;

  /**
   * Open metadata object property
   */
  metadata?: unknown;

  /**
   * The Public Key for the destination Lightning node
   */
  pubkey?: string;

  /**
   * List of TLV records <Expandable title="tlvRecord" defaultOpen>
   * <ParamField body="type" type="number" initialValue={123456}> type of the TLV
   * record
   */
  tlvRecords?: Array<string>;

  /**
   * value of the TLV record (hex encoded string)
   */
  value?: string;
}

export declare namespace KeysendPayments {
  export { type KeysendPaymentSendParams as KeysendPaymentSendParams };
}
