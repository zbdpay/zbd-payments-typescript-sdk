// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'gamertags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/gamertag/user-id/{id}',
  operationId: 'get_v0_gamertag_user-id_id',
};

export const tool: Tool = {
  name: 'retrieve_by_zbd_id_gamertags',
  description: 'Retrieve ZBD user ID from a Gamertag.',
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
  const response = await client.gamertags.retrieveByZbdID(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
