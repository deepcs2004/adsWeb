import { Client, Account, Databases } from 'appwrite';

export const PROJECT_ID = '654dd0fa7a6bbc0364ee'
export const DATABASE_ID = '654e215625e59bfca007'
export const COLLECTION_ID = '654e2172699d55c09ce6'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654dd0fa7a6bbc0364ee');


export const account = new Account(client);

export const databases = new Databases(client)

export default client;
