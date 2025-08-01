// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/gamertag/send-payment',
  operationId: 'post_v0_gamertag_send-payment',
};

export const tool: Tool = {
  name: 'send_payment_gamertags',
  description: 'Send instant Bitcoin payments to ZBD Users.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Payment (visible to recipient)',
      },
      gamertag: {
        type: 'string',
        description: 'Destination ZBD Gamertag',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.gamertags.sendPayment(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
