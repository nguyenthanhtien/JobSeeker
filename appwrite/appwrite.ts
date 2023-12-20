import { Client, Account, Databases, Storage, Functions, Avatars, Teams, Locale } from 'appwrite';

const client = new Client()
                .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
                .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);
export const teams = new Teams(client);
export const locale = new Locale(client);

export { ID } from 'appwrite';
