// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/oauth2/wallet',
  operationId: 'get_v1_oauth2_wallet',
};

export const tool: Tool = {
  name: 'retrieve_wallet_data_oauth2',
  description: 'Fetch wallet-related information about a logged-in ZBD User.',
  inputSchema: {
    type: 'object',
    properties: {
      usertoken: {
        type: 'string',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oauth2.retrieveWalletData(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
