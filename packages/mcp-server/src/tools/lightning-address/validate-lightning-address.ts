// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_address',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/ln-address/validate/{address}',
  operationId: 'get_v0_ln-address_validate_address',
};

export const tool: Tool = {
  name: 'validate_lightning_address',
  description: 'Verify the validity of a Lightning Address.',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
      },
    },
    required: ['address'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  const response = await client.lightningAddress.validate(address).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
