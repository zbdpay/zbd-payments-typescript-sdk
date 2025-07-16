// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@zbdpay/payments-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ZbdPayments from '@zbdpay/payments-sdk';

export const metadata: Metadata = {
  resource: 'email_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/email/send-payment',
  operationId: 'post_v0_email_send-payment',
};

export const tool: Tool = {
  name: 'send_email_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend instant Bitcoin payments to any email.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'string',
        description: 'The amount for the Payment -> in millisatoshis',
      },
      comment: {
        type: 'string',
        description: 'Note / description of this Payment (may be shown to recipient)',
      },
      email: {
        type: 'string',
        description: 'The Email of the intended recipient (e.g. info@zebedee.io)',
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
  const response = await client.emailPayments.send(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
