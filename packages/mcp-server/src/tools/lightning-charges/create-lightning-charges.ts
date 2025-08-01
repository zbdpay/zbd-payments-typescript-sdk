// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/charges',
  operationId: 'post_v0_charges',
};

export const tool: Tool = {
  name: 'create_lightning_charges',
  description: 'Start receiving instant Bitcoin payments through the ZBD API.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Charge -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Charge (visible to payer)',
      },
      expiresIn: {
        type: 'number',
        description: 'Time until Charge expiration -> in seconds',
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
  const response = await client.lightningCharges.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
