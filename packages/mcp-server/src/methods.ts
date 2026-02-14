// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.gamertags.createCharge',
    fullyQualifiedName: 'gamertags.createCharge',
    httpMethod: 'post',
    httpPath: '/v0/gamertag/charges',
  },
  {
    clientCallName: 'client.gamertags.retrieveByGamertag',
    fullyQualifiedName: 'gamertags.retrieveByGamertag',
    httpMethod: 'get',
    httpPath: '/v0/user-id/gamertag/{gamertag}',
  },
  {
    clientCallName: 'client.gamertags.retrieveByZbdID',
    fullyQualifiedName: 'gamertags.retrieveByZbdID',
    httpMethod: 'get',
    httpPath: '/v0/gamertag/user-id/{id}',
  },
  {
    clientCallName: 'client.gamertags.retrievePayment',
    fullyQualifiedName: 'gamertags.retrievePayment',
    httpMethod: 'get',
    httpPath: '/v0/gamertag/transaction/{id}',
  },
  {
    clientCallName: 'client.gamertags.sendPayment',
    fullyQualifiedName: 'gamertags.sendPayment',
    httpMethod: 'post',
    httpPath: '/v0/gamertag/send-payment',
  },
  {
    clientCallName: 'client.lightningCharges.create',
    fullyQualifiedName: 'lightningCharges.create',
    httpMethod: 'post',
    httpPath: '/v0/charges',
  },
  {
    clientCallName: 'client.lightningCharges.retrieve',
    fullyQualifiedName: 'lightningCharges.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/charges/{id}',
  },
  {
    clientCallName: 'client.internalTransfer.initiate',
    fullyQualifiedName: 'internalTransfer.initiate',
    httpMethod: 'post',
    httpPath: '/v0/internal-transfer',
  },
  {
    clientCallName: 'client.lightningAddress.createCharge',
    fullyQualifiedName: 'lightningAddress.createCharge',
    httpMethod: 'post',
    httpPath: '/v0/ln-address/fetch-charge',
  },
  {
    clientCallName: 'client.lightningAddress.sendPayment',
    fullyQualifiedName: 'lightningAddress.sendPayment',
    httpMethod: 'post',
    httpPath: '/v0/ln-address/send-payment',
  },
  {
    clientCallName: 'client.lightningAddress.validate',
    fullyQualifiedName: 'lightningAddress.validate',
    httpMethod: 'get',
    httpPath: '/v0/ln-address/validate/{address}',
  },
  {
    clientCallName: 'client.lightningStaticCharges.create',
    fullyQualifiedName: 'lightningStaticCharges.create',
    httpMethod: 'post',
    httpPath: '/v0/static-charges',
  },
  {
    clientCallName: 'client.lightningStaticCharges.retrieve',
    fullyQualifiedName: 'lightningStaticCharges.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/static-charges/{id}',
  },
  {
    clientCallName: 'client.lightningStaticCharges.update',
    fullyQualifiedName: 'lightningStaticCharges.update',
    httpMethod: 'patch',
    httpPath: '/v0/static-charges/{id}',
  },
  {
    clientCallName: 'client.vouchers.create',
    fullyQualifiedName: 'vouchers.create',
    httpMethod: 'post',
    httpPath: '/v1/create-voucher',
  },
  {
    clientCallName: 'client.vouchers.retrieve',
    fullyQualifiedName: 'vouchers.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/vouchers/{id}',
  },
  {
    clientCallName: 'client.vouchers.redeem',
    fullyQualifiedName: 'vouchers.redeem',
    httpMethod: 'post',
    httpPath: '/v0/redeem-voucher',
  },
  {
    clientCallName: 'client.vouchers.revoke',
    fullyQualifiedName: 'vouchers.revoke',
    httpMethod: 'post',
    httpPath: '/v0/revoke-voucher',
  },
  {
    clientCallName: 'client.withdrawalRequests.create',
    fullyQualifiedName: 'withdrawalRequests.create',
    httpMethod: 'post',
    httpPath: '/v0/withdrawal-requests',
  },
  {
    clientCallName: 'client.withdrawalRequests.retrieve',
    fullyQualifiedName: 'withdrawalRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/withdrawal-requests/{id}',
  },
  {
    clientCallName: 'client.lightningPayments.retrieve',
    fullyQualifiedName: 'lightningPayments.retrieve',
    httpMethod: 'get',
    httpPath: '/v0/payments/{id}',
  },
  {
    clientCallName: 'client.lightningPayments.send',
    fullyQualifiedName: 'lightningPayments.send',
    httpMethod: 'post',
    httpPath: '/v0/payments',
  },
  {
    clientCallName: 'client.wallet.retrieveBalance',
    fullyQualifiedName: 'wallet.retrieveBalance',
    httpMethod: 'get',
    httpPath: '/v0/wallet',
  },
  {
    clientCallName: 'client.utils.checkIPSupport',
    fullyQualifiedName: 'utils.checkIPSupport',
    httpMethod: 'get',
    httpPath: '/v0/is-supported-region/{ip}',
  },
  {
    clientCallName: 'client.utils.decodeLightningCharge',
    fullyQualifiedName: 'utils.decodeLightningCharge',
    httpMethod: 'post',
    httpPath: '/v0/decode-invoice',
  },
  {
    clientCallName: 'client.utils.listProdIPs',
    fullyQualifiedName: 'utils.listProdIPs',
    httpMethod: 'get',
    httpPath: '/v0/prod-ips',
  },
  {
    clientCallName: 'client.utils.retrieveBtcUsd',
    fullyQualifiedName: 'utils.retrieveBtcUsd',
    httpMethod: 'get',
    httpPath: '/v0/btcusd',
  },
  {
    clientCallName: 'client.oauth2.createAuthorizationURL',
    fullyQualifiedName: 'oauth2.createAuthorizationURL',
    httpMethod: 'get',
    httpPath: '/v1/oauth2/authorize',
  },
  {
    clientCallName: 'client.oauth2.refreshToken',
    fullyQualifiedName: 'oauth2.refreshToken',
    httpMethod: 'post',
    httpPath: '/v1/oauth2/token',
  },
  {
    clientCallName: 'client.oauth2.retrieveUserData',
    fullyQualifiedName: 'oauth2.retrieveUserData',
    httpMethod: 'get',
    httpPath: '/v1/oauth2/user',
  },
  {
    clientCallName: 'client.oauth2.retrieveWalletData',
    fullyQualifiedName: 'oauth2.retrieveWalletData',
    httpMethod: 'get',
    httpPath: '/v1/oauth2/wallet',
  },
  {
    clientCallName: 'client.keysendPayments.send',
    fullyQualifiedName: 'keysendPayments.send',
    httpMethod: 'post',
    httpPath: '/v0/keysend-payment',
  },
  {
    clientCallName: 'client.emailPayments.send',
    fullyQualifiedName: 'emailPayments.send',
    httpMethod: 'post',
    httpPath: '/v0/email/send-payment',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
