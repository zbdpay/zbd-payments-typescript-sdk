// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbdpay/payments-sdk';

const client = new ZbdPayments({
  apikey: 'My Apikey',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vouchers', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.vouchers.create();
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
      client.vouchers.create(
        { amount: 'string', description: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.vouchers.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('redeem', async () => {
    const responsePromise = client.vouchers.redeem();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('redeem: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vouchers.redeem({ code: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('revoke', async () => {
    const responsePromise = client.vouchers.revoke();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revoke: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vouchers.revoke({ code: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
