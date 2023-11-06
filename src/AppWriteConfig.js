import { Client,Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6547ae16699333ee727a');

    export const account = new Account(client);

export default client;
