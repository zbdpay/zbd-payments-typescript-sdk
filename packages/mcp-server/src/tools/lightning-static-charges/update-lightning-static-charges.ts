// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange the configuration of a Static Charge QR code.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.lightningStaticCharges.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
