// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbdpay/payments-sdk';

const client = new ZbdPayments({
  apikey: 'My Apikey',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource internalTransfer', () => {
  // Mock server tests are disabled
  test.skip('initiate', async () => {
    const responsePromise = client.internalTransfer.initiate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.internalTransfer.initiate(
        { amount: 'string', receiverWalletId: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
