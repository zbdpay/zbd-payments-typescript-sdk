// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/gamertag/transaction/{id}',
  operationId: 'get_v0_gamertag_transaction_id',
};

export const tool: Tool = {
  name: 'retrieve_payment_gamertags',
  description: 'Retrieve all data about a Payment sent to ZBD User.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.gamertags.retrievePayment(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
