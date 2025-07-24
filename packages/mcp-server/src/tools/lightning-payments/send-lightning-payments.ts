// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'lightning_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/payments',
  operationId: 'post_v0_payments',
};

export const tool: Tool = {
  name: 'send_lightning_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart sending instant Bitcoin payments through the ZBD API.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description:
          'Amount to be paid to this Charge/Invoice -> in millisatoshis *(only valid if Amountless Invoice)*',
      },
      callbackUrl: {
        type: 'string',
        description: 'The endpoint ZBD will POST Payment updates to',
      },
      description: {
        type: 'string',
        description: 'Note or comment for this Payment',
      },
      internalId: {
        type: 'string',
        description: 'Open metadata string property',
      },
      invoice: {
        type: 'string',
        description: 'Lightning Network Payment Request / Charge',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ZbdPayments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.lightningPayments.send(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
