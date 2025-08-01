// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/oauth2/token',
  operationId: 'post_v1_oauth2_token',
};

export const tool: Tool = {
  name: 'refresh_token_oauth2',
  description: 'Generate a new accessToken for a ZBD Login user.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const response = await client.oauth2.refreshToken().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
