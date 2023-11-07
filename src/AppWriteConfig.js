import { Client,Account ,Databases} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6547ae16699333ee727a');

    export const account = new Account(client);

    export const databases = new Databases(client,'6549e293d22b90ebe3a3')

export default client;
