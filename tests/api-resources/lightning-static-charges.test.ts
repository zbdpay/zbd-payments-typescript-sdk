// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbdpay/payments-sdk';

const client = new ZbdPayments({
  apikey: 'My Apikey',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lightningStaticCharges', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.lightningStaticCharges.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.lightningStaticCharges.create(
        {
          allowedSlots: 123,
          callbackUrl: 'string',
          description: 'string',
          identifier: 'string',
          internalId: 'string',
          maxAmount: 'string',
          minAmount: 'string',
          successMessage: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.lightningStaticCharges.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.lightningStaticCharges.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.lightningStaticCharges.update(
        'id',
        {
          allowedSlots: 123,
          callbackUrl: 'string',
          description: 'string',
          internalId: 'string',
          maxAmount: 'string',
          minAmount: 'string',
          successMessage: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
