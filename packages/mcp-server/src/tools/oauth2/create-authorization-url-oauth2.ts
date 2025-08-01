// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'oauth2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/oauth2/authorize',
  operationId: 'get_v1_oauth2_authorize',
};

export const tool: Tool = {
  name: 'create_authorization_url_oauth2',
  description: 'Create an authorization URL for ZBD Login.',
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
  const response = await client.oauth2.createAuthorizationURL().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
