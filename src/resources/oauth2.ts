// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * OAuth2 endpoints
 */
export class Oauth2 extends APIResource {
  /**
   * Create an authorization URL for ZBD Login.
   */
  createAuthorizationURL(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/oauth2/authorize', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate a new accessToken for a ZBD Login user.
   */
  refreshToken(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/oauth2/token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch user-related information about a logged-in ZBD User.
   */
  retrieveUserData(
    params: Oauth2RetrieveUserDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { usertoken } = params ?? {};
    return this._client.get('/v1/oauth2/user', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(usertoken != null ? { usertoken: usertoken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Fetch wallet-related information about a logged-in ZBD User.
   */
  retrieveWalletData(
    params: Oauth2RetrieveWalletDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { usertoken } = params ?? {};
    return this._client.get('/v1/oauth2/wallet', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(usertoken != null ? { usertoken: usertoken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Oauth2RetrieveUserDataParams {
  /**
   * OAuth2 Access Token
   */
  usertoken?: string;
}

export interface Oauth2RetrieveWalletDataParams {
  /**
   * OAuth2 Access Token
   */
  usertoken?: string;
}

export declare namespace Oauth2 {
  export {
    type Oauth2RetrieveUserDataParams as Oauth2RetrieveUserDataParams,
    type Oauth2RetrieveWalletDataParams as Oauth2RetrieveWalletDataParams,
  };
}
