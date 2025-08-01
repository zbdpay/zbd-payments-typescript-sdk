// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'wallet',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/wallet',
  operationId: 'get_v0_wallet',
};

export const tool: Tool = {
  name: 'retrieve_balance_wallet',
  description: "Retrieve all data about a ZBD Project's Wallet.",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const response = await client.wallet.retrieveBalance().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
