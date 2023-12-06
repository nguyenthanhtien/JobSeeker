import { Client, Account, Databases, Storage, Functions, Avatars, Teams, Locale } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('recruiting-platform'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);
export const teams = new Teams(client);
export const locale = new Locale(client);

export { ID } from 'appwrite';
