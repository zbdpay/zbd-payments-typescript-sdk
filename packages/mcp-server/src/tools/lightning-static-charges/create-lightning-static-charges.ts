// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_static_charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/static-charges',
  operationId: 'post_v0_static-charges',
};

export const tool: Tool = {
  name: 'create_lightning_static_charges',
  description: 'Start accepting payments on Lightning with Static QR codes.',
  inputSchema: {
    type: 'object',
    properties: {
      allowedSlots: {
        type: 'number',
        description: 'Number of payments this Static Charge can accept',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Charge updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Static Charge (visible to payer)',
      },
      identifier: {
        type: 'string',
        description: 'Used for Custom Lightning Addresses (see guide)',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      maxAmount: {
        type: 'string',
        description: 'Maximum allowed amount for the Static Charge -> in millisatoshis',
      },
      minAmount: {
        type: 'string',
        description: 'Minimum allowed amount for the Static Charge -> in millisatoshis',
      },
      successMessage: {
        type: 'string',
        description: 'Message displayed to the payer AFTER payment settles. Maximum of 144 characters.',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.lightningStaticCharges.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
