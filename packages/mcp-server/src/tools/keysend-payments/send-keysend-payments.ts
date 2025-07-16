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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart sending Keysend payments on the Lightning Network.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
  const body = args as any;
  const response = await client.keysendPayments.send(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
