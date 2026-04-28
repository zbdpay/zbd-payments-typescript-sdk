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
    perLanguage: {
      typescript: {
        method: 'client.gamertags.createCharge',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.gamertags.createCharge({\n  amount: 'string',\n  callbackUrl: 'string',\n  description: 'string',\n  expiresIn: NaN,\n  gamertag: 'string',\n  internalId: 'string',\n});",
      },
      python: {
        method: 'gamertags.create_charge',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.gamertags.create_charge(\n    amount="string",\n    callback_url="string",\n    description="string",\n    expires_in=NaN,\n    gamertag="string",\n    internal_id="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/gamertag/charges \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.gamertags.retrieveByZbdID',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.gamertags.retrieveByZbdID('id');",
      },
      python: {
        method: 'gamertags.retrieve_by_zbd_id',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.gamertags.retrieve_by_zbd_id(\n    "id",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/gamertag/user-id/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.gamertags.retrievePayment',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.gamertags.retrievePayment('id');",
      },
      python: {
        method: 'gamertags.retrieve_payment',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.gamertags.retrieve_payment(\n    "id",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/gamertag/transaction/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.gamertags.sendPayment',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.gamertags.sendPayment({\n  amount: 'string',\n  description: 'string',\n  gamertag: 'string',\n});",
      },
      python: {
        method: 'gamertags.send_payment',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.gamertags.send_payment(\n    amount="string",\n    description="string",\n    gamertag="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/gamertag/send-payment \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.gamertags.retrieveByGamertag',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.gamertags.retrieveByGamertag('gamertag');",
      },
      python: {
        method: 'gamertags.retrieve_by_gamertag',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.gamertags.retrieve_by_gamertag(\n    "gamertag",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/user-id/gamertag/$GAMERTAG \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningCharges.create',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningCharges.create({\n  amount: 'string',\n  callbackUrl: 'string',\n  description: 'string',\n  expiresIn: NaN,\n  internalId: 'string',\n});",
      },
      python: {
        method: 'lightning_charges.create',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_charges.create(\n    amount="string",\n    callback_url="string",\n    description="string",\n    expires_in=NaN,\n    internal_id="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/charges \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningCharges.retrieve',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningCharges.retrieve('id');",
      },
      python: {
        method: 'lightning_charges.retrieve',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_charges.retrieve(\n    "id",\n)',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/charges/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.internalTransfer.initiate',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.internalTransfer.initiate({ amount: 'string', receiverWalletId: 'string' });",
      },
      python: {
        method: 'internal_transfer.initiate',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.internal_transfer.initiate(\n    amount="string",\n    receiver_wallet_id="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/internal-transfer \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningAddress.createCharge',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningAddress.createCharge({\n  amount: 'string',\n  description: 'string',\n  lnaddress: 'string',\n});",
      },
      python: {
        method: 'lightning_address.create_charge',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_address.create_charge(\n    amount="string",\n    description="string",\n    lnaddress="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/ln-address/fetch-charge \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningAddress.sendPayment',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningAddress.sendPayment({\n  amount: 'string',\n  callbackUrl: 'string',\n  comment: 'string',\n  internalId: 'string',\n  lnAddress: 'string',\n});",
      },
      python: {
        method: 'lightning_address.send_payment',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_address.send_payment(\n    amount="string",\n    callback_url="string",\n    comment="string",\n    internal_id="string",\n    ln_address="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/ln-address/send-payment \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningAddress.validate',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningAddress.validate('address');",
      },
      python: {
        method: 'lightning_address.validate',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_address.validate(\n    "address",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/ln-address/validate/$ADDRESS \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningStaticCharges.create',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningStaticCharges.create({\n  allowedSlots: 123,\n  callbackUrl: 'string',\n  description: 'string',\n  identifier: 'string',\n  internalId: 'string',\n  maxAmount: 'string',\n  minAmount: 'string',\n  successMessage: 'string',\n});",
      },
      python: {
        method: 'lightning_static_charges.create',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_static_charges.create(\n    allowed_slots=123,\n    callback_url="string",\n    description="string",\n    identifier="string",\n    internal_id="string",\n    max_amount="string",\n    min_amount="string",\n    success_message="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/static-charges \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningStaticCharges.retrieve',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningStaticCharges.retrieve('id');",
      },
      python: {
        method: 'lightning_static_charges.retrieve',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_static_charges.retrieve(\n    "id",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/static-charges/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningStaticCharges.update',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningStaticCharges.update('id', {\n  allowedSlots: 123,\n  callbackUrl: 'string',\n  description: 'string',\n  internalId: 'string',\n  maxAmount: 'string',\n  minAmount: 'string',\n  successMessage: 'string',\n});",
      },
      python: {
        method: 'lightning_static_charges.update',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_static_charges.update(\n    id="id",\n    allowed_slots=123,\n    callback_url="string",\n    description="string",\n    internal_id="string",\n    max_amount="string",\n    min_amount="string",\n    success_message="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/static-charges/$ID \\\n    -X PATCH \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.vouchers.create',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.vouchers.create({ amount: 'string', description: 'string' });",
      },
      python: {
        method: 'vouchers.create',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.vouchers.create(\n    amount="string",\n    description="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v1/create-voucher \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.vouchers.retrieve',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.vouchers.retrieve('id');",
      },
      python: {
        method: 'vouchers.retrieve',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.vouchers.retrieve(\n    "id",\n)',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/vouchers/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.vouchers.redeem',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.vouchers.redeem({ code: 'string' });",
      },
      python: {
        method: 'vouchers.redeem',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.vouchers.redeem(\n    code="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/redeem-voucher \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.vouchers.revoke',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.vouchers.revoke({ code: 'string' });",
      },
      python: {
        method: 'vouchers.revoke',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.vouchers.revoke(\n    code="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/revoke-voucher \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.withdrawalRequests.create',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.withdrawalRequests.create({\n  amount: 'string',\n  callbackUrl: 'string',\n  description: 'string',\n  expiresIn: NaN,\n  internalId: 'string',\n});",
      },
      python: {
        method: 'withdrawal_requests.create',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.withdrawal_requests.create(\n    amount="string",\n    callback_url="string",\n    description="string",\n    expires_in=NaN,\n    internal_id="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/withdrawal-requests \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.withdrawalRequests.retrieve',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.withdrawalRequests.retrieve('id');",
      },
      python: {
        method: 'withdrawal_requests.retrieve',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.withdrawal_requests.retrieve(\n    "id",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/withdrawal-requests/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningPayments.retrieve',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningPayments.retrieve('id');",
      },
      python: {
        method: 'lightning_payments.retrieve',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_payments.retrieve(\n    "id",\n)',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/payments/$ID \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.lightningPayments.send',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningPayments.send({\n  amount: 'string',\n  callbackUrl: 'string',\n  description: 'string',\n  internalId: 'string',\n  invoice: 'string',\n});",
      },
      python: {
        method: 'lightning_payments.send',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.lightning_payments.send(\n    amount="string",\n    callback_url="string",\n    description="string",\n    internal_id="string",\n    invoice="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/payments \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.wallet.retrieveBalance',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.wallet.retrieveBalance();",
      },
      python: {
        method: 'wallet.retrieve_balance',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.wallet.retrieve_balance()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/wallet \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.utils.listProdIPs',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.utils.listProdIPs();",
      },
      python: {
        method: 'utils.list_prod_ips',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.utils.list_prod_ips()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/prod-ips \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.utils.checkIPSupport',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.utils.checkIPSupport('ip');",
      },
      python: {
        method: 'utils.check_ip_support',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.utils.check_ip_support(\n    "ip",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/is-supported-region/$IP \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.utils.retrieveBtcUsd',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.utils.retrieveBtcUsd();",
      },
      python: {
        method: 'utils.retrieve_btc_usd',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.utils.retrieve_btc_usd()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v0/btcusd \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.utils.decodeLightningCharge',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.utils.decodeLightningCharge({ invoice: 'string' });",
      },
      python: {
        method: 'utils.decode_lightning_charge',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.utils.decode_lightning_charge(\n    invoice="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/decode-invoice \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.oauth2.createAuthorizationURL',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.createAuthorizationURL();",
      },
      python: {
        method: 'oauth2.create_authorization_url',
        example:
          'from zbdpay import ZbdPayments\n\nclient = ZbdPayments()\nclient.oauth2.create_authorization_url()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v1/oauth2/authorize',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.oauth2.refreshToken',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.refreshToken();",
      },
      python: {
        method: 'oauth2.refresh_token',
        example: 'from zbdpay import ZbdPayments\n\nclient = ZbdPayments()\nclient.oauth2.refresh_token()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v1/oauth2/token \\\n    -X POST',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.oauth2.retrieveUserData',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.retrieveUserData();",
      },
      python: {
        method: 'oauth2.retrieve_user_data',
        example:
          'from zbdpay import ZbdPayments\n\nclient = ZbdPayments()\nclient.oauth2.retrieve_user_data()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v1/oauth2/user',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.oauth2.retrieveWalletData',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments();\n\nawait client.oauth2.retrieveWalletData();",
      },
      python: {
        method: 'oauth2.retrieve_wallet_data',
        example:
          'from zbdpay import ZbdPayments\n\nclient = ZbdPayments()\nclient.oauth2.retrieve_wallet_data()',
      },
      http: {
        example: 'curl https://api.zebedee.io/v1/oauth2/wallet',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.keysendPayments.send',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.keysendPayments.send({\n  amount: 'string',\n  callbackUrl: 'string',\n  metadata: true,\n  pubkey: 'string',\n  tlvRecords: null,\n  value: 'myTLVRecordValue',\n});",
      },
      python: {
        method: 'keysend_payments.send',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.keysend_payments.send(\n    amount="string",\n    callback_url="string",\n    metadata=True,\n    pubkey="string",\n    tlv_records=None,\n    value="myTLVRecordValue",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/keysend-payment \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.emailPayments.send',
        example:
          "import ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.emailPayments.send({\n  amount: 'string',\n  comment: 'string',\n  email: 'string',\n});",
      },
      python: {
        method: 'email_payments.send',
        example:
          'import os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.email_payments.send(\n    amount="string",\n    comment="string",\n    email="string",\n)',
      },
      http: {
        example:
          'curl https://api.zebedee.io/v0/email/send-payment \\\n    -X POST \\\n    -H "apikey: $ZBD_PAYMENTS_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Zbd Payments Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/zbdpay.svg?label=pypi%20(stable))](https://pypi.org/project/zbdpay/)\n\nThe Zbd Payments Python library provides convenient access to the Zbd Payments REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\n\n\n## MCP Server\n\nUse the Zbd Payments MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40zbdpay%2Fpayments-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB6YmRwYXkvcGF5bWVudHMtc2RrLW1jcCJdLCJlbnYiOnsiWkJEX1BBWU1FTlRTX0FQSV9LRVkiOiJNeSBBcGlrZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40zbdpay%2Fpayments-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40zbdpay%2Fpayments-sdk-mcp%22%5D%2C%22env%22%3A%7B%22ZBD_PAYMENTS_API_KEY%22%3A%22My%20Apikey%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.zbdpay.com](https://docs.zbdpay.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install zbdpay\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\n\nclient.lightning_address.send_payment(\n    amount="500000",\n    comment="Instant global payments",\n    ln_address="andreneves@zbd.gg",\n)\n```\n\nWhile you can provide a `apikey` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `ZBD_PAYMENTS_API_KEY="My Apikey"` to your `.env` file\nso that your Apikey is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncZbdPayments` instead of `ZbdPayments` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom zbdpay import AsyncZbdPayments\n\nclient = AsyncZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  await client.lightning_address.send_payment(\n      amount="500000",\n      comment="Instant global payments",\n      ln_address="andreneves@zbd.gg",\n  )\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install zbdpay[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom zbdpay import DefaultAioHttpClient\nfrom zbdpay import AsyncZbdPayments\n\nasync def main() -> None:\n  async with AsyncZbdPayments(\n    apikey=os.environ.get("ZBD_PAYMENTS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    await client.lightning_address.send_payment(\n        amount="500000",\n        comment="Instant global payments",\n        ln_address="andreneves@zbd.gg",\n    )\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `zbdpay.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `zbdpay.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `zbdpay.APIError`.\n\n```python\nimport zbdpay\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments()\n\ntry:\n    client.lightning_address.send_payment(\n        amount="500000",\n        comment="Instant global payments",\n        ln_address="andreneves@zbd.gg",\n    )\nexcept zbdpay.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept zbdpay.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept zbdpay.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom zbdpay import ZbdPayments\n\n# Configure the default for all requests:\nclient = ZbdPayments(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).lightning_address.send_payment(\n    amount="500000",\n    comment="Instant global payments",\n    ln_address="andreneves@zbd.gg",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom zbdpay import ZbdPayments\n\n# Configure the default for all requests:\nclient = ZbdPayments(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = ZbdPayments(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).lightning_address.send_payment(\n    amount="500000",\n    comment="Instant global payments",\n    ln_address="andreneves@zbd.gg",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `ZBD_PAYMENTS_LOG` to `info`.\n\n```shell\n$ export ZBD_PAYMENTS_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom zbdpay import ZbdPayments\n\nclient = ZbdPayments()\nresponse = client.lightning_address.with_raw_response.send_payment(\n    amount="500000",\n    comment="Instant global payments",\n    ln_address="andreneves@zbd.gg",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nlightning_address = response.parse()  # get the object that `lightning_address.send_payment()` would have returned\nprint(lightning_address)\n```\n\nThese methods return an [`APIResponse`](https://github.com/zbdpay/zbd-payments-python-sdk/tree/main/src/zbdpay/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/zbdpay/zbd-payments-python-sdk/tree/main/src/zbdpay/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.lightning_address.with_streaming_response.send_payment(\n    amount="500000",\n    comment="Instant global payments",\n    ln_address="andreneves@zbd.gg",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom zbdpay import ZbdPayments, DefaultHttpxClient\n\nclient = ZbdPayments(\n    # Or use the `ZBD_PAYMENTS_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom zbdpay import ZbdPayments\n\nwith ZbdPayments() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/zbdpay/zbd-payments-python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport zbdpay\nprint(zbdpay.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Zbd Payments TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@zbdpay/payments-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@zbdpay/payments-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@zbdpay/payments-sdk)\n\nThis library provides convenient access to the Zbd Payments REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.zbdpay.com](https://docs.zbdpay.com). The full API of this library can be found in [api.md](api.md).\n\n\n\n## MCP Server\n\nUse the Zbd Payments MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40zbdpay%2Fpayments-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB6YmRwYXkvcGF5bWVudHMtc2RrLW1jcCJdLCJlbnYiOnsiWkJEX1BBWU1FTlRTX0FQSV9LRVkiOiJNeSBBcGlrZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40zbdpay%2Fpayments-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40zbdpay%2Fpayments-sdk-mcp%22%5D%2C%22env%22%3A%7B%22ZBD_PAYMENTS_API_KEY%22%3A%22My%20Apikey%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @zbdpay/payments-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.lightningAddress.sendPayment({\n  amount: '500000',\n  comment: 'Instant global payments',\n  lnAddress: 'andreneves@zbd.gg',\n});\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  apikey: process.env['ZBD_PAYMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: ZbdPayments.LightningAddressSendPaymentParams = {\n  amount: '500000',\n  comment: 'Instant global payments',\n  lnAddress: 'andreneves@zbd.gg',\n};\nawait client.lightningAddress.sendPayment(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.lightningAddress\n  .sendPayment({\n    amount: '500000',\n    comment: 'Instant global payments',\n    lnAddress: 'andreneves@zbd.gg',\n  })\n  .catch(async (err) => {\n    if (err instanceof ZbdPayments.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new ZbdPayments({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.lightningAddress.sendPayment({\n  amount: '500000',\n  comment: 'Instant global payments',\n  lnAddress: 'andreneves@zbd.gg',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new ZbdPayments({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.lightningAddress.sendPayment({\n  amount: '500000',\n  comment: 'Instant global payments',\n  lnAddress: 'andreneves@zbd.gg',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new ZbdPayments();\n\nconst response = await client.lightningAddress\n  .sendPayment({\n    amount: '500000',\n    comment: 'Instant global payments',\n    lnAddress: 'andreneves@zbd.gg',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: result, response: raw } = await client.lightningAddress\n  .sendPayment({\n    amount: '500000',\n    comment: 'Instant global payments',\n    lnAddress: 'andreneves@zbd.gg',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(result);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `ZBD_PAYMENTS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new ZbdPayments({\n  logger: logger.child({ name: 'ZbdPayments' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.lightningAddress.sendPayment({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new ZbdPayments({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new ZbdPayments({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport ZbdPayments from '@zbdpay/payments-sdk';\n\nconst client = new ZbdPayments({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport ZbdPayments from 'npm:@zbdpay/payments-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new ZbdPayments({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/zbdpay/zbd-payments-typescript-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

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
