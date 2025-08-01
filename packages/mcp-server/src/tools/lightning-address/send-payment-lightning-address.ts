// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_address',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/ln-address/send-payment',
  operationId: 'post_v0_ln-address_send-payment',
};

export const tool: Tool = {
  name: 'send_payment_lightning_address',
  description: 'Send instant Bitcoin payments to any Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      comment: {
        type: 'string',
        description: 'Note or description of this Payment',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      lnAddress: {
        type: 'string',
        description: 'The Lightning Address of the intended recipient (e.g. andre@zbd.gg)',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.lightningAddress.sendPayment(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
