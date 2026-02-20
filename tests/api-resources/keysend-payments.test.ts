// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbdpay/payments-sdk';

const client = new ZbdPayments({
  apikey: 'My Apikey',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource keysendPayments', () => {
  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.keysendPayments.send();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.keysendPayments.send(
        {
          amount: 'string',
          callbackUrl: 'string',
          metadata: true,
          pubkey: 'string',
          tlvRecords: ['string'],
          value: 'myTLVRecordValue',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
