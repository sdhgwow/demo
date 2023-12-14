import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = fs.readFile;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const CREDENTIALS_PATH = path.join(__dirname, '..', 'untitled/credentials.json');

/**
 * Создает клиента для аутентификации с помощью JWT
 * в сервисах Google.
 * @returns {Promise<google.auth.JWT>} google.auth.JWT instance
 */
const getAuthClient = async () => {
    try {
        const content = await readFile(CREDENTIALS_PATH, 'utf-8');
        const { client_email, private_key } = JSON.parse(content);

        const client = new google.auth.JWT(
            client_email,
            null,
            private_key,
            SCOPES,
            null
        );

        return client;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
};

export { getAuthClient };

export const getApiClient = async () => {
    const authClient = await getAuthClient();
    const { spreadsheets: apiClient } = google.sheets( {
        version : 'v4',
        auth    : authClient,
    } );

    return apiClient;
};

export const getValuesData = async ( apiClient, range ) => {
    const { data } = await apiClient.get( {
        spreadsheetId   : '112uQ2Z5GgSVyssS1imt5GPg5hGS56jUcEwGAEr_4Ylw',
        ranges          : range,
        fields          : 'sheets',
        includeGridData : true,
    } );

    return data.sheets;
};