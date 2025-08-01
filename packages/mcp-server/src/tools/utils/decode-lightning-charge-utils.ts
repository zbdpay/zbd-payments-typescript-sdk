// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'utils',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/decode-invoice',
  operationId: 'post_v0_decode-invoice',
};

export const tool: Tool = {
  name: 'decode_lightning_charge_utils',
  description: 'Understand the inner properties of a Charge QR code.',
  inputSchema: {
    type: 'object',
    properties: {
      invoice: {
        type: 'string',
        description: 'The Charge or Invoice QR code contents',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.utils.decodeLightningCharge(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
