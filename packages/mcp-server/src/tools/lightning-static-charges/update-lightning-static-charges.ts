// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_static_charges',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v0/static-charges/{id}',
  operationId: 'patch_v0_static-charges_id',
};

export const tool: Tool = {
  name: 'update_lightning_static_charges',
  description: 'Change the configuration of a Static Charge QR code.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
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
        description: 'Message displayed to the payer AFTER payment settles',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.lightningStaticCharges.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
