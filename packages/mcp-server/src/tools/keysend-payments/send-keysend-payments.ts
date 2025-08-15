// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'keysend_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/keysend-payment',
  operationId: 'post_v0_keysend-payment',
};

export const tool: Tool = {
  name: 'send_keysend_payments',
  description: 'Start sending Keysend payments on the Lightning Network.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Keysend Payment updates to',
      },
      metadata: {
        type: 'object',
        description: 'Open metadata object property',
        additionalProperties: true,
      },
      pubkey: {
        type: 'string',
        description: 'The Public Key for the destination Lightning node',
      },
      tlvRecords: {
        type: 'array',
        description:
          'List of TLV records\n  <Expandable title="tlvRecord" defaultOpen>\n    <ParamField body="type" type="number" initialValue={123456}>\n      type of the TLV record',
        items: {
          type: 'string',
        },
      },
      value: {
        type: 'string',
        description: 'value of the TLV record (hex encoded string)',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.keysendPayments.send(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
