import Client = require('@alicloud/mns/lib/client');

interface MNSClientResponse {
    code: any;
    headers: {};
    body: any;
  }

interface MNSClient extends Client{
    sendMessage(queueName: string, params: {}): Promise<MNSClientResponse>;
    async batchSendMessage(queueName: string, params: {}): Promise<MNSClientResponse>;
    receiveMessage(queueName: string, waitSeconds?: number): Promise<MNSClientResponse>;
    async batchReceiveMessage(queueName: string, numOfMessages: number, waitSeconds?: number): Promise<MNSClientResponse>;
    peekMessage(queueName: string): Promise<MNSClientResponse>;
    async batchPeekMessage(queueName: string, numOfMessages: number): Promise<MNSClientResponse>;
    deleteMessage(queueName: string, receiptHandle: string): Promise<MNSClientResponse>;
    async batchDeleteMessage(queueName: string, receiptHandles: Array<string>): Promise<MNSClientResponse>;
}

interface EggAlicloudMNSOptions {
  client: {
    accountId: string,
    accessKeyId: string,
    secretAccessKey: string,
    region: string,
    secure: boolean,
    internal: boolean,
    vpc: boolean,
  },
}


declare module 'egg' {
  interface Application {
    alicloudMns: MNSClient & Singleton<MNSClient>;
  }

  interface EggAppConfig {
    alicloudMns: EggAlicloudMNSOptions;
  }
}