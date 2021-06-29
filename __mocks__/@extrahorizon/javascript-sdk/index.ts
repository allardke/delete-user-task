import { rqlBuilder, getMockSdk } from '@extrahorizon/javascript-sdk';

export const sdkMock = getMockSdk<jest.Mock>(jest.fn);

function createClient() {
  return sdkMock;
}

exports.createClient = createClient;
exports.rqlBuilder = rqlBuilder;