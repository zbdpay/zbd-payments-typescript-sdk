// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/payments',
  operationId: 'post_v0_payments',
};

export const tool: Tool = {
  name: 'send_lightning_payments',
  description: 'Start sending instant Bitcoin payments through the ZBD API.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description:
          'Amount to be paid to this Charge/Invoice -> in millisatoshis *(only valid if Amountless Invoice)*',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Payment updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Payment',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      invoice: {
        type: 'string',
        description: 'Lightning Network Payment Request / Charge',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.lightningPayments.send(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
