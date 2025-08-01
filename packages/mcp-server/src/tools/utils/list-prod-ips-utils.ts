// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/prod-ips',
  operationId: 'get_v0_prod-ips',
};

export const tool: Tool = {
  name: 'list_prod_ips_utils',
  description: 'Get the official IP addresses of ZBD servers.',
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
  const response = await client.utils.listProdIPs().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
