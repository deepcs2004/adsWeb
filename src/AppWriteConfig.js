import { Client, Account, Databases } from 'appwrite';

export const PROJECT_ID = '6547ae0df40bab33c4d8'
export const DATABASE_ID = '654c621f32736dfa4156'
export const COLLECTION_ID ='654c622e506c47bbb83b'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6547ae0df40bab33c4d8');


export const account = new Account(client);

export const databases = new Databases(client)

export default client;
