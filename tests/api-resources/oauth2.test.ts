// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZbdPayments from '@zbdpay/payments-sdk';

const client = new ZbdPayments({
  apikey: 'My Apikey',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth2', () => {
  // Mock server tests are disabled
  test.skip('createAuthorizationURL', async () => {
    const responsePromise = client.oauth2.createAuthorizationURL();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refreshToken', async () => {
    const responsePromise = client.oauth2.refreshToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveUserData', async () => {
    const responsePromise = client.oauth2.retrieveUserData();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveUserData: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.oauth2.retrieveUserData({ usertoken: 'usertoken' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveWalletData', async () => {
    const responsePromise = client.oauth2.retrieveWalletData();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveWalletData: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.oauth2.retrieveWalletData({ usertoken: 'usertoken' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ZbdPayments.NotFoundError);
  });
});
