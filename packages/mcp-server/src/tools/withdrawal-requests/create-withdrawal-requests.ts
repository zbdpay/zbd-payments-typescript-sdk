// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'withdrawal_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/withdrawal-requests',
  operationId: 'post_v0_withdrawal-requests',
};

export const tool: Tool = {
  name: 'create_withdrawal_requests',
  description: 'Start creating Bitcoin voucher QR codes.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Withdrawal Request -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Withdrawal Request',
      },
      expiresIn: {
        type: 'number',
        description: 'Time until Withdrawal Request expiration -> in seconds',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.withdrawalRequests.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
