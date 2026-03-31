// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create_charge',
    endpoint: '/v0/gamertag/charges',
    httpMethod: 'post',
    summary: 'Create Charge',
    description: 'Generate a payment request for a ZBD User.',
    stainlessPath: '(resource) gamertags > (method) create_charge',
    qualified: 'client.gamertags.createCharge',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'description?: string;',
      'expiresIn?: number;',
      'gamertag?: string;',
      'internalId?: string;',
    ],
    markdown:
      "## create_charge\n\n`client.gamertags.createCharge(amount?: string, callbackUrl?: string, description?: string, expiresIn?: number, gamertag?: string, internalId?: string): void`\n\n**post** `/v0/gamertag/charges`\n\nGenerate a payment request for a ZBD User.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Payment -> in millisatoshis\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `description?: string`\n  Note or comment for this Payment (visible to recipient)\n\n- `expiresIn?: number`\n  Time until Charge expiration -> in seconds\n\n- `gamertag?: string`\n  Destination ZBD Gamertag\n\n- `internalId?: string`\n  Open metadata string property\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.gamertags.createCharge()\n```",
  },
  {
    name: 'retrieve_by_gamertag',
    endpoint: '/v0/user-id/gamertag/{gamertag}',
    httpMethod: 'get',
    summary: 'Get ID by ZBD Gamertag',
    description: 'Retrieve Gamertag from a ZBD user ID.',
    stainlessPath: '(resource) gamertags > (method) retrieve_by_gamertag',
    qualified: 'client.gamertags.retrieveByGamertag',
    params: ['gamertag: string;'],
    markdown:
      "## retrieve_by_gamertag\n\n`client.gamertags.retrieveByGamertag(gamertag: string): void`\n\n**get** `/v0/user-id/gamertag/{gamertag}`\n\nRetrieve Gamertag from a ZBD user ID.\n\n### Parameters\n\n- `gamertag: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.gamertags.retrieveByGamertag('gamertag')\n```",
  },
  {
    name: 'retrieve_by_zbd_id',
    endpoint: '/v0/gamertag/user-id/{id}',
    httpMethod: 'get',
    summary: 'Get Gamertag By ZBD ID',
    description: 'Retrieve ZBD user ID from a Gamertag.',
    stainlessPath: '(resource) gamertags > (method) retrieve_by_zbd_id',
    qualified: 'client.gamertags.retrieveByZbdID',
    params: ['id: string;'],
    markdown:
      "## retrieve_by_zbd_id\n\n`client.gamertags.retrieveByZbdID(id: string): void`\n\n**get** `/v0/gamertag/user-id/{id}`\n\nRetrieve ZBD user ID from a Gamertag.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.gamertags.retrieveByZbdID('id')\n```",
  },
  {
    name: 'retrieve_payment',
    endpoint: '/v0/gamertag/transaction/{id}',
    httpMethod: 'get',
    summary: 'Get Payment',
    description: 'Retrieve all data about a Payment sent to ZBD User.',
    stainlessPath: '(resource) gamertags > (method) retrieve_payment',
    qualified: 'client.gamertags.retrievePayment',
    params: ['id: string;'],
    markdown:
      "## retrieve_payment\n\n`client.gamertags.retrievePayment(id: string): void`\n\n**get** `/v0/gamertag/transaction/{id}`\n\nRetrieve all data about a Payment sent to ZBD User.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.gamertags.retrievePayment('id')\n```",
  },
  {
    name: 'send_payment',
    endpoint: '/v0/gamertag/send-payment',
    httpMethod: 'post',
    summary: 'Pay to ZBD Gamertag',
    description: 'Send instant Bitcoin payments to ZBD Users.',
    stainlessPath: '(resource) gamertags > (method) send_payment',
    qualified: 'client.gamertags.sendPayment',
    params: ['amount?: string;', 'description?: string;', 'gamertag?: string;'],
    markdown:
      "## send_payment\n\n`client.gamertags.sendPayment(amount?: string, description?: string, gamertag?: string): void`\n\n**post** `/v0/gamertag/send-payment`\n\nSend instant Bitcoin payments to ZBD Users.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Payment -> in millisatoshis\n\n- `description?: string`\n  Note or comment for this Payment (visible to recipient)\n\n- `gamertag?: string`\n  Destination ZBD Gamertag\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.gamertags.sendPayment()\n```",
  },
  {
    name: 'create',
    endpoint: '/v0/charges',
    httpMethod: 'post',
    summary: 'Create Charge',
    description: 'Start receiving instant Bitcoin payments through the ZBD API.',
    stainlessPath: '(resource) lightning_charges > (method) create',
    qualified: 'client.lightningCharges.create',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'description?: string;',
      'expiresIn?: number;',
      'internalId?: string;',
    ],
    markdown:
      "## create\n\n`client.lightningCharges.create(amount?: string, callbackUrl?: string, description?: string, expiresIn?: number, internalId?: string): void`\n\n**post** `/v0/charges`\n\nStart receiving instant Bitcoin payments through the ZBD API.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Charge -> in millisatoshis\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `description?: string`\n  Note or comment for this Charge (visible to payer)\n\n- `expiresIn?: number`\n  Time until Charge expiration -> in seconds\n\n- `internalId?: string`\n  Open metadata string property\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningCharges.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/charges/{id}',
    httpMethod: 'get',
    summary: 'Get Charge',
    description: 'Retrieve all data about a single Charge.',
    stainlessPath: '(resource) lightning_charges > (method) retrieve',
    qualified: 'client.lightningCharges.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.lightningCharges.retrieve(id: string): void`\n\n**get** `/v0/charges/{id}`\n\nRetrieve all data about a single Charge.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningCharges.retrieve('id')\n```",
  },
  {
    name: 'initiate',
    endpoint: '/v0/internal-transfer',
    httpMethod: 'post',
    summary: 'Initiate Internal Transfer',
    description: 'Performs a transfer of funds between two Projects.',
    stainlessPath: '(resource) internal_transfer > (method) initiate',
    qualified: 'client.internalTransfer.initiate',
    params: ['amount?: string;', 'receiverWalletId?: string;'],
    markdown:
      "## initiate\n\n`client.internalTransfer.initiate(amount?: string, receiverWalletId?: string): void`\n\n**post** `/v0/internal-transfer`\n\nPerforms a transfer of funds between two Projects.\n\n### Parameters\n\n- `amount?: string`\n  The amount to be transferred -> in millisatoshis\n\n- `receiverWalletId?: string`\n  The Wallet ID of the recipient Project\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.internalTransfer.initiate()\n```",
  },
  {
    name: 'create_charge',
    endpoint: '/v0/ln-address/fetch-charge',
    httpMethod: 'post',
    summary: 'Create Charge',
    description: 'Generate a payment request for a Lightning Address.',
    stainlessPath: '(resource) lightning_address > (method) create_charge',
    qualified: 'client.lightningAddress.createCharge',
    params: ['amount?: string;', 'description?: string;', 'lnaddress?: string;'],
    markdown:
      "## create_charge\n\n`client.lightningAddress.createCharge(amount?: string, description?: string, lnaddress?: string): void`\n\n**post** `/v0/ln-address/fetch-charge`\n\nGenerate a payment request for a Lightning Address.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Charge -> in millisatoshis\n\n- `description?: string`\n  Note or comment of this Charge\n\n- `lnaddress?: string`\n  The Lightning Address of the intended recipient\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningAddress.createCharge()\n```",
  },
  {
    name: 'send_payment',
    endpoint: '/v0/ln-address/send-payment',
    httpMethod: 'post',
    summary: 'Pay to Lightning Address',
    description: 'Send instant Bitcoin payments to any Lightning Address.',
    stainlessPath: '(resource) lightning_address > (method) send_payment',
    qualified: 'client.lightningAddress.sendPayment',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'comment?: string;',
      'internalId?: string;',
      'lnAddress?: string;',
    ],
    markdown:
      "## send_payment\n\n`client.lightningAddress.sendPayment(amount?: string, callbackUrl?: string, comment?: string, internalId?: string, lnAddress?: string): void`\n\n**post** `/v0/ln-address/send-payment`\n\nSend instant Bitcoin payments to any Lightning Address.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Payment -> in millisatoshis\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `comment?: string`\n  Note or description of this Payment\n\n- `internalId?: string`\n  Open metadata string property\n\n- `lnAddress?: string`\n  The Lightning Address of the intended recipient (e.g. andre@zbd.gg)\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningAddress.sendPayment()\n```",
  },
  {
    name: 'validate',
    endpoint: '/v0/ln-address/validate/{address}',
    httpMethod: 'get',
    summary: 'Validate Lightning Address',
    description: 'Verify the validity of a Lightning Address.',
    stainlessPath: '(resource) lightning_address > (method) validate',
    qualified: 'client.lightningAddress.validate',
    params: ['address: string;'],
    markdown:
      "## validate\n\n`client.lightningAddress.validate(address: string): void`\n\n**get** `/v0/ln-address/validate/{address}`\n\nVerify the validity of a Lightning Address.\n\n### Parameters\n\n- `address: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningAddress.validate('address')\n```",
  },
  {
    name: 'create',
    endpoint: '/v0/static-charges',
    httpMethod: 'post',
    summary: 'Create Static Charge',
    description: 'Start accepting payments on Lightning with Static QR codes.',
    stainlessPath: '(resource) lightning_static_charges > (method) create',
    qualified: 'client.lightningStaticCharges.create',
    params: [
      'allowedSlots?: number;',
      'callbackUrl?: string;',
      'description?: string;',
      'identifier?: string;',
      'internalId?: string;',
      'maxAmount?: string;',
      'minAmount?: string;',
      'successMessage?: string;',
    ],
    markdown:
      "## create\n\n`client.lightningStaticCharges.create(allowedSlots?: number, callbackUrl?: string, description?: string, identifier?: string, internalId?: string, maxAmount?: string, minAmount?: string, successMessage?: string): void`\n\n**post** `/v0/static-charges`\n\nStart accepting payments on Lightning with Static QR codes.\n\n### Parameters\n\n- `allowedSlots?: number`\n  Number of payments this Static Charge can accept\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `description?: string`\n  Note or comment for this Static Charge (visible to payer)\n\n- `identifier?: string`\n  Used for Custom Lightning Addresses (see guide)\n\n- `internalId?: string`\n  Open metadata string property\n\n- `maxAmount?: string`\n  Maximum allowed amount for the Static Charge -> in millisatoshis\n\n- `minAmount?: string`\n  Minimum allowed amount for the Static Charge -> in millisatoshis\n\n- `successMessage?: string`\n  Message displayed to the payer AFTER payment settles. Maximum of 144 characters.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningStaticCharges.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/static-charges/{id}',
    httpMethod: 'get',
    summary: 'Get Static Charge',
    description: 'Retrieve all data about a single Static Charge.',
    stainlessPath: '(resource) lightning_static_charges > (method) retrieve',
    qualified: 'client.lightningStaticCharges.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.lightningStaticCharges.retrieve(id: string): void`\n\n**get** `/v0/static-charges/{id}`\n\nRetrieve all data about a single Static Charge.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningStaticCharges.retrieve('id')\n```",
  },
  {
    name: 'update',
    endpoint: '/v0/static-charges/{id}',
    httpMethod: 'patch',
    summary: 'Update Static Charge',
    description: 'Change the configuration of a Static Charge QR code.',
    stainlessPath: '(resource) lightning_static_charges > (method) update',
    qualified: 'client.lightningStaticCharges.update',
    params: [
      'id: string;',
      'allowedSlots?: number;',
      'callbackUrl?: string;',
      'description?: string;',
      'internalId?: string;',
      'maxAmount?: string;',
      'minAmount?: string;',
      'successMessage?: string;',
    ],
    markdown:
      "## update\n\n`client.lightningStaticCharges.update(id: string, allowedSlots?: number, callbackUrl?: string, description?: string, internalId?: string, maxAmount?: string, minAmount?: string, successMessage?: string): void`\n\n**patch** `/v0/static-charges/{id}`\n\nChange the configuration of a Static Charge QR code.\n\n### Parameters\n\n- `id: string`\n\n- `allowedSlots?: number`\n  Number of payments this Static Charge can accept\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `description?: string`\n  Note or comment for this Static Charge (visible to payer)\n\n- `internalId?: string`\n  Open metadata string property\n\n- `maxAmount?: string`\n  Maximum allowed amount for the Static Charge -> in millisatoshis\n\n- `minAmount?: string`\n  Minimum allowed amount for the Static Charge -> in millisatoshis\n\n- `successMessage?: string`\n  Message displayed to the payer AFTER payment settles\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningStaticCharges.update('id')\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/create-voucher',
    httpMethod: 'post',
    summary: 'Create Voucher',
    description: 'Create Voucher',
    stainlessPath: '(resource) vouchers > (method) create',
    qualified: 'client.vouchers.create',
    params: ['amount?: string;', 'description?: string;'],
    markdown:
      "## create\n\n`client.vouchers.create(amount?: string, description?: string): void`\n\n**post** `/v1/create-voucher`\n\nCreate Voucher\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Charge -> in millisatoshis\n\n- `description?: string`\n  Note or comment for this Charge (visible to payer)\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.vouchers.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/vouchers/{id}',
    httpMethod: 'get',
    summary: 'Get Voucher',
    description: 'Get Voucher',
    stainlessPath: '(resource) vouchers > (method) retrieve',
    qualified: 'client.vouchers.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.vouchers.retrieve(id: string): void`\n\n**get** `/v0/vouchers/{id}`\n\nGet Voucher\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.vouchers.retrieve('id')\n```",
  },
  {
    name: 'redeem',
    endpoint: '/v0/redeem-voucher',
    httpMethod: 'post',
    summary: 'Redeem Voucher',
    description: 'Redeem Voucher',
    stainlessPath: '(resource) vouchers > (method) redeem',
    qualified: 'client.vouchers.redeem',
    params: ['code?: string;'],
    markdown:
      "## redeem\n\n`client.vouchers.redeem(code?: string): void`\n\n**post** `/v0/redeem-voucher`\n\nRedeem Voucher\n\n### Parameters\n\n- `code?: string`\n  Valid 8-digit ZBD Voucher Code\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.vouchers.redeem()\n```",
  },
  {
    name: 'revoke',
    endpoint: '/v0/revoke-voucher',
    httpMethod: 'post',
    summary: 'Revoke Voucher',
    description: 'Revoke Voucher',
    stainlessPath: '(resource) vouchers > (method) revoke',
    qualified: 'client.vouchers.revoke',
    params: ['code?: string;'],
    markdown:
      "## revoke\n\n`client.vouchers.revoke(code?: string): void`\n\n**post** `/v0/revoke-voucher`\n\nRevoke Voucher\n\n### Parameters\n\n- `code?: string`\n  Valid 8-digit ZBD Voucher Code\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.vouchers.revoke()\n```",
  },
  {
    name: 'create',
    endpoint: '/v0/withdrawal-requests',
    httpMethod: 'post',
    summary: 'Create Withdrawal Request',
    description: 'Start creating Bitcoin voucher QR codes.',
    stainlessPath: '(resource) withdrawal_requests > (method) create',
    qualified: 'client.withdrawalRequests.create',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'description?: string;',
      'expiresIn?: number;',
      'internalId?: string;',
    ],
    markdown:
      "## create\n\n`client.withdrawalRequests.create(amount?: string, callbackUrl?: string, description?: string, expiresIn?: number, internalId?: string): void`\n\n**post** `/v0/withdrawal-requests`\n\nStart creating Bitcoin voucher QR codes.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Withdrawal Request -> in millisatoshis\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Charge updates to\n\n- `description?: string`\n  Note or comment for this Withdrawal Request\n\n- `expiresIn?: number`\n  Time until Withdrawal Request expiration -> in seconds\n\n- `internalId?: string`\n  Open metadata string property\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.withdrawalRequests.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/withdrawal-requests/{id}',
    httpMethod: 'get',
    summary: 'Get Withdrawal Request',
    description: 'Retrieve all data about a single Withdrawal Request.',
    stainlessPath: '(resource) withdrawal_requests > (method) retrieve',
    qualified: 'client.withdrawalRequests.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.withdrawalRequests.retrieve(id: string): void`\n\n**get** `/v0/withdrawal-requests/{id}`\n\nRetrieve all data about a single Withdrawal Request.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.withdrawalRequests.retrieve('id')\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v0/payments/{id}',
    httpMethod: 'get',
    summary: 'Get Payment',
    description: 'Retrieve all data about a single Payment.',
    stainlessPath: '(resource) lightning_payments > (method) retrieve',
    qualified: 'client.lightningPayments.retrieve',
    params: ['id: string;'],
    markdown:
      "## retrieve\n\n`client.lightningPayments.retrieve(id: string): void`\n\n**get** `/v0/payments/{id}`\n\nRetrieve all data about a single Payment.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningPayments.retrieve('id')\n```",
  },
  {
    name: 'send',
    endpoint: '/v0/payments',
    httpMethod: 'post',
    summary: 'Send Payment',
    description: 'Start sending instant Bitcoin payments through the ZBD API.',
    stainlessPath: '(resource) lightning_payments > (method) send',
    qualified: 'client.lightningPayments.send',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'description?: string;',
      'internalId?: string;',
      'invoice?: string;',
    ],
    markdown:
      "## send\n\n`client.lightningPayments.send(amount?: string, callbackUrl?: string, description?: string, internalId?: string, invoice?: string): void`\n\n**post** `/v0/payments`\n\nStart sending instant Bitcoin payments through the ZBD API.\n\n### Parameters\n\n- `amount?: string`\n  Amount to be paid to this Charge/Invoice -> in millisatoshis *(only valid if Amountless Invoice)*\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Payment updates to\n\n- `description?: string`\n  Note or comment for this Payment\n\n- `internalId?: string`\n  Open metadata string property\n\n- `invoice?: string`\n  Lightning Network Payment Request / Charge\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.lightningPayments.send()\n```",
  },
  {
    name: 'retrieve_balance',
    endpoint: '/v0/wallet',
    httpMethod: 'get',
    summary: 'Get Wallet',
    description: "Retrieve all data about a ZBD Project's Wallet.",
    stainlessPath: '(resource) wallet > (method) retrieve_balance',
    qualified: 'client.wallet.retrieveBalance',
    markdown:
      "## retrieve_balance\n\n`client.wallet.retrieveBalance(): void`\n\n**get** `/v0/wallet`\n\nRetrieve all data about a ZBD Project's Wallet.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.wallet.retrieveBalance()\n```",
  },
  {
    name: 'check_ip_support',
    endpoint: '/v0/is-supported-region/{ip}',
    httpMethod: 'get',
    summary: 'API Supported Regions',
    description: 'Verify if a user is coming from a supported region.',
    stainlessPath: '(resource) utils > (method) check_ip_support',
    qualified: 'client.utils.checkIPSupport',
    params: ['ip: string;'],
    markdown:
      "## check_ip_support\n\n`client.utils.checkIPSupport(ip: string): void`\n\n**get** `/v0/is-supported-region/{ip}`\n\nVerify if a user is coming from a supported region.\n\n### Parameters\n\n- `ip: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.utils.checkIPSupport('ip')\n```",
  },
  {
    name: 'decode_lightning_charge',
    endpoint: '/v0/decode-invoice',
    httpMethod: 'post',
    summary: 'Decode Charge',
    description: 'Understand the inner properties of a Charge QR code.',
    stainlessPath: '(resource) utils > (method) decode_lightning_charge',
    qualified: 'client.utils.decodeLightningCharge',
    params: ['invoice?: string;'],
    markdown:
      "## decode_lightning_charge\n\n`client.utils.decodeLightningCharge(invoice?: string): void`\n\n**post** `/v0/decode-invoice`\n\nUnderstand the inner properties of a Charge QR code.\n\n### Parameters\n\n- `invoice?: string`\n  The Charge or Invoice QR code contents\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.utils.decodeLightningCharge()\n```",
  },
  {
    name: 'list_prod_ips',
    endpoint: '/v0/prod-ips',
    httpMethod: 'get',
    summary: 'ZBD IP Address',
    description: 'Get the official IP addresses of ZBD servers.',
    stainlessPath: '(resource) utils > (method) list_prod_ips',
    qualified: 'client.utils.listProdIPs',
    markdown:
      "## list_prod_ips\n\n`client.utils.listProdIPs(): void`\n\n**get** `/v0/prod-ips`\n\nGet the official IP addresses of ZBD servers.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.utils.listProdIPs()\n```",
  },
  {
    name: 'retrieve_btc_usd',
    endpoint: '/v0/btcusd',
    httpMethod: 'get',
    summary: 'BTC USD Price Feed',
    description: 'Get the latest price for Bitcoin in US Dollars.',
    stainlessPath: '(resource) utils > (method) retrieve_btc_usd',
    qualified: 'client.utils.retrieveBtcUsd',
    markdown:
      "## retrieve_btc_usd\n\n`client.utils.retrieveBtcUsd(): void`\n\n**get** `/v0/btcusd`\n\nGet the latest price for Bitcoin in US Dollars.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.utils.retrieveBtcUsd()\n```",
  },
  {
    name: 'create_authorization_url',
    endpoint: '/v1/oauth2/authorize',
    httpMethod: 'get',
    summary: 'Authorization',
    description: 'Create an authorization URL for ZBD Login.',
    stainlessPath: '(resource) oauth2 > (method) create_authorization_url',
    qualified: 'client.oauth2.createAuthorizationURL',
    markdown:
      "## create_authorization_url\n\n`client.oauth2.createAuthorizationURL(): void`\n\n**get** `/v1/oauth2/authorize`\n\nCreate an authorization URL for ZBD Login.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.createAuthorizationURL()\n```",
  },
  {
    name: 'refresh_token',
    endpoint: '/v1/oauth2/token',
    httpMethod: 'post',
    summary: 'Refresh Token',
    description: 'Generate a new accessToken for a ZBD Login user.',
    stainlessPath: '(resource) oauth2 > (method) refresh_token',
    qualified: 'client.oauth2.refreshToken',
    markdown:
      "## refresh_token\n\n`client.oauth2.refreshToken(): void`\n\n**post** `/v1/oauth2/token`\n\nGenerate a new accessToken for a ZBD Login user.\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.refreshToken()\n```",
  },
  {
    name: 'retrieve_user_data',
    endpoint: '/v1/oauth2/user',
    httpMethod: 'get',
    summary: 'Get User Data',
    description: 'Fetch user-related information about a logged-in ZBD User.',
    stainlessPath: '(resource) oauth2 > (method) retrieve_user_data',
    qualified: 'client.oauth2.retrieveUserData',
    params: ['usertoken?: string;'],
    markdown:
      "## retrieve_user_data\n\n`client.oauth2.retrieveUserData(usertoken?: string): void`\n\n**get** `/v1/oauth2/user`\n\nFetch user-related information about a logged-in ZBD User.\n\n### Parameters\n\n- `usertoken?: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.retrieveUserData()\n```",
  },
  {
    name: 'retrieve_wallet_data',
    endpoint: '/v1/oauth2/wallet',
    httpMethod: 'get',
    summary: 'Get Wallet Data',
    description: 'Fetch wallet-related information about a logged-in ZBD User.',
    stainlessPath: '(resource) oauth2 > (method) retrieve_wallet_data',
    qualified: 'client.oauth2.retrieveWalletData',
    params: ['usertoken?: string;'],
    markdown:
      "## retrieve_wallet_data\n\n`client.oauth2.retrieveWalletData(usertoken?: string): void`\n\n**get** `/v1/oauth2/wallet`\n\nFetch wallet-related information about a logged-in ZBD User.\n\n### Parameters\n\n- `usertoken?: string`\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.retrieveWalletData()\n```",
  },
  {
    name: 'send',
    endpoint: '/v0/keysend-payment',
    httpMethod: 'post',
    summary: 'Send Keysend Payment',
    description: 'Start sending Keysend payments on the Lightning Network.',
    stainlessPath: '(resource) keysend_payments > (method) send',
    qualified: 'client.keysendPayments.send',
    params: [
      'amount?: string;',
      'callbackUrl?: string;',
      'metadata?: object;',
      'pubkey?: string;',
      'tlvRecords?: string[];',
      'value?: string;',
    ],
    markdown:
      '## send\n\n`client.keysendPayments.send(amount?: string, callbackUrl?: string, metadata?: object, pubkey?: string, tlvRecords?: string[], value?: string): void`\n\n**post** `/v0/keysend-payment`\n\nStart sending Keysend payments on the Lightning Network.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Payment -> in millisatoshis\n\n- `callbackUrl?: string`\n  The endpoint ZBD will POST Keysend Payment updates to\n\n- `metadata?: object`\n  Open metadata object property\n\n- `pubkey?: string`\n  The Public Key for the destination Lightning node\n\n- `tlvRecords?: string[]`\n  List of TLV records\n  <Expandable title="tlvRecord" defaultOpen>\n    <ParamField body="type" type="number" initialValue={123456}>\n      type of the TLV record\n\n- `value?: string`\n  value of the TLV record (hex encoded string)\n\n### Example\n\n```typescript\nimport ZbdPayments from \'@zbdpay/payments-sdk\';\n\nconst client = new ZbdPayments();\n\nawait client.keysendPayments.send()\n```',
  },
  {
    name: 'send',
    endpoint: '/v0/email/send-payment',
    httpMethod: 'post',
    summary: 'Pay to Email',
    description: 'Send instant Bitcoin payments to any email.',
    stainlessPath: '(resource) email_payments > (method) send',
    qualified: 'client.emailPayments.send',
    params: ['amount?: string;', 'comment?: string;', 'email?: string;'],
    markdown:
      "## send\n\n`client.emailPayments.send(amount?: string, comment?: string, email?: string): void`\n\n**post** `/v0/email/send-payment`\n\nSend instant Bitcoin payments to any email.\n\n### Parameters\n\n- `amount?: string`\n  The amount for the Payment -> in millisatoshis\n\n- `comment?: string`\n  Note / description of this Payment (may be shown to recipient)\n\n- `email?: string`\n  The Email of the intended recipient (e.g. info@zebedee.io)\n\n### Example\n\n```typescript\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.emailPayments.send()\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
