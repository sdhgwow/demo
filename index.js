import TelAPI from 'node-telegram-bot-api';
import {google} from 'googleapis';
import { getAuthClient, getApiClient, getValuesData } from './auth.js';
import { pool } from './dbconf.js';
import {
    BackBtn,
    RedactSpecF10Btn,
    RedactSpecF11Btn,
    RedactSpecF12Btn,
    RedactSpecF13Btn,
    RedactSpecF14Btn,
    RedactSpecF15Btn,
    RedactSpecF17Btn,
    RedactSpecF18Btn,
    RedactSpecF19Btn,
    RedactSpecF1Btn,
    RedactSpecF20Btn,
    RedactSpecF21Btn,
    RedactSpecF22Btn,
    RedactSpecF23Btn,
    RedactSpecF24Btn, 
    RedactSpecF25Btn, 
    RedactSpecF26Btn, 
    RedactSpecF27Btn, 
    RedactSpecF28Btn, 
    RedactSpecF29Btn,
    RedactSpecF2Btn, 
    RedactSpecF30Btn, 
    RedactSpecF3Btn, 
    RedactSpecF31Btn, 
    RedactSpecF32Btn, 
    RedactSpecF33Btn, 
    RedactSpecF34Btn, 
    RedactSpecF35Btn, 
    RedactSpecF36Btn,
    RedactSpecF37Btn,
    RedactSpecF38Btn,
    RedactSpecF39Btn,
    RedactSpecF40Btn,
    RedactSpecF41Btn,
    RedactSpecF42Btn,
    RedactSpecF43Btn,
    RedactSpecF44Btn,
    RedactSpecF45Btn,
    RedactSpecF46Btn,
    RedactSpecF47Btn,
    RedactSpecF48Btn,
    RedactSpecF49Btn,
    RedactSpecF4Btn,
    RedactSpecF50Btn,
    RedactSpecF51Btn,
    RedactSpecF52Btn,
    RedactSpecF53Btn,
    RedactSpecF54Btn,
    RedactSpecF55Btn,
    RedactSpecF56Btn,
    RedactSpecF57Btn,
    RedactSpecF58Btn,
    RedactSpecF59Btn,
    RedactSpecF5Btn,
    RedactSpecF60Btn,
    RedactSpecF61Btn,
    RedactSpecF62Btn,
    RedactSpecF63Btn,
    RedactSpecF64Btn,
    RedactSpecF65Btn,
    RedactSpecF66Btn,
    RedactSpecF67Btn,
    RedactSpecF6Btn,
    RedactSpecF7Btn,
    RedactSpecF8Btn,
    RedactSpecF9Btn,
    RedactSpecL10Btn,
    RedactSpecL11Btn,
    RedactSpecL12Btn,
    RedactSpecL13Btn,
    RedactSpecL14Btn,
    RedactSpecL15Btn,
    RedactSpecL16Btn,
    RedactSpecL17Btn,
    RedactSpecL18Btn,
    RedactSpecL19Btn,
    RedactSpecL1Btn,
    RedactSpecL20Btn,
    RedactSpecL21Btn,
    RedactSpecL22Btn,
    RedactSpecL23Btn,
    RedactSpecL24Btn,
    RedactSpecL25Btn, 
    RedactSpecL26Btn, 
    RedactSpecL27Btn, 
    RedactSpecL28Btn, 
    RedactSpecL29Btn,
    RedactSpecL2Btn, 
    RedactSpecL30Btn,
    RedactSpecL3Btn,
    RedactSpecL31Btn,
    RedactSpecL32Btn,
    RedactSpecL33Btn,
    RedactSpecL34Btn,
    RedactSpecL35Btn,
    RedactSpecL36Btn,
    RedactSpecL37Btn,
    RedactSpecL38Btn,
    RedactSpecL39Btn,
    RedactSpecL40Btn,
    RedactSpecL41Btn,
    RedactSpecL42Btn,
    RedactSpecL43Btn,
    RedactSpecL44Btn,
    RedactSpecL45Btn,
    RedactSpecL46Btn,
    RedactSpecL47Btn,
    RedactSpecL48Btn,
    RedactSpecL49Btn,
    RedactSpecL50Btn,
    RedactSpecL51Btn,
    RedactSpecL52Btn,
    RedactSpecL53Btn,
    RedactSpecL54Btn,
    RedactSpecL55Btn,
    RedactSpecL56Btn,
    RedactSpecL57Btn,
    RedactSpecL58Btn,
    RedactSpecL59Btn,
    RedactSpecL4Btn,
    RedactSpecL5Btn,
    RedactSpecL60Btn,
    RedactSpecL61Btn,
    RedactSpecL62Btn,
    RedactSpecL63Btn,
    RedactSpecL64Btn,
    RedactSpecL65Btn,
    RedactSpecL66Btn,
    RedactSpecL67Btn,
    RedactSpecL6Btn,
    RedactSpecL7Btn,
    RedactSpecL8Btn,
    RedactSpecL9Btn,
    startBtnWlevel1,
    startBtnWlevel2,
    startBtnWlevel3,
    startBtnWlevel4,
    consoleBtnWlevel1,
    consoleBtnWlevel2
} from './options.js';

const token = 'тут токен моего бота';
const bot = new TelAPI(token, {polling: true});
export { bot };
await pool.connect();

bot.setMyCommands([
    {command: '/start', description: 'Начало работы'},
])

bot.on('message', async msg => {
    console.log(msg)
    const text = msg.text;
    const chatID = msg.chat.id;

    try {
        const chatMember = await bot.getChatMember(chatID, msg.from.id);

        if (chatMember.status === 'kicked') {
            return;
        }

        const { rows } = await pool.query('SELECT users.user_level, users.user_workserver1, users.user_way1, users.user_workserver2, users.user_way2, users.user_nickname, users.user_tgtag FROM users WHERE user_id = $1', [chatID]);

        let level = rows.length > 0 ? rows[0].user_level : 0;
        let nickname = rows.length > 0 ? rows[0].user_nickname : 0;

        if (text === '/start') {

            if (level === 1) {
                await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel1);
            }

            if (level === 2) {
                await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel2);
            }

            if (level === 3) {
                await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel3);
            }

            if (level === 4) {
                await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel4);
            }
            
            else {
                await bot.sendMessage(chatID,'Уровень Ваших прав не позволяет Вам использовать данную команду.');
            }
        }

        if (text === '/testlink') {
            if (level === 3) {
            const result = await bot.createChatInviteLink(-1002018298312, {member_limit: 1})
            let InviteLink = result.invite_link 
            await bot.sendMessage(chatID, `Test: ${InviteLink}`)
            }
        }
    }

    catch (error) {
        if (error.code === 403) {
            console.log('Пользователь заблокировал бота');
        } else {
            console.error('Ошибка:', error);
        }
    }
});

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatID = msg.message.chat.id;
    const messageID = msg.message.message_id

    const { rows } = await pool.query('SELECT users.user_level, users.user_workserver1, users.user_way1, users.user_workserver2, users.user_way2, users.user_nickname, users.user_tgtag FROM users WHERE user_id = $1', [chatID]);

    let level = rows.length > 0 ? rows[0].user_level : 0;
    let server1 = rows.length > 0 ? rows[0].user_workserver1 : 0;
    let way1 = rows.length > 0 ? rows[0].user_way1 : 0;
    let server2 = rows.length > 0 ? rows[0].user_workserver2 : 0;
    let way2 = rows.length > 0 ? rows[0].user_way2 : 0;
    let nickname = rows.length > 0 ? rows[0].user_nickname : 0;
    let teletag = rows.length > 0 ? rows[0].user_tgtag : 0;

    const range = 'Состав технических специалистов';
    const apiClient = await getApiClient();
    const [sheet] = await getValuesData(apiClient, range);
    async function processServerData(serverNumber, rowIndex) {
        const values = sheet.data[0].rowData[rowIndex].values;
        return values[2].formattedValue ? values[2].formattedValue : 'N/A';
    }

    if (data === '1') {
        if (level === 1) {
            if (way2 === 0) {
                if (way1 === 'forum') {
                    const range = 'Состав технических специалистов';
                    const apiClient = await getApiClient();
                    const [sheet] = await getValuesData(apiClient, range);
                    const rowIndex = server1 + server1

                    if (rowIndex !== -1 && sheet.data[0].rowData[rowIndex] && sheet.data[0].rowData[rowIndex].values) {
                        const values = sheet.data[0].rowData[rowIndex].values;

                        const warnings = values[4] ? values[4].formattedValue : 'N/A';
                        let balli = values[5] ? values[5].formattedValue : 'N/A';
                        const VK = values[7] ? values[7].formattedValue : 'N/A';
                        const TG = values[8] ? values[8].formattedValue : 'N/A';
                        const DSID = values[9] ? values[9].formattedValue : 'N/A';
                        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
                        const date = values[1] ? values[1].formattedValue : 'N/A';

                        if (balli === undefined) {
                            balli = '0'
                        }

                        await bot.sendMessage(chatID, `Ваша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nРабочий сервер: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}`, BackBtn);
                        await bot.sendMessage(-1002018298312, `Пользователь ${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nРабочий сервер: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}`, {message_thread_id: 26});
                    } else {
                        await bot.sendMessage(chatID, 'Данные не найдены.');
                    }
                }

                if (way1 === 'logs') {
                    const range = 'Состав технических специалистов';
                    const apiClient = await getApiClient();
                    const [sheet] = await getValuesData(apiClient, range);
                    const rowIndex = server1 + server1 + 1

                    if (rowIndex !== -1 && sheet.data[0].rowData[rowIndex] && sheet.data[0].rowData[rowIndex].values) {
                        const values = sheet.data[0].rowData[rowIndex].values;

                        const warnings = values[4] ? values[4].formattedValue : 'N/A';
                        let balli = values[5] ? values[5].formattedValue : 'N/A';
                        const VK = values[7] ? values[7].formattedValue : 'N/A';
                        const TG = values[8] ? values[8].formattedValue : 'N/A';
                        const DSID = values[9] ? values[9].formattedValue : 'N/A';
                        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
                        const date = values[1] ? values[1].formattedValue : 'N/A';

                        if (balli === undefined) {
                            balli = '0'
                        }

                        await bot.sendMessage(chatID, `Ваша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nРабочий сервер: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}`, BackBtn);
                        await bot.sendMessage(-1002018298312, `Пользователь ${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nРабочий сервер: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}`, {message_thread_id: 26});
                    } else {
                        await bot.sendMessage(chatID, 'Данные не найдены.');
                    }
                }
            }
            else {
                if (way1 === 'logs' && way2 === 'forum') {
                    const range = 'Состав технических специалистов';
                    const apiClient = await getApiClient();
                    const [sheet] = await getValuesData(apiClient, range);
                    let rowIndex = server1 + server1 + 1
                    const valuesLog = sheet.data[0].rowData[rowIndex].values;

                    const warningsLog = valuesLog[4] ? valuesLog[4].formattedValue : 'N/A';
                    let balliLog = valuesLog[5] ? valuesLog[5].formattedValue : 'N/A';
                    const VKLog = valuesLog[7] ? valuesLog[7].formattedValue : 'N/A';
                    const TGLog = valuesLog[8] ? valuesLog[8].formattedValue : 'N/A';
                    const DSIDLog = valuesLog[9] ? valuesLog[9].formattedValue : 'N/A';
                    const WRserverLog = valuesLog[6] ? valuesLog[6].formattedValue : 'N/A';
                    const dateLog = valuesLog[1] ? valuesLog[1].formattedValue : 'N/A';

                    if (balliLog === undefined) {
                        balliLog = '0'
                    }

                    rowIndex = server2 + server2
                    const valuesForum = sheet.data[0].rowData[rowIndex].values;

                    const warningsForum = valuesForum[4] ? valuesForum[4].formattedValue : 'N/A';
                    let balliForum = valuesForum[5] ? valuesForum[5].formattedValue : 'N/A';
                    const VKForum = valuesForum[7] ? valuesForum[7].formattedValue : 'N/A';
                    const TGForum = valuesForum[8] ? valuesForum[8].formattedValue : 'N/A';
                    const DSIDForum = valuesForum[9] ? valuesForum[9].formattedValue : 'N/A';
                    const WRserverForum = valuesForum[6] ? valuesForum[6].formattedValue : 'N/A';
                    const dateForum = valuesForum[1] ? valuesForum[1].formattedValue : 'N/A';

                    if (balliForum === undefined) {
                        balliForum = '0'
                    }

                    await bot.sendMessage(chatID, `Ваша статистика специалиста в направлении «Логирование»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, BackBtn);
                    await bot.sendMessage(-1002018298312, `Пользователь ${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика специалиста в направлении «Логирование»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, {message_thread_id: 26});
                }

                if (way1 === 'forum' && way2 === 'logs') {
                    const range = 'Состав технических специалистов';
                    const apiClient = await getApiClient();
                    const [sheet] = await getValuesData(apiClient, range);
                    let rowIndex = 1 + server2 + server2
                    const valuesLog = sheet.data[0].rowData[rowIndex].values;

                    const warningsLog = valuesLog[4] ? valuesLog[4].formattedValue : 'N/A';
                    let balliLog = valuesLog[5] ? valuesLog[5].formattedValue : 'N/A';
                    const VKLog = valuesLog[7] ? valuesLog[7].formattedValue : 'N/A';
                    const TGLog = valuesLog[8] ? valuesLog[8].formattedValue : 'N/A';
                    const DSIDLog = valuesLog[9] ? valuesLog[9].formattedValue : 'N/A';
                    const WRserverLog = valuesLog[6] ? valuesLog[6].formattedValue : 'N/A';
                    const dateLog = valuesLog[1] ? valuesLog[1].formattedValue : 'N/A';

                    if (balliLog === undefined) {
                        balliLog = '0'
                    }

                    rowIndex = server1 + server1
                    const valuesForum = sheet.data[0].rowData[rowIndex].values;

                    const warningsForum = valuesForum[4] ? valuesForum[4].formattedValue : 'N/A';
                    let balliForum = valuesForum[5] ? valuesForum[5].formattedValue : 'N/A';
                    const VKForum = valuesForum[7] ? valuesForum[7].formattedValue : 'N/A';
                    const TGForum = valuesForum[8] ? valuesForum[8].formattedValue : 'N/A';
                    const DSIDForum = valuesForum[9] ? valuesForum[9].formattedValue : 'N/A';
                    const WRserverForum = valuesForum[6] ? valuesForum[6].formattedValue : 'N/A';
                    const dateForum = valuesForum[1] ? valuesForum[1].formattedValue : 'N/A';

                    if (balliForum === undefined) {
                        balliForum = '0'
                    }

                    await bot.sendMessage(chatID, `Ваша статистика специалиста в направлении «Логирование»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, BackBtn);
                    await bot.sendMessage(-1002018298312, `Пользователь ${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика специалиста в направлении «Логирование»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, {message_thread_id: 26});
                }

                if (way1 === 'forum' && way2 === 'forum') {
                    let rowIndex = server1 + server1
                    const valuesLog = sheet.data[0].rowData[rowIndex].values;

                    const warningsLog = valuesLog[4] ? valuesLog[4].formattedValue : 'N/A';
                    let balliLog = valuesLog[5] ? valuesLog[5].formattedValue : 'N/A';
                    const VKLog = valuesLog[7] ? valuesLog[7].formattedValue : 'N/A';
                    const TGLog = valuesLog[8] ? valuesLog[8].formattedValue : 'N/A';
                    const DSIDLog = valuesLog[9] ? valuesLog[9].formattedValue : 'N/A';
                    const WRserverLog = valuesLog[6] ? valuesLog[6].formattedValue : 'N/A';
                    const dateLog = valuesLog[1] ? valuesLog[1].formattedValue : 'N/A';

                    if (balliLog === undefined) {
                        balliLog = '0'
                    }

                    rowIndex = server2 + server2

                    const valuesForum = sheet.data[0].rowData[rowIndex].values;

                    const warningsForum = valuesForum[4] ? valuesForum[4].formattedValue : 'N/A';
                    let balliForum = valuesForum[5] ? valuesForum[5].formattedValue : 'N/A';
                    const VKForum = valuesForum[7] ? valuesForum[7].formattedValue : 'N/A';
                    const TGForum = valuesForum[8] ? valuesForum[8].formattedValue : 'N/A';
                    const DSIDForum = valuesForum[9] ? valuesForum[9].formattedValue : 'N/A';
                    const WRserverForum = valuesForum[6] ? valuesForum[6].formattedValue : 'N/A';
                    const dateForum = valuesForum[1] ? valuesForum[1].formattedValue : 'N/A';

                    if (balliForum === undefined) {
                        balliForum = '0'
                    }

                    await bot.sendMessage(chatID, `Ваша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, BackBtn);
                    await bot.sendMessage(-1002018298312, `Пользователь ${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика специалиста в направлении «Логирование»:\nНикнейм: ${nickname}\nДата назначения: ${dateLog}\nРабочий сервер: ${WRserverLog}\nВыговоры: ${warningsLog}\nБаллы: ${balliLog}\nВКонтакте: ${VKLog}\nTelegram: ${TGLog}\nDiscord ID: ${DSIDLog}\n\nВаша статистика специалиста в направлении «Форум»:\nНикнейм: ${nickname}\nДата назначения: ${dateForum}\nРабочий сервер: ${WRserverForum}\nВыговоры: ${warningsForum}\nБаллы: ${balliForum}\nВКонтакте: ${VKForum}\nTelegram: ${TGForum}\nDiscord ID: ${DSIDForum}`, {message_thread_id: 26});
                }
            }
        }

        if (level === 2) {
                const range = 'Состав кураторов и их зам. & поддержки сайта';
                const apiClient = await getApiClient();
                const [sheet] = await getValuesData(apiClient, range);
                const rowIndex = server1 + 18

                if (rowIndex !== -1 && sheet.data[0].rowData[rowIndex] && sheet.data[0].rowData[rowIndex].values) {
                    const values = sheet.data[0].rowData[rowIndex].values;

                    const warnings = values[4] ? values[4].formattedValue : 'N/A';
                    let balli = values[5] ? values[5].formattedValue : 'N/A';
                    const VK = values[7] ? values[7].formattedValue : 'N/A';
                    const TG = values[8] ? values[8].formattedValue : 'N/A';
                    const DSID = values[9] ? values[9].formattedValue : 'N/A';
                    const WRserver = values[6] ? values[6].formattedValue : 'N/A';
                    const date = values[1] ? values[1].formattedValue : 'N/A';
                    let AC = values[12] ? values[12].formattedValue : 'N/A';

                    if (balli === undefined) {
                        balli = '0'
                    }

                    if (AC === undefined) {
                        AC = 'Нет'
                    }

                    if (AC === 'АЦ') {
                        AC = 'Есть'
                    }

                    await bot.sendMessage(chatID, `Ваша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nКурируемые сервера: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}\nНаличие АЦ: ${AC}`, BackBtn);
                    await bot.sendMessage(-1002018298312, `${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nКурируемые сервера: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}\nНаличие АЦ: ${AC}`, {message_thread_id: 26});
                } else {
                    await bot.sendMessage(chatID, 'Данные не найдены.');
                }
        }

        if (level === 3) {
            const range = 'Состав кураторов и их зам. & поддержки сайта';
            const apiClient = await getApiClient();
            const [sheet] = await getValuesData(apiClient, range);
            const rowIndex = server1 + 3

            if (rowIndex !== -1 && sheet.data[0].rowData[rowIndex] && sheet.data[0].rowData[rowIndex].values) {
                const values = sheet.data[0].rowData[rowIndex].values;

                const warnings = values[4] ? values[4].formattedValue : 'N/A';
                let balli = values[5] ? values[5].formattedValue : 'N/A';
                const VK = values[7] ? values[7].formattedValue : 'N/A';
                const TG = values[8] ? values[8].formattedValue : 'N/A';
                const DSID = values[9] ? values[9].formattedValue : 'N/A';
                const WRserver = values[6] ? values[6].formattedValue : 'N/A';
                const date = values[1] ? values[1].formattedValue : 'N/A';
                let AC = values[12] ? values[12].formattedValue : 'N/A';

                if (balli === undefined) {
                    balli = '0'
                }

                if (AC === undefined) {
                    AC = 'Нет'
                }

                if (AC === 'АЦ') {
                    AC = 'Есть'
                }

                await bot.sendMessage(chatID, `Ваша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nКурируемые сервера: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}\nНаличие АЦ: ${AC}`, BackBtn);
                await bot.sendMessage(-1002018298312, `${chatID} (${teletag}) совершил запрос своей статистики. Запрос успешен.\nРезультат:\n\nВаша статистика:\nНикнейм: ${nickname}\nДата назначения: ${date}\nКурируемые сервера: ${WRserver}\nВыговоры: ${warnings}\nБаллы: ${balli}\nВКонтакте: ${VK}\nTelegram: ${TG}\nDiscord ID: ${DSID}\nНаличие АЦ: ${AC}`, {message_thread_id: 26});
            } else {
                await bot.sendMessage(chatID, 'Данные не найдены.');
            }
        }


    }

    if (data === '2') {
        if (level === 2) {
            if (server1 === 1) {
                let nicknameF1 = await processServerData(server1, 2);
                let nicknameL1 = await processServerData(server1, 3);
                let nicknameF2 = await processServerData(server1, 4);
                let nicknameL2 = await processServerData(server1, 5);
                let nicknameF3 = await processServerData(server1, 6);
                let nicknameL3 = await processServerData(server1, 7);
                let nicknameF4 = await processServerData(server1, 8);
                let nicknameL4 = await processServerData(server1, 9);
                let nicknameF5 = await processServerData(server1, 10);
                let nicknameL5 = await processServerData(server1, 11);

                nicknameF1 = nicknameF1 === "N/A" ? [{text: 'RED FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED FORUM: ' + nicknameF1, callback_data: 'F1'}];
                nicknameL1 = nicknameL1 === "N/A" ? [{text: 'RED LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED LOGS: ' + nicknameL1, callback_data: 'L1'}];
                nicknameF2 = nicknameF2 === "N/A" ? [{text: 'GREEN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN FORUM: ' + nicknameF2, callback_data: 'F2'}];
                nicknameL2 = nicknameL2 === "N/A" ? [{text: 'GREEN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN LOGS: ' + nicknameL2, callback_data: 'L2'}];
                nicknameF3 = nicknameF3 === "N/A" ? [{text: 'BLUE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE FORUM: ' + nicknameF3, callback_data: 'F3'}];
                nicknameL3 = nicknameL3 === "N/A" ? [{text: 'BLUE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE LOGS: ' + nicknameL3, callback_data: 'L3'}];
                nicknameF4 = nicknameF4 === "N/A" ? [{text: 'YELLOW FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW FORUM: ' + nicknameF4, callback_data: 'F4'}];
                nicknameL4 = nicknameL4 === "N/A" ? [{text: 'YELLOW LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW LOGS: ' + nicknameL4, callback_data: 'L4'}];
                nicknameF5 = nicknameF5 === "N/A" ? [{text: 'ORANGE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE FORUM: ' + nicknameF5, callback_data: 'F5'}];
                nicknameL5 = nicknameL5 === "N/A" ? [{text: 'ORANGE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE LOGS: ' + nicknameL5, callback_data: 'L5'}];

                const spisokTechForLevel2Zam1 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF1,
                            nicknameL1,
                            nicknameF2,
                            nicknameL2,
                            nicknameF3,
                            nicknameL3,
                            nicknameF4,
                            nicknameL4,
                            nicknameF5,
                            nicknameL5,
                        ]
                    })
                };

                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam1)
            }

            if (server1 === 2) {
                let nicknameF6 = await processServerData(server1, 12);
                let nicknameL6 = await processServerData(server1, 13);
                let nicknameF7 = await processServerData(server1, 14);
                let nicknameL7 = await processServerData(server1, 15);
                let nicknameF8 = await processServerData(server1, 16);
                let nicknameL8 = await processServerData(server1, 17);
                let nicknameF9 = await processServerData(server1, 18);
                let nicknameL9 = await processServerData(server1, 19);
                let nicknameF10 = await processServerData(server1, 20);
                let nicknameL10 = await processServerData(server1, 21);

                nicknameF6 = nicknameF6 === "N/A" ? [{text: 'PURPLE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE FORUM: ' + nicknameF6, callback_data: 'F6'}];
                nicknameL6 = nicknameL6 === "N/A" ? [{text: 'PURPLE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE LOGS: ' + nicknameL6, callback_data: 'L6'}];
                nicknameF7 = nicknameF7 === "N/A" ? [{text: 'LIME FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME FORUM: ' + nicknameF7, callback_data: 'F7'}];
                nicknameL7 = nicknameL7 === "N/A" ? [{text: 'LIME LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME LOGS: ' + nicknameL7, callback_data: 'L7'}];
                nicknameF8 = nicknameF8 === "N/A" ? [{text: 'PINK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK FORUM: ' + nicknameF8, callback_data: 'F8'}];
                nicknameL8 = nicknameL8 === "N/A" ? [{text: 'PINK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK LOGS: ' + nicknameL8, callback_data: 'L8'}];
                nicknameF9 = nicknameF9 === "N/A" ? [{text: 'CHERRY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY FORUM: ' + nicknameF9, callback_data: 'F9'}];
                nicknameL9 = nicknameL9 === "N/A" ? [{text: 'CHERRY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY LOGS: ' + nicknameL9, callback_data: 'L9'}];
                nicknameF10 = nicknameF10 === "N/A" ? [{text: 'BLACK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK FORUM: ' + nicknameF10, callback_data: 'F10'}];
                nicknameL10 = nicknameL10 === "N/A" ? [{text: 'BLACK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK LOGS: ' + nicknameL10, callback_data: 'L10'}];

                const spisokTechForLevel2Zam2 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF6,
                            nicknameL6,
                            nicknameF7,
                            nicknameL7,
                            nicknameF8,
                            nicknameL8,
                            nicknameF9,
                            nicknameL9,
                            nicknameF10,
                            nicknameL10,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam2)
            }

            if (server1 === 3) {
                let nicknameF11 = await processServerData(server1, 22);
                let nicknameL11 = await processServerData(server1, 23);
                let nicknameF12 = await processServerData(server1, 24);
                let nicknameL12 = await processServerData(server1, 25);
                let nicknameF13 = await processServerData(server1, 26);
                let nicknameL13 = await processServerData(server1, 27);
                let nicknameF14 = await processServerData(server1, 28);
                let nicknameL14 = await processServerData(server1, 29);
                let nicknameF15 = await processServerData(server1, 30);
                let nicknameL15 = await processServerData(server1, 31);

                nicknameF11 = nicknameF11 === "N/A" ? [{text: 'INDIGO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'INDIGO FORUM: ' + nicknameF11, callback_data: 'F11'}];
                nicknameL11 = nicknameL11 === "N/A" ? [{text: 'INDIGO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'INDIGO LOGS: ' + nicknameL11, callback_data: 'L11'}];
                nicknameF12 = nicknameF12 === "N/A" ? [{text: 'WHITE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'WHITE FORUM: ' + nicknameF12, callback_data: 'F12'}];
                nicknameL12 = nicknameL12 === "N/A" ? [{text: 'WHITE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'WHITE LOGS: ' + nicknameL12, callback_data: 'L12'}];
                nicknameF13 = nicknameF13 === "N/A" ? [{text: 'MAGENTA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAGENTA FORUM: ' + nicknameF13, callback_data: 'F13'}];
                nicknameL13 = nicknameL13 === "N/A" ? [{text: 'MAGENTA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAGENTA LOGS: ' + nicknameL13, callback_data: 'L13'}];
                nicknameF14 = nicknameF14 === "N/A" ? [{text: 'CRIMSON FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CRIMSON FORUM: ' + nicknameF14, callback_data: 'F14'}];
                nicknameL14 = nicknameL14 === "N/A" ? [{text: 'CRIMSON LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CRIMSON LOGS: ' + nicknameL14, callback_data: 'L14'}];
                nicknameF15 = nicknameF15 === "N/A" ? [{text: 'GOLD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GOLD FORUM: ' + nicknameF15, callback_data: 'F15'}];
                nicknameL15 = nicknameL15 === "N/A" ? [{text: 'GOLD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GOLD LOGS: ' + nicknameL15, callback_data: 'L15'}];

                const spisokTechForLevel2Zam3 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF11,
                            nicknameL11,
                            nicknameF12,
                            nicknameL12,
                            nicknameF13,
                            nicknameL13,
                            nicknameF14,
                            nicknameL14,
                            nicknameF15,
                            nicknameL15,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam3)
            }

            if (server1 === 4) {
                let nicknameF16 = await processServerData(server1, 32);
                let nicknameL16 = await processServerData(server1, 33);
                let nicknameF17 = await processServerData(server1, 34);
                let nicknameL17 = await processServerData(server1, 35);
                let nicknameF18 = await processServerData(server1, 36);
                let nicknameL18 = await processServerData(server1, 37);
                let nicknameF19 = await processServerData(server1, 38);
                let nicknameL19 = await processServerData(server1, 39);
                let nicknameF20 = await processServerData(server1, 40);
                let nicknameL20 = await processServerData(server1, 41);

                nicknameF16 = nicknameF16 === "N/A" ? [{text: 'AZURE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AZURE FORUM: ' + nicknameF16, callback_data: 'F16'}];
                nicknameL16 = nicknameL16 === "N/A" ? [{text: 'AZURE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AZURE LOGS: ' + nicknameL16, callback_data: 'L16'}];
                nicknameF17 = nicknameF17 === "N/A" ? [{text: 'PLATINUM FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PLATINUM FORUM: ' + nicknameF17, callback_data: 'F17'}];
                nicknameL17 = nicknameL17 === "N/A" ? [{text: 'PLATINUM LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PLATINUM LOGS: ' + nicknameL17, callback_data: 'L17'}];
                nicknameF18 = nicknameF18 === "N/A" ? [{text: 'AQUA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AQUA FORUM: ' + nicknameF18, callback_data: 'F18'}];
                nicknameL18 = nicknameL18 === "N/A" ? [{text: 'AQUA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AQUA LOGS: ' + nicknameL18, callback_data: 'L18'}];
                nicknameF19 = nicknameF19 === "N/A" ? [{text: 'GRAY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GRAY FORUM: ' + nicknameF19, callback_data: 'F19'}];
                nicknameL19 = nicknameL19 === "N/A" ? [{text: 'GRAY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GRAY LOGS: ' + nicknameL19, callback_data: 'L19'}];
                nicknameF20 = nicknameF20 === "N/A" ? [{text: 'ICE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ICE FORUM: ' + nicknameF20, callback_data: 'F20'}];
                nicknameL20 = nicknameL20 === "N/A" ? [{text: 'ICE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ICE LOGS: ' + nicknameL20, callback_data: 'L20'}];

                const spisokTechForLevel2Zam4 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF16,
                            nicknameL16,
                            nicknameF17,
                            nicknameL17,
                            nicknameF18,
                            nicknameL18,
                            nicknameF19,
                            nicknameL19,
                            nicknameF20,
                            nicknameL20,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam4)
            }

            if (server1 === 5) {
                let nicknameF21 = await processServerData(server1, 42);
                let nicknameL21 = await processServerData(server1, 43);
                let nicknameF22 = await processServerData(server1, 44);
                let nicknameL22 = await processServerData(server1, 45);
                let nicknameF23 = await processServerData(server1, 46);
                let nicknameL23 = await processServerData(server1, 47);
                let nicknameF24 = await processServerData(server1, 48);
                let nicknameL24 = await processServerData(server1, 49);
                let nicknameF25 = await processServerData(server1, 50);
                let nicknameL25 = await processServerData(server1, 51);

                nicknameF21 = nicknameF21 === "N/A" ? [{text: 'CHILLI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHILLI FORUM: ' + nicknameF21, callback_data: 'F21'}];
                nicknameL21 = nicknameL21 === "N/A" ? [{text: 'CHILLI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHILLI LOGS: ' + nicknameL21, callback_data: 'L21'}];
                nicknameF22 = nicknameF22 === "N/A" ? [{text: 'CHOCO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHOCO FORUM: ' + nicknameF22, callback_data: 'F22'}];
                nicknameL22 = nicknameL22 === "N/A" ? [{text: 'CHOCO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHOCO LOGS: ' + nicknameL22, callback_data: 'L22'}];
                nicknameF23 = nicknameF23 === "N/A" ? [{text: 'MOSCOW FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MOSCOW FORUM: ' + nicknameF23, callback_data: 'F23'}];
                nicknameL23 = nicknameL23 === "N/A" ? [{text: 'MOSCOW LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MOSCOW LOGS: ' + nicknameL23, callback_data: 'L23'}];
                nicknameF24 = nicknameF24 === "N/A" ? [{text: 'SPB FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SPB FORUM: ' + nicknameF24, callback_data: 'F24'}];
                nicknameL24 = nicknameL24 === "N/A" ? [{text: 'SPB LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SPB LOGS: ' + nicknameL24, callback_data: 'L24'}];
                nicknameF25 = nicknameF25 === "N/A" ? [{text: 'UFA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'UFA FORUM: ' + nicknameF25, callback_data: 'F25'}];
                nicknameL25 = nicknameL25 === "N/A" ? [{text: 'UFA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'UFA LOGS: ' + nicknameL25, callback_data: 'L25'}];

                const spisokTechForLevel2Zam5 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF21,
                            nicknameL21,
                            nicknameF22,
                            nicknameL22,
                            nicknameF23,
                            nicknameL23,
                            nicknameF24,
                            nicknameL24,
                            nicknameF25,
                            nicknameL25,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam5)
            }

            if (server1 === 6) {
                let nicknameF26 = await processServerData(server1, 52);
                let nicknameL26 = await processServerData(server1, 53);
                let nicknameF27 = await processServerData(server1, 54);
                let nicknameL27 = await processServerData(server1, 55);
                let nicknameF28 = await processServerData(server1, 56);
                let nicknameL28 = await processServerData(server1, 57);
                let nicknameF29 = await processServerData(server1, 58);
                let nicknameL29 = await processServerData(server1, 59);
                let nicknameF30 = await processServerData(server1, 60);
                let nicknameL30 = await processServerData(server1, 61);

                nicknameF26 = nicknameF26 === "N/A" ? [{text: 'SOCHI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SOCHI FORUM: ' + nicknameF26, callback_data: 'F26'}];
                nicknameL26 = nicknameL26 === "N/A" ? [{text: 'SOCHI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SOCHI LOGS: ' + nicknameL26, callback_data: 'L26'}];
                nicknameF27 = nicknameF27 === "N/A" ? [{text: 'KAZAN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KAZAN FORUM: ' + nicknameF27, callback_data: 'F27'}];
                nicknameL27 = nicknameL27 === "N/A" ? [{text: 'KAZAN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KAZAN LOGS: ' + nicknameL27, callback_data: 'L27'}];
                nicknameF28 = nicknameF28 === "N/A" ? [{text: 'SAMARA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SAMARA FORUM: ' + nicknameF28, callback_data: 'F28'}];
                nicknameL28 = nicknameL28 === "N/A" ? [{text: 'SAMARA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SAMARA LOGS: ' + nicknameL28, callback_data: 'L28'}];
                nicknameF29 = nicknameF29 === "N/A" ? [{text: 'ROSTOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ROSTOV FORUM: ' + nicknameF29, callback_data: 'F29'}];
                nicknameL29 = nicknameL29 === "N/A" ? [{text: 'ROSTOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ROSTOV LOGS: ' + nicknameL29, callback_data: 'L29'}];
                nicknameF30 = nicknameF30 === "N/A" ? [{text: 'ANAPA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ANAPA FORUM: ' + nicknameF30, callback_data: 'F30'}];
                nicknameL30 = nicknameL30 === "N/A" ? [{text: 'ANAPA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ANAPA LOGS: ' + nicknameL30, callback_data: 'L30'}];

                const spisokTechForLevel2Zam6 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF26,
                            nicknameL26,
                            nicknameF27,
                            nicknameL27,
                            nicknameF28,
                            nicknameL28,
                            nicknameF29,
                            nicknameL29,
                            nicknameF30,
                            nicknameL30,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam6)
            }

            if (server1 === 7) {
                let nicknameF31 = await processServerData(server1, 62);
                let nicknameL31 = await processServerData(server1, 63);
                let nicknameF32 = await processServerData(server1, 64);
                let nicknameL32 = await processServerData(server1, 65);
                let nicknameF33 = await processServerData(server1, 66);
                let nicknameL33 = await processServerData(server1, 67);
                let nicknameF34 = await processServerData(server1, 68);
                let nicknameL34 = await processServerData(server1, 69);
                let nicknameF35 = await processServerData(server1, 70);
                let nicknameL35 = await processServerData(server1, 71);

                nicknameF31 = nicknameF31 === "N/A" ? [{text: 'EKB FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'EKB FORUM: ' + nicknameF31, callback_data: 'F31'}];
                nicknameL31 = nicknameL31 === "N/A" ? [{text: 'EKB LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'EKB LOGS: ' + nicknameL31, callback_data: 'L31'}];
                nicknameF32 = nicknameF32 === "N/A" ? [{text: 'KRASNODAR FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNODAR FORUM: ' + nicknameF32, callback_data: 'F32'}];
                nicknameL32 = nicknameL32 === "N/A" ? [{text: 'KRASNODAR LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNODAR LOGS: ' + nicknameL32, callback_data: 'L32'}];
                nicknameF33 = nicknameF33 === "N/A" ? [{text: 'ARZAMAS FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARZAMAS FORUM: ' + nicknameF33, callback_data: 'F33'}];
                nicknameL33 = nicknameL33 === "N/A" ? [{text: 'ARZAMAS LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARZAMAS LOGS: ' + nicknameL33, callback_data: 'L33'}];
                nicknameF34 = nicknameF34 === "N/A" ? [{text: 'NOVOSIBIRSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'NOVOSIBIRSK FORUM: ' + nicknameF34, callback_data: 'F34'}];
                nicknameL34 = nicknameL34 === "N/A" ? [{text: 'NOVOSIBIRSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'NOVOSIBIRSK LOGS: ' + nicknameL34, callback_data: 'L34'}];
                nicknameF35 = nicknameF35 === "N/A" ? [{text: 'GROZNY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GROZNY FORUM: ' + nicknameF35, callback_data: 'F35'}];
                nicknameL35 = nicknameL35 === "N/A" ? [{text: 'GROZNY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GROZNY LOGS: ' + nicknameL35, callback_data: 'L35'}];

                const spisokTechForLevel2Zam7 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF31,
                            nicknameL31,
                            nicknameF32,
                            nicknameL32,
                            nicknameF33,
                            nicknameL33,
                            nicknameF34,
                            nicknameL34,
                            nicknameF35,
                            nicknameL35,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam7)
            }

            if (server1 === 8) {
                let nicknameF36 = await processServerData(server1, 72);
                let nicknameL36 = await processServerData(server1, 73);
                let nicknameF37 = await processServerData(server1, 74);
                let nicknameL37 = await processServerData(server1, 75);
                let nicknameF38 = await processServerData(server1, 76);
                let nicknameL38 = await processServerData(server1, 77);
                let nicknameF39 = await processServerData(server1, 78);
                let nicknameL39 = await processServerData(server1, 79);
                let nicknameF40 = await processServerData(server1, 80);
                let nicknameL40 = await processServerData(server1, 81);

                nicknameF36 = nicknameF36 === "N/A" ? [{text: 'SARATOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SARATOV FORUM: ' + nicknameF36, callback_data: 'F36'}];
                nicknameL36 = nicknameL36 === "N/A" ? [{text: 'SARATOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SARATOV LOGS: ' + nicknameL36, callback_data: 'L36'}];
                nicknameF37 = nicknameF37 === "N/A" ? [{text: 'OMSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OMSK FORUM: ' + nicknameF37, callback_data: 'F37'}];
                nicknameL37 = nicknameL37 === "N/A" ? [{text: 'OMSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OMSK LOGS: ' + nicknameL37, callback_data: 'L37'}];
                nicknameF38 = nicknameF38 === "N/A" ? [{text: 'IRKUTSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IRKUTSK FORUM: ' + nicknameF38, callback_data: 'F38'}];
                nicknameL38 = nicknameL38 === "N/A" ? [{text: 'IRKUTSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IRKUTSK LOGS: ' + nicknameL38, callback_data: 'L38'}];
                nicknameF39 = nicknameF39 === "N/A" ? [{text: 'VOLGOGRAD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VOLGOGRAD FORUM: ' + nicknameF39, callback_data: 'F39'}];
                nicknameL39 = nicknameL39 === "N/A" ? [{text: 'VOLGOGRAD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VOLGOGRAD LOGS: ' + nicknameL39, callback_data: 'L39'}];
                nicknameF40 = nicknameF40 === "N/A" ? [{text: 'VORONEZH FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VORONEZH FORUM: ' + nicknameF40, callback_data: 'F40'}];
                nicknameL40 = nicknameL40 === "N/A" ? [{text: 'VORONEZH LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VORONEZH LOGS: ' + nicknameL40, callback_data: 'L40'}];

                const spisokTechForLevel2Zam8 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF36,
                            nicknameL36,
                            nicknameF37,
                            nicknameL37,
                            nicknameF38,
                            nicknameL38,
                            nicknameF39,
                            nicknameL39,
                            nicknameF40,
                            nicknameL40,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam8)
            }

            if (server1 === 9) {
                let nicknameF41 = await processServerData(server1, 82);
                let nicknameL41 = await processServerData(server1, 83);
                let nicknameF42 = await processServerData(server1, 84);
                let nicknameL42 = await processServerData(server1, 85);
                let nicknameF43 = await processServerData(server1, 86);
                let nicknameL43 = await processServerData(server1, 87);
                let nicknameF44 = await processServerData(server1, 88);
                let nicknameL44 = await processServerData(server1, 89);
                let nicknameF45 = await processServerData(server1, 90);
                let nicknameL45 = await processServerData(server1, 91);

                nicknameF41 = nicknameF41 === "N/A" ? [{text: 'BELGOROD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BELGOROD FORUM: ' + nicknameF41, callback_data: 'F41'}];
                nicknameL41 = nicknameL41 === "N/A" ? [{text: 'BELGOROD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BELGOROD LOGS: ' + nicknameL41, callback_data: 'L41'}];
                nicknameF42 = nicknameF42 === "N/A" ? [{text: 'MAKHACHKALA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAKHACHKALA FORUM: ' + nicknameF42, callback_data: 'F42'}];
                nicknameL42 = nicknameL42 === "N/A" ? [{text: 'MAKHACHKALA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAKHACHKALA LOGS: ' + nicknameL42, callback_data: 'L42'}];
                nicknameF43 = nicknameF43 === "N/A" ? [{text: 'VLADIKAVKAZ FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIKAVKAZ FORUM: ' + nicknameF43, callback_data: 'F43'}];
                nicknameL43 = nicknameL43 === "N/A" ? [{text: 'VLADIKAVKAZ LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIKAVKAZ LOGS: ' + nicknameL43, callback_data: 'L43'}];
                nicknameF44 = nicknameF44 === "N/A" ? [{text: 'VLADIVOSTOK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIVOSTOK FORUM: ' + nicknameF44, callback_data: 'F44'}];
                nicknameL44 = nicknameL44 === "N/A" ? [{text: 'VLADIVOSTOK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIVOSTOK LOGS: ' + nicknameL44, callback_data: 'L44'}];
                nicknameF45 = nicknameF45 === "N/A" ? [{text: 'KALININGRAD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KALININGRAD FORUM: ' + nicknameF45, callback_data: 'F45'}];
                nicknameL45 = nicknameL45 === "N/A" ? [{text: 'KALININGRAD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KALININGRAD LOGS: ' + nicknameL45, callback_data: 'L45'}];

                const spisokTechForLevel2Zam9 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF41,
                            nicknameL41,
                            nicknameF42,
                            nicknameL42,
                            nicknameF43,
                            nicknameL43,
                            nicknameF44,
                            nicknameL44,
                            nicknameF45,
                            nicknameL45,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam9)
            }

            if (server1 === 10) {
                let nicknameF46 = await processServerData(server1, 92);
                let nicknameL46 = await processServerData(server1, 93);
                let nicknameF47 = await processServerData(server1, 94);
                let nicknameL47 = await processServerData(server1, 95);
                let nicknameF48 = await processServerData(server1, 96);
                let nicknameL48 = await processServerData(server1, 97);
                let nicknameF49 = await processServerData(server1, 98);
                let nicknameL49 = await processServerData(server1, 99);
                let nicknameF50 = await processServerData(server1, 100);
                let nicknameL50 = await processServerData(server1, 101);

                nicknameF46 = nicknameF46 === "N/A" ? [{text: 'CHELYABINSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHELYABINSK FORUM: ' + nicknameF46, callback_data: 'F46'}];
                nicknameL46 = nicknameL46 === "N/A" ? [{text: 'CHELYABINSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHELYABINSK LOGS: ' + nicknameL46, callback_data: 'L46'}];
                nicknameF47 = nicknameF47 === "N/A" ? [{text: 'KRASNOYARSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNOYARSK FORUM: ' + nicknameF47, callback_data: 'F47'}];
                nicknameL47 = nicknameL47 === "N/A" ? [{text: 'KRASNOYARSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNOYARSK LOGS: ' + nicknameL47, callback_data: 'L47'}];
                nicknameF48 = nicknameF48 === "N/A" ? [{text: 'CHEBOKSARY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHEBOKSARY FORUM: ' + nicknameF48, callback_data: 'F48'}];
                nicknameL48 = nicknameL48 === "N/A" ? [{text: 'CHEBOKSARY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHEBOKSARY LOGS: ' + nicknameL48, callback_data: 'L48'}];
                nicknameF49 = nicknameF49 === "N/A" ? [{text: 'KHABAROVSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KHABAROVSK FORUM: ' + nicknameF49, callback_data: 'F49'}];
                nicknameL49 = nicknameL49 === "N/A" ? [{text: 'KHABAROVSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KHABAROVSK LOGS: ' + nicknameL49, callback_data: 'L49'}];
                nicknameF50 = nicknameF50 === "N/A" ? [{text: 'PERM FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PERM FORUM: ' + nicknameF50, callback_data: 'F50'}];
                nicknameL50 = nicknameL50 === "N/A" ? [{text: 'PERM LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PERM LOGS: ' + nicknameL50, callback_data: 'L50'}];

                const spisokTechForLevel2Zam10 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF46,
                            nicknameL46,
                            nicknameF47,
                            nicknameL47,
                            nicknameF48,
                            nicknameL48,
                            nicknameF49,
                            nicknameL49,
                            nicknameF50,
                            nicknameL50,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam10)
            }

            if (server1 === 11) {
                let nicknameF51 = await processServerData(server1, 102);
                let nicknameL51 = await processServerData(server1, 103);
                let nicknameF52 = await processServerData(server1, 104);
                let nicknameL52 = await processServerData(server1, 105);
                let nicknameF53 = await processServerData(server1, 106);
                let nicknameL53 = await processServerData(server1, 107);
                let nicknameF54 = await processServerData(server1, 108);
                let nicknameL54 = await processServerData(server1, 109);
                let nicknameF55 = await processServerData(server1, 110);
                let nicknameL55 = await processServerData(server1, 111);

                nicknameF51 = nicknameF51 === "N/A" ? [{text: 'TULA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TULA FORUM: ' + nicknameF51, callback_data: 'F51'}];
                nicknameL51 = nicknameL51 === "N/A" ? [{text: 'TULA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TULA LOGS: ' + nicknameL51, callback_data: 'L51'}];
                nicknameF52 = nicknameF52 === "N/A" ? [{text: 'RYAZAN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RYAZAN FORUM: ' + nicknameF52, callback_data: 'F52'}];
                nicknameL52 = nicknameL52 === "N/A" ? [{text: 'RYAZAN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RYAZAN LOGS: ' + nicknameL52, callback_data: 'L52'}];
                nicknameF53 = nicknameF53 === "N/A" ? [{text: 'MURMANSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MURMANSK FORUM: ' + nicknameF53, callback_data: 'F53'}];
                nicknameL53 = nicknameL53 === "N/A" ? [{text: 'MURMANSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MURMANSK LOGS: ' + nicknameL53, callback_data: 'L53'}];
                nicknameF54 = nicknameF54 === "N/A" ? [{text: 'PENZA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PENZA FORUM: ' + nicknameF54, callback_data: 'F54'}];
                nicknameL54 = nicknameL54 === "N/A" ? [{text: 'PENZA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PENZA LOGS: ' + nicknameL54, callback_data: 'L54'}];
                nicknameF55 = nicknameF55 === "N/A" ? [{text: 'KURSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KURSK FORUM: ' + nicknameF55, callback_data: 'F55'}];
                nicknameL55 = nicknameL55 === "N/A" ? [{text: 'KURSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KURSK LOGS: ' + nicknameL55, callback_data: 'L55'}];

                const spisokTechForLevel2Zam11 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF51,
                            nicknameL51,
                            nicknameF52,
                            nicknameL52,
                            nicknameF53,
                            nicknameL53,
                            nicknameF54,
                            nicknameL54,
                            nicknameF55,
                            nicknameL55,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam11)
            }

            if (server1 === 12) {
                let nicknameF56 = await processServerData(server1, 112);
                let nicknameL56 = await processServerData(server1, 113);
                let nicknameF57 = await processServerData(server1, 114);
                let nicknameL57 = await processServerData(server1, 115);
                let nicknameF58 = await processServerData(server1, 116);
                let nicknameL58 = await processServerData(server1, 117);
                let nicknameF59 = await processServerData(server1, 118);
                let nicknameL59 = await processServerData(server1, 119);
                let nicknameF60 = await processServerData(server1, 120);
                let nicknameL60 = await processServerData(server1, 121);


                nicknameF56 = nicknameF56 === "N/A" ? [{text: 'ARKHANGELSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARKHANGELSK FORUM: ' + nicknameF56, callback_data: 'F56'}];
                nicknameL56 = nicknameL56 === "N/A" ? [{text: 'ARKHANGELSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARKHANGELSK LOGS: ' + nicknameL56, callback_data: 'L56'}];
                nicknameF57 = nicknameF57 === "N/A" ? [{text: 'ORENBURG FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORENBURG FORUM: ' + nicknameF57, callback_data: 'F57'}];
                nicknameL57 = nicknameL57 === "N/A" ? [{text: 'ORENBURG LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORENBURG LOGS: ' + nicknameL57, callback_data: 'L57'}];
                nicknameF58 = nicknameF58 === "N/A" ? [{text: 'KIROV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KIROV FORUM: ' + nicknameF58, callback_data: 'F58'}];
                nicknameL58 = nicknameL58 === "N/A" ? [{text: 'KIROV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KIROV LOGS: ' + nicknameL58, callback_data: 'L58'}];
                nicknameF59 = nicknameF59 === "N/A" ? [{text: 'KEMEROVO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KEMEROVO FORUM: ' + nicknameF59, callback_data: 'F59'}];
                nicknameL59 = nicknameL59 === "N/A" ? [{text: 'KEMEROVO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KEMEROVO LOGS: ' + nicknameL59, callback_data: 'L59'}];
                nicknameF60 = nicknameF60 === "N/A" ? [{text: 'TYUMEN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TYUMEN FORUM: ' + nicknameF60, callback_data: 'F60'}];
                nicknameL60 = nicknameL60 === "N/A" ? [{text: 'TYUMEN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TYUMEN LOGS: ' + nicknameL60, callback_data: 'L60'}];


                const spisokTechForLevel2Zam12 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF56,
                            nicknameL56,
                            nicknameF57,
                            nicknameL57,
                            nicknameF58,
                            nicknameL58,
                            nicknameF59,
                            nicknameL59,
                            nicknameF60,
                            nicknameL60,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam12)
            }

            if (server1 === 13) {
                let nicknameF61 = await processServerData(server1, 122);
                let nicknameL61 = await processServerData(server1, 123);
                let nicknameF62 = await processServerData(server1, 124);
                let nicknameL62 = await processServerData(server1, 125);
                let nicknameF63 = await processServerData(server1, 126);
                let nicknameL63 = await processServerData(server1, 127);
                let nicknameF64 = await processServerData(server1, 128);
                let nicknameL64 = await processServerData(server1, 129);
                let nicknameF65 = await processServerData(server1, 130);
                let nicknameL65 = await processServerData(server1, 131);

                nicknameF61 = nicknameF61 === "N/A" ? [{text: 'TOLYATTI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TOLYATTI FORUM: ' + nicknameF61, callback_data: 'F61'}];
                nicknameL61 = nicknameL61 === "N/A" ? [{text: 'TOLYATTI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TOLYATTI LOGS: ' + nicknameL61, callback_data: 'L61'}];
                nicknameF62 = nicknameF62 === "N/A" ? [{text: 'IVANOVO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IVANOVO FORUM: ' + nicknameF62, callback_data: 'F62'}];
                nicknameL62 = nicknameL62 === "N/A" ? [{text: 'IVANOVO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IVANOVO LOGS: ' + nicknameL62, callback_data: 'L62'}];
                nicknameF63 = nicknameF63 === "N/A" ? [{text: 'STAVROPOL FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'STAVROPOL FORUM: ' + nicknameF63, callback_data: 'F63'}];
                nicknameL63 = nicknameL63 === "N/A" ? [{text: 'STAVROPOL LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'STAVROPOL LOGS: ' + nicknameL63, callback_data: 'L63'}];
                nicknameF64 = nicknameF64 === "N/A" ? [{text: 'SMOLENSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SMOLENSK FORUM: ' + nicknameF64, callback_data: 'F64'}];
                nicknameL64 = nicknameL64 === "N/A" ? [{text: 'SMOLENSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SMOLENSK LOGS: ' + nicknameL64, callback_data: 'L64'}];
                nicknameF65 = nicknameF65 === "N/A" ? [{text: 'PSKOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PSKOV FORUM: ' + nicknameF65, callback_data: 'F65'}];
                nicknameL65 = nicknameL65 === "N/A" ? [{text: 'PSKOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PSKOV LOGS: ' + nicknameL65, callback_data: 'L65'}];

                const spisokTechForLevel2Zam13 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF61,
                            nicknameL61,
                            nicknameF62,
                            nicknameL62,
                            nicknameF63,
                            nicknameL63,
                            nicknameF64,
                            nicknameL64,
                            nicknameF65,
                            nicknameL65,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam13)
            }

            if (server1 === 14) {
                let nicknameF66 = await processServerData(server1, 132);
                let nicknameL66 = await processServerData(server1, 133);
                let nicknameF67 = await processServerData(server1, 134);
                let nicknameL67 = await processServerData(server1, 135);

                nicknameF66 = nicknameF66 === "N/A" ? [{text: 'BRYANSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BRYANSK FORUM: ' + nicknameF66, callback_data: 'F66'}];
                nicknameL66 = nicknameL66 === "N/A" ? [{text: 'BRYANSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BRYANSK LOGS: ' + nicknameL66, callback_data: 'L66'}];
                nicknameF67 = nicknameF67 === "N/A" ? [{text: 'OREL FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OREL FORUM: ' + nicknameF67, callback_data: 'F67'}];
                nicknameL67 = nicknameL67 === "N/A" ? [{text: 'OREL LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OREL LOGS: ' + nicknameL67, callback_data: 'L67'}];

                const spisokTechForLevel2Zam14 =  {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            nicknameF66,
                            nicknameL66,
                            nicknameF67,
                            nicknameL67,
                        ]
                    })
                };
                await bot.sendMessage(chatID, `Вам доступен просмотр только специалистов курируемых серверов.\n\nСписок технических специалистов:`, spisokTechForLevel2Zam14)
            }
        }

        if (level >= 3) {
            let nicknameF1 = await processServerData(server1, 2);
            let nicknameL1 = await processServerData(server1, 3);
            let nicknameF2 = await processServerData(server1, 4);
            let nicknameL2 = await processServerData(server1, 5);
            let nicknameF3 = await processServerData(server1, 6);
            let nicknameL3 = await processServerData(server1, 7);
            let nicknameF4 = await processServerData(server1, 8);
            let nicknameL4 = await processServerData(server1, 9);
            let nicknameF5 = await processServerData(server1, 10);
            let nicknameL5 = await processServerData(server1, 11);
            let nicknameF6 = await processServerData(server1, 12);
            let nicknameL6 = await processServerData(server1, 13);
            let nicknameF7 = await processServerData(server1, 14);
            let nicknameL7 = await processServerData(server1, 15);
            let nicknameF8 = await processServerData(server1, 16);
            let nicknameL8 = await processServerData(server1, 17);
            let nicknameF9 = await processServerData(server1, 18);
            let nicknameL9 = await processServerData(server1, 19);
            let nicknameF10 = await processServerData(server1, 20);
            let nicknameL10 = await processServerData(server1, 21);

            nicknameF1 = nicknameF1 === "N/A" ? [{text: 'RED FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED FORUM: ' + nicknameF1, callback_data: 'F1'}];
            nicknameL1 = nicknameL1 === "N/A" ? [{text: 'RED LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED LOGS: ' + nicknameL1, callback_data: 'L1'}];
            nicknameF2 = nicknameF2 === "N/A" ? [{text: 'GREEN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN FORUM: ' + nicknameF2, callback_data: 'F2'}];
            nicknameL2 = nicknameL2 === "N/A" ? [{text: 'GREEN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN LOGS: ' + nicknameL2, callback_data: 'L2'}];
            nicknameF3 = nicknameF3 === "N/A" ? [{text: 'BLUE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE FORUM: ' + nicknameF3, callback_data: 'F3'}];
            nicknameL3 = nicknameL3 === "N/A" ? [{text: 'BLUE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE LOGS: ' + nicknameL3, callback_data: 'L3'}];
            nicknameF4 = nicknameF4 === "N/A" ? [{text: 'YELLOW FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW FORUM: ' + nicknameF4, callback_data: 'F4'}];
            nicknameL4 = nicknameL4 === "N/A" ? [{text: 'YELLOW LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW LOGS: ' + nicknameL4, callback_data: 'L4'}];
            nicknameF5 = nicknameF5 === "N/A" ? [{text: 'ORANGE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE FORUM: ' + nicknameF5, callback_data: 'F5'}];
            nicknameL5 = nicknameL5 === "N/A" ? [{text: 'ORANGE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE LOGS: ' + nicknameL5, callback_data: 'L5'}];
            nicknameF6 = nicknameF6 === "N/A" ? [{text: 'PURPLE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE FORUM: ' + nicknameF6, callback_data: 'F6'}];
            nicknameL6 = nicknameL6 === "N/A" ? [{text: 'PURPLE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE LOGS: ' + nicknameL6, callback_data: 'L6'}];
            nicknameF7 = nicknameF7 === "N/A" ? [{text: 'LIME FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME FORUM: ' + nicknameF7, callback_data: 'F7'}];
            nicknameL7 = nicknameL7 === "N/A" ? [{text: 'LIME LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME LOGS: ' + nicknameL7, callback_data: 'L7'}];
            nicknameF8 = nicknameF8 === "N/A" ? [{text: 'PINK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK FORUM: ' + nicknameF8, callback_data: 'F8'}];
            nicknameL8 = nicknameL8 === "N/A" ? [{text: 'PINK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK LOGS: ' + nicknameL8, callback_data: 'L8'}];
            nicknameF9 = nicknameF9 === "N/A" ? [{text: 'CHERRY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY FORUM: ' + nicknameF9, callback_data: 'F9'}];
            nicknameL9 = nicknameL9 === "N/A" ? [{text: 'CHERRY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY LOGS: ' + nicknameL9, callback_data: 'L9'}];
            nicknameF10 = nicknameF10 === "N/A" ? [{text: 'BLACK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK FORUM: ' + nicknameF10, callback_data: 'F10'}];
            nicknameL10 = nicknameL10 === "N/A" ? [{text: 'BLACK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK LOGS: ' + nicknameL10, callback_data: 'L10'}];

            const spisokTechForAllMoreLvl3 =  {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        nicknameF1,
                        nicknameL1,
                        nicknameF2,
                        nicknameL2,
                        nicknameF3,
                        nicknameL3,
                        nicknameF4,
                        nicknameL4,
                        nicknameF5,
                        nicknameL5,
                        nicknameF6,
                        nicknameL6,
                        nicknameF7,
                        nicknameL7,
                        nicknameF8,
                        nicknameL8,
                        nicknameF9,
                        nicknameL9,
                        nicknameF10,
                        nicknameL10,
                        [{text: 'Далее', callback_data: 'CONT1'}]
                    ]
                })
            };
            await bot.deleteMessage(chatID, messageID);
            await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
        }
    }

    if (data === 'BACK') {
        let nicknameF1 = await processServerData(server1, 2);
        let nicknameL1 = await processServerData(server1, 3);
        let nicknameF2 = await processServerData(server1, 4);
        let nicknameL2 = await processServerData(server1, 5);
        let nicknameF3 = await processServerData(server1, 6);
        let nicknameL3 = await processServerData(server1, 7);
        let nicknameF4 = await processServerData(server1, 8);
        let nicknameL4 = await processServerData(server1, 9);
        let nicknameF5 = await processServerData(server1, 10);
        let nicknameL5 = await processServerData(server1, 11);
        let nicknameF6 = await processServerData(server1, 12);
        let nicknameL6 = await processServerData(server1, 13);
        let nicknameF7 = await processServerData(server1, 14);
        let nicknameL7 = await processServerData(server1, 15);
        let nicknameF8 = await processServerData(server1, 16);
        let nicknameL8 = await processServerData(server1, 17);
        let nicknameF9 = await processServerData(server1, 18);
        let nicknameL9 = await processServerData(server1, 19);
        let nicknameF10 = await processServerData(server1, 20);
        let nicknameL10 = await processServerData(server1, 21);

        nicknameF1 = nicknameF1 === "N/A" ? [{text: 'RED FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED FORUM: ' + nicknameF1, callback_data: 'F1'}];
        nicknameL1 = nicknameL1 === "N/A" ? [{text: 'RED LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RED LOGS: ' + nicknameL1, callback_data: 'L1'}];
        nicknameF2 = nicknameF2 === "N/A" ? [{text: 'GREEN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN FORUM: ' + nicknameF2, callback_data: 'F2'}];
        nicknameL2 = nicknameL2 === "N/A" ? [{text: 'GREEN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GREEN LOGS: ' + nicknameL2, callback_data: 'L2'}];
        nicknameF3 = nicknameF3 === "N/A" ? [{text: 'BLUE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE FORUM: ' + nicknameF3, callback_data: 'F3'}];
        nicknameL3 = nicknameL3 === "N/A" ? [{text: 'BLUE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLUE LOGS: ' + nicknameL3, callback_data: 'L3'}];
        nicknameF4 = nicknameF4 === "N/A" ? [{text: 'YELLOW FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW FORUM: ' + nicknameF4, callback_data: 'F4'}];
        nicknameL4 = nicknameL4 === "N/A" ? [{text: 'YELLOW LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'YELLOW LOGS: ' + nicknameL4, callback_data: 'L4'}];
        nicknameF5 = nicknameF5 === "N/A" ? [{text: 'ORANGE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE FORUM: ' + nicknameF5, callback_data: 'F5'}];
        nicknameL5 = nicknameL5 === "N/A" ? [{text: 'ORANGE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORANGE LOGS: ' + nicknameL5, callback_data: 'L5'}];
        nicknameF6 = nicknameF6 === "N/A" ? [{text: 'PURPLE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE FORUM: ' + nicknameF6, callback_data: 'F6'}];
        nicknameL6 = nicknameL6 === "N/A" ? [{text: 'PURPLE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PURPLE LOGS: ' + nicknameL6, callback_data: 'L6'}];
        nicknameF7 = nicknameF7 === "N/A" ? [{text: 'LIME FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME FORUM: ' + nicknameF7, callback_data: 'F7'}];
        nicknameL7 = nicknameL7 === "N/A" ? [{text: 'LIME LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'LIME LOGS: ' + nicknameL7, callback_data: 'L7'}];
        nicknameF8 = nicknameF8 === "N/A" ? [{text: 'PINK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK FORUM: ' + nicknameF8, callback_data: 'F8'}];
        nicknameL8 = nicknameL8 === "N/A" ? [{text: 'PINK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PINK LOGS: ' + nicknameL8, callback_data: 'L8'}];
        nicknameF9 = nicknameF9 === "N/A" ? [{text: 'CHERRY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY FORUM: ' + nicknameF9, callback_data: 'F9'}];
        nicknameL9 = nicknameL9 === "N/A" ? [{text: 'CHERRY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHERRY LOGS: ' + nicknameL9, callback_data: 'L9'}];
        nicknameF10 = nicknameF10 === "N/A" ? [{text: 'BLACK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK FORUM: ' + nicknameF10, callback_data: 'F10'}];
        nicknameL10 = nicknameL10 === "N/A" ? [{text: 'BLACK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BLACK LOGS: ' + nicknameL10, callback_data: 'L10'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF1,
                    nicknameL1,
                    nicknameF2,
                    nicknameL2,
                    nicknameF3,
                    nicknameL3,
                    nicknameF4,
                    nicknameL4,
                    nicknameF5,
                    nicknameL5,
                    nicknameF6,
                    nicknameL6,
                    nicknameF7,
                    nicknameL7,
                    nicknameF8,
                    nicknameL8,
                    nicknameF9,
                    nicknameL9,
                    nicknameF10,
                    nicknameL10,
                    [{text: 'Далее', callback_data: 'CONT1'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT1' || data === 'BACK1') {
        let nicknameF11 = await processServerData(server1, 22);
        let nicknameL11 = await processServerData(server1, 23);
        let nicknameF12 = await processServerData(server1, 24);
        let nicknameL12 = await processServerData(server1, 25);
        let nicknameF13 = await processServerData(server1, 26);
        let nicknameL13 = await processServerData(server1, 27);
        let nicknameF14 = await processServerData(server1, 28);
        let nicknameL14 = await processServerData(server1, 29);
        let nicknameF15 = await processServerData(server1, 30);
        let nicknameL15 = await processServerData(server1, 31);
        let nicknameF16 = await processServerData(server1, 32);
        let nicknameL16 = await processServerData(server1, 33);
        let nicknameF17 = await processServerData(server1, 34);
        let nicknameL17 = await processServerData(server1, 35);
        let nicknameF18 = await processServerData(server1, 36);
        let nicknameL18 = await processServerData(server1, 37);
        let nicknameF19 = await processServerData(server1, 38);
        let nicknameL19 = await processServerData(server1, 39);
        let nicknameF20 = await processServerData(server1, 40);
        let nicknameL20 = await processServerData(server1, 41);

        nicknameF11 = nicknameF11 === "N/A" ? [{text: 'INDIGO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'INDIGO FORUM: ' + nicknameF11, callback_data: 'F11'}];
        nicknameL11 = nicknameL11 === "N/A" ? [{text: 'INDIGO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'INDIGO LOGS: ' + nicknameL11, callback_data: 'L11'}];
        nicknameF12 = nicknameF12 === "N/A" ? [{text: 'WHITE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'WHITE FORUM: ' + nicknameF12, callback_data: 'F12'}];
        nicknameL12 = nicknameL12 === "N/A" ? [{text: 'WHITE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'WHITE LOGS: ' + nicknameL12, callback_data: 'L12'}];
        nicknameF13 = nicknameF13 === "N/A" ? [{text: 'MAGENTA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAGENTA FORUM: ' + nicknameF13, callback_data: 'F13'}];
        nicknameL13 = nicknameL13 === "N/A" ? [{text: 'MAGENTA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAGENTA LOGS: ' + nicknameL13, callback_data: 'L13'}];
        nicknameF14 = nicknameF14 === "N/A" ? [{text: 'CRIMSON FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CRIMSON FORUM: ' + nicknameF14, callback_data: 'F14'}];
        nicknameL14 = nicknameL14 === "N/A" ? [{text: 'CRIMSON LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CRIMSON LOGS: ' + nicknameL14, callback_data: 'L14'}];
        nicknameF15 = nicknameF15 === "N/A" ? [{text: 'GOLD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GOLD FORUM: ' + nicknameF15, callback_data: 'F15'}];
        nicknameL15 = nicknameL15 === "N/A" ? [{text: 'GOLD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GOLD LOGS: ' + nicknameL15, callback_data: 'L15'}];
        nicknameF16 = nicknameF16 === "N/A" ? [{text: 'AZURE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AZURE FORUM: ' + nicknameF16, callback_data: 'F16'}];
        nicknameL16 = nicknameL16 === "N/A" ? [{text: 'AZURE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AZURE LOGS: ' + nicknameL16, callback_data: 'L16'}];
        nicknameF17 = nicknameF17 === "N/A" ? [{text: 'PLATINUM FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PLATINUM FORUM: ' + nicknameF17, callback_data: 'F17'}];
        nicknameL17 = nicknameL17 === "N/A" ? [{text: 'PLATINUM LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PLATINUM LOGS: ' + nicknameL17, callback_data: 'L17'}];
        nicknameF18 = nicknameF18 === "N/A" ? [{text: 'AQUA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AQUA FORUM: ' + nicknameF18, callback_data: 'F18'}];
        nicknameL18 = nicknameL18 === "N/A" ? [{text: 'AQUA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'AQUA LOGS: ' + nicknameL18, callback_data: 'L18'}];
        nicknameF19 = nicknameF19 === "N/A" ? [{text: 'GRAY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GRAY FORUM: ' + nicknameF19, callback_data: 'F19'}];
        nicknameL19 = nicknameL19 === "N/A" ? [{text: 'GRAY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GRAY LOGS: ' + nicknameL19, callback_data: 'L19'}];
        nicknameF20 = nicknameF20 === "N/A" ? [{text: 'ICE FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ICE FORUM: ' + nicknameF20, callback_data: 'F20'}];
        nicknameL20 = nicknameL20 === "N/A" ? [{text: 'ICE LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ICE LOGS: ' + nicknameL20, callback_data: 'L20'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF11,
                    nicknameL11,
                    nicknameF12,
                    nicknameL12,
                    nicknameF13,
                    nicknameL13,
                    nicknameF14,
                    nicknameL14,
                    nicknameF15,
                    nicknameL15,
                    nicknameF16,
                    nicknameL16,
                    nicknameF17,
                    nicknameL17,
                    nicknameF18,
                    nicknameL18,
                    nicknameF19,
                    nicknameL19,
                    nicknameF20,
                    nicknameL20,
                    [{text: 'Далее', callback_data: 'CONT2'}],
                    [{text: 'Назад', callback_data: 'BACK'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT2' || data === 'BACK2') {
        let nicknameF21 = await processServerData(server1, 42);
        let nicknameL21 = await processServerData(server1, 43);
        let nicknameF22 = await processServerData(server1, 44);
        let nicknameL22 = await processServerData(server1, 45);
        let nicknameF23 = await processServerData(server1, 46);
        let nicknameL23 = await processServerData(server1, 47);
        let nicknameF24 = await processServerData(server1, 48);
        let nicknameL24 = await processServerData(server1, 49);
        let nicknameF25 = await processServerData(server1, 50);
        let nicknameL25 = await processServerData(server1, 51);
        let nicknameF26 = await processServerData(server1, 52);
        let nicknameL26 = await processServerData(server1, 53);
        let nicknameF27 = await processServerData(server1, 54);
        let nicknameL27 = await processServerData(server1, 55);
        let nicknameF28 = await processServerData(server1, 56);
        let nicknameL28 = await processServerData(server1, 57);
        let nicknameF29 = await processServerData(server1, 58);
        let nicknameL29 = await processServerData(server1, 59);
        let nicknameF30 = await processServerData(server1, 60);
        let nicknameL30 = await processServerData(server1, 61);

        nicknameF21 = nicknameF21 === "N/A" ? [{text: 'CHILLI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHILLI FORUM: ' + nicknameF21, callback_data: 'F21'}];
        nicknameL21 = nicknameL21 === "N/A" ? [{text: 'CHILLI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHILLI LOGS: ' + nicknameL21, callback_data: 'L21'}];
        nicknameF22 = nicknameF22 === "N/A" ? [{text: 'CHOCO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHOCO FORUM: ' + nicknameF22, callback_data: 'F22'}];
        nicknameL22 = nicknameL22 === "N/A" ? [{text: 'CHOCO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHOCO LOGS: ' + nicknameL22, callback_data: 'L22'}];
        nicknameF23 = nicknameF23 === "N/A" ? [{text: 'MOSCOW FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MOSCOW FORUM: ' + nicknameF23, callback_data: 'F23'}];
        nicknameL23 = nicknameL23 === "N/A" ? [{text: 'MOSCOW LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MOSCOW LOGS: ' + nicknameL23, callback_data: 'L23'}];
        nicknameF24 = nicknameF24 === "N/A" ? [{text: 'SPB FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SPB FORUM: ' + nicknameF24, callback_data: 'F24'}];
        nicknameL24 = nicknameL24 === "N/A" ? [{text: 'SPB LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SPB LOGS: ' + nicknameL24, callback_data: 'L24'}];
        nicknameF25 = nicknameF25 === "N/A" ? [{text: 'UFA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'UFA FORUM: ' + nicknameF25, callback_data: 'F25'}];
        nicknameL25 = nicknameL25 === "N/A" ? [{text: 'UFA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'UFA LOGS: ' + nicknameL25, callback_data: 'L25'}];
        nicknameF26 = nicknameF26 === "N/A" ? [{text: 'SOCHI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SOCHI FORUM: ' + nicknameF26, callback_data: 'F26'}];
        nicknameL26 = nicknameL26 === "N/A" ? [{text: 'SOCHI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SOCHI LOGS: ' + nicknameL26, callback_data: 'L26'}];
        nicknameF27 = nicknameF27 === "N/A" ? [{text: 'KAZAN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KAZAN FORUM: ' + nicknameF27, callback_data: 'F27'}];
        nicknameL27 = nicknameL27 === "N/A" ? [{text: 'KAZAN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KAZAN LOGS: ' + nicknameL27, callback_data: 'L27'}];
        nicknameF28 = nicknameF28 === "N/A" ? [{text: 'SAMARA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SAMARA FORUM: ' + nicknameF28, callback_data: 'F28'}];
        nicknameL28 = nicknameL28 === "N/A" ? [{text: 'SAMARA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SAMARA LOGS: ' + nicknameL28, callback_data: 'L28'}];
        nicknameF29 = nicknameF29 === "N/A" ? [{text: 'ROSTOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ROSTOV FORUM: ' + nicknameF29, callback_data: 'F29'}];
        nicknameL29 = nicknameL29 === "N/A" ? [{text: 'ROSTOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ROSTOV LOGS: ' + nicknameL29, callback_data: 'L29'}];
        nicknameF30 = nicknameF30 === "N/A" ? [{text: 'ANAPA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ANAPA FORUM: ' + nicknameF30, callback_data: 'F30'}];
        nicknameL30 = nicknameL30 === "N/A" ? [{text: 'ANAPA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ANAPA LOGS: ' + nicknameL30, callback_data: 'L30'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF21,
                    nicknameL21,
                    nicknameF22,
                    nicknameL22,
                    nicknameF23,
                    nicknameL23,
                    nicknameF24,
                    nicknameL24,
                    nicknameF25,
                    nicknameL25,
                    nicknameF26,
                    nicknameL26,
                    nicknameF27,
                    nicknameL27,
                    nicknameF28,
                    nicknameL28,
                    nicknameF29,
                    nicknameL29,
                    nicknameF30,
                    nicknameL30,
                    [{text: 'Далее', callback_data: 'CONT3'}],
                    [{text: 'Назад', callback_data: 'BACK1'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT3' || data === 'BACK3') {
        let nicknameF31 = await processServerData(server1, 62);
        let nicknameL31 = await processServerData(server1, 63);
        let nicknameF32 = await processServerData(server1, 64);
        let nicknameL32 = await processServerData(server1, 65);
        let nicknameF33 = await processServerData(server1, 66);
        let nicknameL33 = await processServerData(server1, 67);
        let nicknameF34 = await processServerData(server1, 68);
        let nicknameL34 = await processServerData(server1, 69);
        let nicknameF35 = await processServerData(server1, 70);
        let nicknameL35 = await processServerData(server1, 71);
        let nicknameF36 = await processServerData(server1, 72);
        let nicknameL36 = await processServerData(server1, 73);
        let nicknameF37 = await processServerData(server1, 74);
        let nicknameL37 = await processServerData(server1, 75);
        let nicknameF38 = await processServerData(server1, 76);
        let nicknameL38 = await processServerData(server1, 77);
        let nicknameF39 = await processServerData(server1, 78);
        let nicknameL39 = await processServerData(server1, 79);
        let nicknameF40 = await processServerData(server1, 80);
        let nicknameL40 = await processServerData(server1, 81);

        nicknameF31 = nicknameF31 === "N/A" ? [{text: 'EKB FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'EKB FORUM: ' + nicknameF31, callback_data: 'F31'}];
        nicknameL31 = nicknameL31 === "N/A" ? [{text: 'EKB LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'EKB LOGS: ' + nicknameL31, callback_data: 'L31'}];
        nicknameF32 = nicknameF32 === "N/A" ? [{text: 'KRASNODAR FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNODAR FORUM: ' + nicknameF32, callback_data: 'F32'}];
        nicknameL32 = nicknameL32 === "N/A" ? [{text: 'KRASNODAR LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNODAR LOGS: ' + nicknameL32, callback_data: 'L32'}];
        nicknameF33 = nicknameF33 === "N/A" ? [{text: 'ARZAMAS FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARZAMAS FORUM: ' + nicknameF33, callback_data: 'F33'}];
        nicknameL33 = nicknameL33 === "N/A" ? [{text: 'ARZAMAS LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARZAMAS LOGS: ' + nicknameL33, callback_data: 'L33'}];
        nicknameF34 = nicknameF34 === "N/A" ? [{text: 'NOVOSIBIRSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'NOVOSIBIRSK FORUM: ' + nicknameF34, callback_data: 'F34'}];
        nicknameL34 = nicknameL34 === "N/A" ? [{text: 'NOVOSIBIRSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'NOVOSIBIRSK LOGS: ' + nicknameL34, callback_data: 'L34'}];
        nicknameF35 = nicknameF35 === "N/A" ? [{text: 'GROZNY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GROZNY FORUM: ' + nicknameF35, callback_data: 'F35'}];
        nicknameL35 = nicknameL35 === "N/A" ? [{text: 'GROZNY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'GROZNY LOGS: ' + nicknameL35, callback_data: 'L35'}];
        nicknameF36 = nicknameF36 === "N/A" ? [{text: 'SARATOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SARATOV FORUM: ' + nicknameF36, callback_data: 'F36'}];
        nicknameL36 = nicknameL36 === "N/A" ? [{text: 'SARATOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SARATOV LOGS: ' + nicknameL36, callback_data: 'L36'}];
        nicknameF37 = nicknameF37 === "N/A" ? [{text: 'OMSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OMSK FORUM: ' + nicknameF37, callback_data: 'F37'}];
        nicknameL37 = nicknameL37 === "N/A" ? [{text: 'OMSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OMSK LOGS: ' + nicknameL37, callback_data: 'L37'}];
        nicknameF38 = nicknameF38 === "N/A" ? [{text: 'IRKUTSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IRKUTSK FORUM: ' + nicknameF38, callback_data: 'F38'}];
        nicknameL38 = nicknameL38 === "N/A" ? [{text: 'IRKUTSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IRKUTSK LOGS: ' + nicknameL38, callback_data: 'L38'}];
        nicknameF39 = nicknameF39 === "N/A" ? [{text: 'VOLGOGRAD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VOLGOGRAD FORUM: ' + nicknameF39, callback_data: 'F39'}];
        nicknameL39 = nicknameL39 === "N/A" ? [{text: 'VOLGOGRAD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VOLGOGRAD LOGS: ' + nicknameL39, callback_data: 'L39'}];
        nicknameF40 = nicknameF40 === "N/A" ? [{text: 'VORONEZH FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VORONEZH FORUM: ' + nicknameF40, callback_data: 'F40'}];
        nicknameL40 = nicknameL40 === "N/A" ? [{text: 'VORONEZH LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VORONEZH LOGS: ' + nicknameL40, callback_data: 'L40'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF31,
                    nicknameL31,
                    nicknameF32,
                    nicknameL32,
                    nicknameF33,
                    nicknameL33,
                    nicknameF34,
                    nicknameL34,
                    nicknameF35,
                    nicknameL35,
                    nicknameF36,
                    nicknameL36,
                    nicknameF37,
                    nicknameL37,
                    nicknameF38,
                    nicknameL38,
                    nicknameF39,
                    nicknameL39,
                    nicknameF40,
                    nicknameL40,
                    [{text: 'Далее', callback_data: 'CONT4'}],
                    [{text: 'Назад', callback_data: 'BACK2'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT4' || data === 'BACK4') {
        let nicknameF41 = await processServerData(server1, 82);
        let nicknameL41 = await processServerData(server1, 83);
        let nicknameF42 = await processServerData(server1, 84);
        let nicknameL42 = await processServerData(server1, 85);
        let nicknameF43 = await processServerData(server1, 86);
        let nicknameL43 = await processServerData(server1, 87);
        let nicknameF44 = await processServerData(server1, 88);
        let nicknameL44 = await processServerData(server1, 89);
        let nicknameF45 = await processServerData(server1, 90);
        let nicknameL45 = await processServerData(server1, 91);
        let nicknameF46 = await processServerData(server1, 92);
        let nicknameL46 = await processServerData(server1, 93);
        let nicknameF47 = await processServerData(server1, 94);
        let nicknameL47 = await processServerData(server1, 95);
        let nicknameF48 = await processServerData(server1, 96);
        let nicknameL48 = await processServerData(server1, 97);
        let nicknameF49 = await processServerData(server1, 98);
        let nicknameL49 = await processServerData(server1, 99);
        let nicknameF50 = await processServerData(server1, 100);
        let nicknameL50 = await processServerData(server1, 101);

        nicknameF41 = nicknameF41 === "N/A" ? [{text: 'BELGOROD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BELGOROD FORUM: ' + nicknameF41, callback_data: 'F41'}];
        nicknameL41 = nicknameL41 === "N/A" ? [{text: 'BELGOROD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BELGOROD LOGS: ' + nicknameL41, callback_data: 'L41'}];
        nicknameF42 = nicknameF42 === "N/A" ? [{text: 'MAKHACHKALA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAKHACHKALA FORUM: ' + nicknameF42, callback_data: 'F42'}];
        nicknameL42 = nicknameL42 === "N/A" ? [{text: 'MAKHACHKALA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MAKHACHKALA LOGS: ' + nicknameL42, callback_data: 'L42'}];
        nicknameF43 = nicknameF43 === "N/A" ? [{text: 'VLADIKAVKAZ FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIKAVKAZ FORUM: ' + nicknameF43, callback_data: 'F43'}];
        nicknameL43 = nicknameL43 === "N/A" ? [{text: 'VLADIKAVKAZ LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIKAVKAZ LOGS: ' + nicknameL43, callback_data: 'L43'}];
        nicknameF44 = nicknameF44 === "N/A" ? [{text: 'VLADIVOSTOK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIVOSTOK FORUM: ' + nicknameF44, callback_data: 'F44'}];
        nicknameL44 = nicknameL44 === "N/A" ? [{text: 'VLADIVOSTOK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'VLADIVOSTOK LOGS: ' + nicknameL44, callback_data: 'L44'}];
        nicknameF45 = nicknameF45 === "N/A" ? [{text: 'KALININGRAD FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KALININGRAD FORUM: ' + nicknameF45, callback_data: 'F45'}];
        nicknameL45 = nicknameL45 === "N/A" ? [{text: 'KALININGRAD LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KALININGRAD LOGS: ' + nicknameL45, callback_data: 'L45'}];
        nicknameF46 = nicknameF46 === "N/A" ? [{text: 'CHELYABINSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHELYABINSK FORUM: ' + nicknameF46, callback_data: 'F46'}];
        nicknameL46 = nicknameL46 === "N/A" ? [{text: 'CHELYABINSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHELYABINSK LOGS: ' + nicknameL46, callback_data: 'L46'}];
        nicknameF47 = nicknameF47 === "N/A" ? [{text: 'KRASNOYARSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNOYARSK FORUM: ' + nicknameF47, callback_data: 'F47'}];
        nicknameL47 = nicknameL47 === "N/A" ? [{text: 'KRASNOYARSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KRASNOYARSK LOGS: ' + nicknameL47, callback_data: 'L47'}];
        nicknameF48 = nicknameF48 === "N/A" ? [{text: 'CHEBOKSARY FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHEBOKSARY FORUM: ' + nicknameF48, callback_data: 'F48'}];
        nicknameL48 = nicknameL48 === "N/A" ? [{text: 'CHEBOKSARY LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'CHEBOKSARY LOGS: ' + nicknameL48, callback_data: 'L48'}];
        nicknameF49 = nicknameF49 === "N/A" ? [{text: 'KHABAROVSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KHABAROVSK FORUM: ' + nicknameF49, callback_data: 'F49'}];
        nicknameL49 = nicknameL49 === "N/A" ? [{text: 'KHABAROVSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KHABAROVSK LOGS: ' + nicknameL49, callback_data: 'L49'}];
        nicknameF50 = nicknameF50 === "N/A" ? [{text: 'PERM FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PERM FORUM: ' + nicknameF50, callback_data: 'F50'}];
        nicknameL50 = nicknameL50 === "N/A" ? [{text: 'PERM LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PERM LOGS: ' + nicknameL50, callback_data: 'L50'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF41,
                    nicknameL41,
                    nicknameF42,
                    nicknameL42,
                    nicknameF43,
                    nicknameL43,
                    nicknameF44,
                    nicknameL44,
                    nicknameF45,
                    nicknameL45,
                    nicknameF46,
                    nicknameL46,
                    nicknameF47,
                    nicknameL47,
                    nicknameF48,
                    nicknameL48,
                    nicknameF49,
                    nicknameL49,
                    nicknameF50,
                    nicknameL50,
                    [{text: 'Далее', callback_data: 'CONT5'}],
                    [{text: 'Назад', callback_data: 'BACK3'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT5' || data === 'BACK5') {
        let nicknameF51 = await processServerData(server1, 102);
        let nicknameL51 = await processServerData(server1, 103);
        let nicknameF52 = await processServerData(server1, 104);
        let nicknameL52 = await processServerData(server1, 105);
        let nicknameF53 = await processServerData(server1, 106);
        let nicknameL53 = await processServerData(server1, 107);
        let nicknameF54 = await processServerData(server1, 108);
        let nicknameL54 = await processServerData(server1, 109);
        let nicknameF55 = await processServerData(server1, 110);
        let nicknameL55 = await processServerData(server1, 111);
        let nicknameF56 = await processServerData(server1, 112);
        let nicknameL56 = await processServerData(server1, 113);
        let nicknameF57 = await processServerData(server1, 114);
        let nicknameL57 = await processServerData(server1, 115);
        let nicknameF58 = await processServerData(server1, 116);
        let nicknameL58 = await processServerData(server1, 117);
        let nicknameF59 = await processServerData(server1, 118);
        let nicknameL59 = await processServerData(server1, 119);
        let nicknameF60 = await processServerData(server1, 120);
        let nicknameL60 = await processServerData(server1, 121);

        nicknameF51 = nicknameF51 === "N/A" ? [{text: 'TULA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TULA FORUM: ' + nicknameF51, callback_data: 'F51'}];
        nicknameL51 = nicknameL51 === "N/A" ? [{text: 'TULA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TULA LOGS: ' + nicknameL51, callback_data: 'L51'}];
        nicknameF52 = nicknameF52 === "N/A" ? [{text: 'RYAZAN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RYAZAN FORUM: ' + nicknameF52, callback_data: 'F52'}];
        nicknameL52 = nicknameL52 === "N/A" ? [{text: 'RYAZAN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'RYAZAN LOGS: ' + nicknameL52, callback_data: 'L52'}];
        nicknameF53 = nicknameF53 === "N/A" ? [{text: 'MURMANSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MURMANSK FORUM: ' + nicknameF53, callback_data: 'F53'}];
        nicknameL53 = nicknameL53 === "N/A" ? [{text: 'MURMANSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'MURMANSK LOGS: ' + nicknameL53, callback_data: 'L53'}];
        nicknameF54 = nicknameF54 === "N/A" ? [{text: 'PENZA FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PENZA FORUM: ' + nicknameF54, callback_data: 'F54'}];
        nicknameL54 = nicknameL54 === "N/A" ? [{text: 'PENZA LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PENZA LOGS: ' + nicknameL54, callback_data: 'L54'}];
        nicknameF55 = nicknameF55 === "N/A" ? [{text: 'KURSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KURSK FORUM: ' + nicknameF55, callback_data: 'F55'}];
        nicknameL55 = nicknameL55 === "N/A" ? [{text: 'KURSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KURSK LOGS: ' + nicknameL55, callback_data: 'L55'}];
        nicknameF56 = nicknameF56 === "N/A" ? [{text: 'ARKHANGELSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARKHANGELSK FORUM: ' + nicknameF56, callback_data: 'F56'}];
        nicknameL56 = nicknameL56 === "N/A" ? [{text: 'ARKHANGELSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ARKHANGELSK LOGS: ' + nicknameL56, callback_data: 'L56'}];
        nicknameF57 = nicknameF57 === "N/A" ? [{text: 'ORENBURG FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORENBURG FORUM: ' + nicknameF57, callback_data: 'F57'}];
        nicknameL57 = nicknameL57 === "N/A" ? [{text: 'ORENBURG LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'ORENBURG LOGS: ' + nicknameL57, callback_data: 'L57'}];
        nicknameF58 = nicknameF58 === "N/A" ? [{text: 'KIROV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KIROV FORUM: ' + nicknameF58, callback_data: 'F58'}];
        nicknameL58 = nicknameL58 === "N/A" ? [{text: 'KIROV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KIROV LOGS: ' + nicknameL58, callback_data: 'L58'}];
        nicknameF59 = nicknameF59 === "N/A" ? [{text: 'KEMEROVO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KEMEROVO FORUM: ' + nicknameF59, callback_data: 'F59'}];
        nicknameL59 = nicknameL59 === "N/A" ? [{text: 'KEMEROVO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'KEMEROVO LOGS: ' + nicknameL59, callback_data: 'L59'}];
        nicknameF60 = nicknameF60 === "N/A" ? [{text: 'TYUMEN FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TYUMEN FORUM: ' + nicknameF60, callback_data: 'F60'}];
        nicknameL60 = nicknameL60 === "N/A" ? [{text: 'TYUMEN LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TYUMEN LOGS: ' + nicknameL60, callback_data: 'L60'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF51,
                    nicknameL51,
                    nicknameF52,
                    nicknameL52,
                    nicknameF53,
                    nicknameL53,
                    nicknameF54,
                    nicknameL54,
                    nicknameF55,
                    nicknameL55,
                    nicknameF56,
                    nicknameL56,
                    nicknameF57,
                    nicknameL57,
                    nicknameF58,
                    nicknameL58,
                    nicknameF59,
                    nicknameL59,
                    nicknameF60,
                    nicknameL60,
                    [{text: 'Далее', callback_data: 'CONT6'}],
                    [{text: 'Назад', callback_data: 'BACK4'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'CONT6') {
        let nicknameF61 = await processServerData(server1, 122);
        let nicknameL61 = await processServerData(server1, 123);
        let nicknameF62 = await processServerData(server1, 124);
        let nicknameL62 = await processServerData(server1, 125);
        let nicknameF63 = await processServerData(server1, 126);
        let nicknameL63 = await processServerData(server1, 127);
        let nicknameF64 = await processServerData(server1, 128);
        let nicknameL64 = await processServerData(server1, 129);
        let nicknameF65 = await processServerData(server1, 130);
        let nicknameL65 = await processServerData(server1, 131);
        let nicknameF66 = await processServerData(server1, 132);
        let nicknameL66 = await processServerData(server1, 133);
        let nicknameF67 = await processServerData(server1, 134);
        let nicknameL67 = await processServerData(server1, 135);

        nicknameF61 = nicknameF61 === "N/A" ? [{text: 'TOLYATTI FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TOLYATTI FORUM: ' + nicknameF61, callback_data: 'F61'}];
        nicknameL61 = nicknameL61 === "N/A" ? [{text: 'TOLYATTI LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'TOLYATTI LOGS: ' + nicknameL61, callback_data: 'L61'}];
        nicknameF62 = nicknameF62 === "N/A" ? [{text: 'IVANOVO FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IVANOVO FORUM: ' + nicknameF62, callback_data: 'F62'}];
        nicknameL62 = nicknameL62 === "N/A" ? [{text: 'IVANOVO LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'IVANOVO LOGS: ' + nicknameL62, callback_data: 'L62'}];
        nicknameF63 = nicknameF63 === "N/A" ? [{text: 'STAVROPOL FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'STAVROPOL FORUM: ' + nicknameF63, callback_data: 'F63'}];
        nicknameL63 = nicknameL63 === "N/A" ? [{text: 'STAVROPOL LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'STAVROPOL LOGS: ' + nicknameL63, callback_data: 'L63'}];
        nicknameF64 = nicknameF64 === "N/A" ? [{text: 'SMOLENSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SMOLENSK FORUM: ' + nicknameF64, callback_data: 'F64'}];
        nicknameL64 = nicknameL64 === "N/A" ? [{text: 'SMOLENSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'SMOLENSK LOGS: ' + nicknameL64, callback_data: 'L64'}];
        nicknameF65 = nicknameF65 === "N/A" ? [{text: 'PSKOV FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PSKOV FORUM: ' + nicknameF65, callback_data: 'F65'}];
        nicknameL65 = nicknameL65 === "N/A" ? [{text: 'PSKOV LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'PSKOV LOGS: ' + nicknameL65, callback_data: 'L65'}];
        nicknameF66 = nicknameF66 === "N/A" ? [{text: 'BRYANSK FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BRYANSK FORUM: ' + nicknameF66, callback_data: 'F66'}];
        nicknameL66 = nicknameL66 === "N/A" ? [{text: 'BRYANSK LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'BRYANSK LOGS: ' + nicknameL66, callback_data: 'L66'}];
        nicknameF67 = nicknameF67 === "N/A" ? [{text: 'OREL FORUM: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OREL FORUM: ' + nicknameF67, callback_data: 'F67'}];
        nicknameL67 = nicknameL67 === "N/A" ? [{text: 'OREL LOGS: Отсутствует специалист', callback_data: 'TechNone'}] : [{text: 'OREL LOGS: ' + nicknameL67, callback_data: 'L67'}];

        const spisokTechForAllMoreLvl3 =  {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    nicknameF61,
                    nicknameL61,
                    nicknameF62,
                    nicknameL62,
                    nicknameF63,
                    nicknameL63,
                    nicknameF64,
                    nicknameL64,
                    nicknameF65,
                    nicknameL65,
                    nicknameF66,
                    nicknameL66,
                    nicknameF67,
                    nicknameL67,
                    [{text: 'Назад', callback_data: 'BACK5'}]
                ]
            })
        };
        await bot.deleteMessage(chatID, messageID);
        await bot.sendMessage(chatID, `Вам доступен просмотр всех специалистов.\n\nСписок технических специалистов:`, spisokTechForAllMoreLvl3)
    }

    if (data === 'F1') {
        let rowIndex = 2
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF1Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF1Btn)
        }
    }

    if (data === 'L1') {
        let rowIndex = 3
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL1Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL1Btn)
        }
    }

    if (data === 'F2') {
        let rowIndex = 4
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF2Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF2Btn)
        }
    }

    if (data === 'L2') {
        let rowIndex = 5
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL2Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL2Btn)
        }
    }

    if (data === 'F3') {
        let rowIndex = 6
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF3Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF3Btn)
        }
    }

    if (data === 'L3') {
        let rowIndex = 7
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL3Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL3Btn)
        }
    }

    if (data === 'F4') {
        let rowIndex = 8
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF4Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF4Btn)
        }
    }

    if (data === 'L4') {
        let rowIndex = 9
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL4Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL4Btn)
        }
    }

    if (data === 'F5') {
        let rowIndex = 10
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF5Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF5Btn)
        }
    }

    if (data === 'L5') {
        let rowIndex = 11
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 1) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL5Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL5Btn)
        }
    }

    if (data === 'F6') {
        let rowIndex = 12
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF6Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF6Btn)
        }
    }

    if (data === 'L6') {
        let rowIndex = 13
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL6Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL6Btn)
        }
    }

    if (data === 'F7') {
        let rowIndex = 14
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF7Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF7Btn)
        }
    }

    if (data === 'L7') {
        let rowIndex = 15
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL7Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL7Btn)
        }
    }

    if (data === 'F8') {
        let rowIndex = 16
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF8Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF8Btn)
        }
    }

    if (data === 'L8') {
        let rowIndex = 17
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL8Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL8Btn)
        }
    }

    if (data === 'F9') {
        let rowIndex = 18
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF9Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF9Btn)
        }
    }

    if (data === 'L9') {
        let rowIndex = 19
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL9Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL9Btn)
        }
    }

    if (data === 'F10') {
        let rowIndex = 20
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF10Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF10Btn)
        }
    }

    if (data === 'L10') {
        let rowIndex = 21
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 2) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 2) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL10Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL10Btn)
        }
    }

    if (data === 'F11') {
        let rowIndex = 22
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF11Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF11Btn)
        }
    }

    if (data === 'L11') {
        let rowIndex = 23
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL11Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL11Btn)
        }
    }

    if (data === 'F12') {
        let rowIndex = 24
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF12Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF12Btn)
        }
    }

    if (data === 'L12') {
        let rowIndex = 25
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL12Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL12Btn)
        }
    }

    if (data === 'F13') {
        let rowIndex = 26
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF13Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF13Btn)
        }
    }

    if (data === 'L13') {
        let rowIndex = 27
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL13Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL13Btn)
        }
    }

    if (data === 'F14') {
        let rowIndex = 28
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF14Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF14Btn)
        }
    }

    if (data === 'L14') {
        let rowIndex = 29
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL14Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL14Btn)
        }
    }

    if (data === 'F15') {
        let rowIndex = 30
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF15Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF15Btn)
        }
    }

    if (data === 'L15') {
        let rowIndex = 31
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 3) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 3) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL15Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL15Btn)
        }
    }

    if (data === 'F16') {
        let rowIndex = 32
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF16Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF16Btn)
        }
    }

    if (data === 'L16') {
        let rowIndex = 33
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL16Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL16Btn)
        }
    }

    if (data === 'F17') {
        let rowIndex = 34
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF17Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF17Btn)
        }
    }

    if (data === 'L17') {
        let rowIndex = 35
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL17Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL17Btn)
        }
    }

    if (data === 'F18') {
        let rowIndex = 36
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF18Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF18Btn)
        }
    }

    if (data === 'L18') {
        let rowIndex = 37
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL18Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL18Btn)
        }
    }

    if (data === 'F19') {
        let rowIndex = 38
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF19Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF19Btn)
        }
    }

    if (data === 'L19') {
        let rowIndex = 39
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL19Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL19Btn)
        }
    }

    if (data === 'F20') {
        let rowIndex = 40
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF20Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF20Btn)
        }
    }

    if (data === 'L20') {
        let rowIndex = 41
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 4) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 4) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL20Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL20Btn)
        }
    }

    if (data === 'F21') {
        let rowIndex = 42
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF21Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF21Btn)
        }
    }

    if (data === 'L21') {
        let rowIndex = 43
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL21Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL21Btn)
        }
    }

    if (data === 'F22') {
        let rowIndex = 44
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF22Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF22Btn)
        }
    }

    if (data === 'L22') {
        let rowIndex = 45
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL22Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL22Btn)
        }
    }

    if (data === 'F23') {
        let rowIndex = 46
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF23Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF23Btn)
        }
    }

    if (data === 'L23') {
        let rowIndex = 47
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL23Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL23Btn)
        }
    }

    if (data === 'F24') {
        let rowIndex = 48
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF24Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF24Btn)
        }
    }

    if (data === 'L24') {
        let rowIndex = 49
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL24Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL24Btn)
        }
    }

    if (data === 'F25') {
        let rowIndex = 50
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF25Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF25Btn)
        }
    }

    if (data === 'L25') {
        let rowIndex = 51
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 5) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 5) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL25Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL25Btn)
        }
    }

    if (data === 'F26') {
        let rowIndex = 52
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF26Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF26Btn)
        }
    }

    if (data === 'L26') {
        let rowIndex = 53
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL26Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL26Btn)
        }
    }

    if (data === 'F27') {
        let rowIndex = 54
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF27Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF27Btn)
        }
    }

    if (data === 'L27') {
        let rowIndex = 55
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL27Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL27Btn)
        }
    }

    if (data === 'F28') {
        let rowIndex = 56
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF28Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF28Btn)
        }
    }

    if (data === 'L28') {
        let rowIndex = 57
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL28Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL28Btn)
        }
    }

    if (data === 'F29') {
        let rowIndex = 58
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF29Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF29Btn)
        }
    }

    if (data === 'L29') {
        let rowIndex = 59
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL29Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL29Btn)
        }
    }

    if (data === 'F30') {
        let rowIndex = 60
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF30Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF30Btn)
        }
    }

    if (data === 'L30') {
        let rowIndex = 61
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 6) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 6) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL30Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL30Btn)
        }
    }

    if (data === 'F31') {
        let rowIndex = 62
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !==  7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF31Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF31Btn)
        }
    }

    if (data === 'L31') {
        let rowIndex = 63
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL31Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL31Btn)
        }
    }

    if (data === 'F32') {
        let rowIndex = 64
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF32Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF32Btn)
        }
    }

    if (data === 'L32') {
        let rowIndex = 65
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL32Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL32Btn)
        }
    }

    if (data === 'F33') {
        let rowIndex = 66
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF33Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF33Btn)
        }
    }

    if (data === 'L33') {
        let rowIndex = 67
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL33Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL33Btn)
        }
    }

    if (data === 'F34') {
        let rowIndex = 68
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 1) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF34Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF34Btn)
        }
    }

    if (data === 'L34') {
        let rowIndex = 69
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL34Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL34Btn)
        }
    }

    if (data === 'F35') {
        let rowIndex = 70
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF35Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF35Btn)
        }
    }

    if (data === 'L35') {
        let rowIndex = 71
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 7) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 7) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL35Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL35Btn)
        }
    }

    if (data === 'F36') {
        let rowIndex = 72
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF36Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF36Btn)
        }
    }

    if (data === 'L36') {
        let rowIndex = 73
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL36Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL36Btn)
        }
    }

    if (data === 'F37') {
        let rowIndex = 74
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF37Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF37Btn)
        }
    }

    if (data === 'L37') {
        let rowIndex = 75
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL37Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL37Btn)
        }
    }

    if (data === 'F38') {
        let rowIndex = 76
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF38Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF38Btn)
        }
    }

    if (data === 'L38') {
        let rowIndex = 77
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL38Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL38Btn)
        }
    }

    if (data === 'F39') {
        let rowIndex = 78
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF39Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF39Btn)
        }
    }

    if (data === 'L39') {
        let rowIndex = 79
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL39Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL39Btn)
        }
    }

    if (data === 'F40') {
        let rowIndex = 80
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF40Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF40Btn)
        }
    }

    if (data === 'L40') {
        let rowIndex = 81
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 8) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 8) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL40Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL40Btn)
        }
    }

    if (data === 'F41') {
        let rowIndex = 82
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF41Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF41Btn)
        }
    }

    if (data === 'L41') {
        let rowIndex = 83
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL41Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL41Btn)
        }
    }

    if (data === 'F42') {
        let rowIndex = 84
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF42Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF42Btn)
        }
    }

    if (data === 'L42') {
        let rowIndex = 85
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL42Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL42Btn)
        }
    }

    if (data === 'F43') {
        let rowIndex = 86
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF43Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF43Btn)
        }
    }

    if (data === 'L43') {
        let rowIndex = 87
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL43Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL43Btn)
        }
    }

    if (data === 'F44') {
        let rowIndex = 88
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF44Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF44Btn)
        }
    }

    if (data === 'L44') {
        let rowIndex = 89
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL44Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL44Btn)
        }
    }

    if (data === 'F45') {
        let rowIndex = 90
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF45Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF45Btn)
        }
    }

    if (data === 'L45') {
        let rowIndex = 91
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 9) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 9) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL45Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL45Btn)
        }
    }

    if (data === 'F46') {
        let rowIndex = 92
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF46Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF46Btn)
        }
    }

    if (data === 'L46') {
        let rowIndex = 93
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL46Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL46Btn)
        }
    }

    if (data === 'F47') {
        let rowIndex = 94
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF47Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF47Btn)
        }
    }

    if (data === 'L47') {
        let rowIndex = 95
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL47Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL47Btn)
        }
    }

    if (data === 'F48') {
        let rowIndex = 96
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF48Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF48Btn)
        }
    }

    if (data === 'L48') {
        let rowIndex = 97
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL48Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL48Btn)
        }
    }

    if (data === 'F49') {
        let rowIndex = 98
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF49Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF49Btn)
        }
    }

    if (data === 'L49') {
        let rowIndex = 99
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL49Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL49Btn)
        }
    }

    if (data === 'F50') {
        let rowIndex = 100
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF50Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF50Btn)
        }
    }

    if (data === 'L50') {
        let rowIndex = 101
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 10) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 10) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL50Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL50Btn)
        }
    }

    if (data === 'F51') {
        let rowIndex = 102
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF51Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF51Btn)
        }
    }

    if (data === 'L51') {
        let rowIndex = 103
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL51Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL51Btn)
        }
    }

    if (data === 'F52') {
        let rowIndex = 104
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF52Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF52Btn)
        }
    }

    if (data === 'L52') {
        let rowIndex = 105
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL52Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL52Btn)
        }
    }

    if (data === 'F53') {
        let rowIndex = 106
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF53Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF53Btn)
        }
    }

    if (data === 'L53') {
        let rowIndex = 107
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL53Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL53Btn)
        }
    }

    if (data === 'F54') {
        let rowIndex = 108
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF54Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF54Btn)
        }
    }

    if (data === 'L54') {
        let rowIndex = 109
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL54Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL54Btn)
        }
    }

    if (data === 'F55') {
        let rowIndex = 110
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF55Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF55Btn)
        }
    }

    if (data === 'L55') {
        let rowIndex = 111
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 11) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 11) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL55Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL55Btn)
        }
    }

    if (data === 'F56') {
        let rowIndex = 112
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF56Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF56Btn)
        }
    }

    if (data === 'L56') {
        let rowIndex = 113
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL56Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL56Btn)
        }
    }

    if (data === 'F57') {
        let rowIndex = 124
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF57Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF57Btn)
        }
    }

    if (data === 'L57') {
        let rowIndex = 115
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL57Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL57Btn)
        }
    }

    if (data === 'F58') {
        let rowIndex = 116
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF58Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF58Btn)
        }
    }

    if (data === 'L58') {
        let rowIndex = 117
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL58Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL58Btn)
        }
    }

    if (data === 'F59') {
        let rowIndex = 118
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF59Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF59Btn)
        }
    }

    if (data === 'L59') {
        let rowIndex = 119
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL59Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL59Btn)
        }
    }

    if (data === 'F60') {
        let rowIndex = 120
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF60Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF60Btn)
        }
    }

    if (data === 'L60') {
        let rowIndex = 121
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 12) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 12) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL60Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL60Btn)
        }
    }

    if (data === 'F61') {
        let rowIndex = 122
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF61Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF61Btn)
        }
    }

    if (data === 'L61') {
        let rowIndex = 123
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL61Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL61Btn)
        }
    }

    if (data === 'F62') {
        let rowIndex = 124
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF62Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF62Btn)
        }
    }

    if (data === 'L62') {
        let rowIndex = 125
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL62Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL62Btn)
        }
    }

    if (data === 'F63') {
        let rowIndex = 126
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF63Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF63Btn)
        }
    }

    if (data === 'L63') {
        let rowIndex = 127
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL63Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL63Btn)
        }
    }

    if (data === 'F64') {
        let rowIndex = 128
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF64Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF64Btn)
        }
    }

    if (data === 'L64') {
        let rowIndex = 129
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL64Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL64Btn)
        }
    }

    if (data === 'F65') {
        let rowIndex = 130
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF65Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF65Btn)
        }
    }

    if (data === 'L65') {
        let rowIndex = 131
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 13) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 13) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL65Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL65Btn)
        }
    }

    if (data === 'F66') {
        let rowIndex = 132
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 14) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 14) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF66Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF66Btn)
        }
    }

    if (data === 'L66') {
        let rowIndex = 133
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 14) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 14) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL66Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL66Btn)
        }
    }

    if (data === 'F67') {
        let rowIndex = 134
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 14) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 14) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF67Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecF67Btn)
        }
    }

    if (data === 'L67') {
        let rowIndex = 135
        const values = sheet.data[0].rowData[rowIndex].values;

        const Rnickname = values[2] ? values[2].formattedValue : 'N/A';
        const ChasPoyas = values[3] ? values[3].formattedValue : 'N/A';
        const warnings = values[4] ? values[4].formattedValue : 'N/A';
        let balli = values[5] ? values[5].formattedValue : 'N/A';
        const VK = values[7] ? values[7].formattedValue : 'N/A';
        const TG = values[8] ? values[8].formattedValue : 'N/A';
        const DSID = values[9] ? values[9].formattedValue : 'N/A';
        const Forum = values[10] ? values[10].formattedValue : 'N/A';
        const WRserver = values[6] ? values[6].formattedValue : 'N/A';
        const date = values[1] ? values[1].formattedValue : 'N/A';

        if (balli === undefined) {
            balli = '0'
        }

        if (level === 3 || level === 2) {
            if (server1 !== 14) {
                await bot.sendMessage(chatID, `Вам доступен только просмотр статистика специалиста без возможности его редактирования.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`)
            }

            else if (server1 === 14) {
                await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL67Btn)
            }
        }

        if (level >= 4) {
            await bot.sendMessage(chatID, `Вам доступна возможность редактирования специалиста.\n\nСтатистика технического специалиста:\nНикнейм: ${Rnickname}\nРабочий сервер: ${WRserver}\nДата назначения: ${date}\nЧасовой пояс: ${ChasPoyas}\nБаллы: ${balli}\nВыговоры: ${warnings}\nВКонтакте: ${VK}\nТелеграм: ${TG}\nDiscord ID: ${DSID}\nФорумный аккаунт: ${Forum}`, RedactSpecL67Btn)
        }
    }

    if (data === 'RedactSpecF1') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF1'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF1'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF1'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF1'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF1'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF1'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF1'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF1'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF1'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL1') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL1'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL1'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL1'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL1'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL1'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL1'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL1'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL1'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL1'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF2') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF2'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF2'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF2'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF2'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF2'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF2'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF2'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF2'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF2'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL2') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL2'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL2'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL2'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL2'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL2'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL2'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL2'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL2'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL2'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF3') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF3'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF3'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF3'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF3'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF3'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF3'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF3'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF3'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF3'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL3') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL3'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL3'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL3'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL3'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL3'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL3'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL3'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL3'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL3'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF4') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF4'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF4'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF4'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF4'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF4'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF4'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF4'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF4'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF4'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL4') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL4'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL4'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL4'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL4'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL4'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL4'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL4'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL4'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL4'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF5') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF5'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF5'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF5'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF5'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF5'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF5'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF5'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF5'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF5'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL5') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL5'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL5'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL5'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL5'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL5'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL5'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL5'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL5'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL5'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF6') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF6'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF6'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF6'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF6'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF6'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF6'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF6'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF6'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF6'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL6') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL6'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL6'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL6'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL6'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL6'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL6'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL6'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL6'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL6'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF7') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF7'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF7'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF7'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF7'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF7'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF7'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF7'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF7'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF7'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL7') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL7'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL7'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL7'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL7'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL7'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL7'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL7'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL7'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL7'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF8') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF8'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF8'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF8'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF8'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF8'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF8'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF8'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF8'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF8'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL8') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL8'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL8'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL8'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL8'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL8'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL8'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL8'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL8'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL8'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF9') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF9'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF9'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF9'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF9'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF9'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF9'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF9'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF9'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF9'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL9') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL9'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL9'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL9'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL9'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL9'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL9'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL9'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL9'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL9'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF10') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF10'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF10'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF10'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF10'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF10'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF10'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF10'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF10'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF10'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL10') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL10'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL10'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL10'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL10'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL10'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL10'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL10'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL10'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL10'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF11') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF11'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF11'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF11'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF11'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF11'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF11'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF11'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF11'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF11'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL11') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL11'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL11'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL11'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL11'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL11'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL11'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL11'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL11'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL11'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF12') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF12'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF12'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF12'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF12'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF12'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF12'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF12'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF12'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF12'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL12') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL12'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL12'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL12'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL12'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL12'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL12'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL12'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL12'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL12'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF13') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF13'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF13'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF13'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF13'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF13'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF13'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF13'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF13'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF13'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL13') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL13'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL13'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL13'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL13'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL13'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL13'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL13'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL13'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL13'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF14') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF14'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF14'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF14'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF14'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF14'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF14'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF14'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF14'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF14'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL14') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL14'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL14'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL14'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL14'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL14'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL14'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL14'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL14'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL14'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF15') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF15'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF15'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF15'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF15'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF15'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF15'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF15'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF15'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF15'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL15') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL15'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL15'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL15'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL15'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL15'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL15'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL15'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL15'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL15'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF16') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF16'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF16'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF16'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF16'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF16'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF16'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF16'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF16'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF16'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL16') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL16'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL16'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL16'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL16'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL16'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL16'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL16'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL16'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL16'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF17') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF17'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF17'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF17'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF17'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF17'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF17'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF17'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF17'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF17'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL17') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL17'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL17'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL17'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL17'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL17'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL17'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL17'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL17'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL17'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF18') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF18'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF18'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF18'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF18'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF18'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF18'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF18'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF18'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF18'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL18') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL18'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL18'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL18'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL18'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL18'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL18'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL18'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL18'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL18'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF19') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF19'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF19'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF19'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF19'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF19'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF19'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF19'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF19'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF19'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL19') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL19'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL19'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL19'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL19'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL19'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL19'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL19'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL19'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL19'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF20') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF20'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF20'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF20'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF20'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF20'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF20'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF20'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF20'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF20'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL20') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL20'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL20'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL20'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL20'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL20'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL20'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL20'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL20'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL20'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF21') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF21'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF21'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF21'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF21'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF21'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF21'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF21'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF21'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF21'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL21') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL21'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL21'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL21'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL21'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL21'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL21'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL21'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL21'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL21'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF22') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF22'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF22'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF22'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF22'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF22'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF22'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF22'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF22'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF22'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL22') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL22'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL22'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL22'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL22'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL22'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL22'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL22'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL22'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL22'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF23') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF23'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF23'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF23'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF23'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF23'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF23'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF23'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF23'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF23'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL23') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL23'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL23'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL23'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL23'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL23'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL23'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL23'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL23'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL23'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF24') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF24'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF24'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF24'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF24'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF24'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF24'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF24'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF24'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF24'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL24') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL24'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL24'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL24'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL24'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL24'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL24'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL24'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL24'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL24'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF25') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF25'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF25'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF25'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF25'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF25'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF25'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF25'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF25'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF25'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL25') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL25'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL25'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL25'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL25'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL25'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL25'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL25'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL25'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL25'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF26') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF26'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF26'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF26'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF26'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF26'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF26'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpec2F6'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF26'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF26'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL26') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL6'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL26'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL26'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL26'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL26'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL26'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL26'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL26'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL26'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF27') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF27'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF27'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF27'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF27'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF27'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF27'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF27'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF27'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF27'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL27') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL27'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL27'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL27'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL27'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL27'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL27'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL27'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL27'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL27'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF28') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF28'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF28'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF28'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF28'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF28'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF28'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF28'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF28'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF28'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL28') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL28'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL28'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL28'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL28'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL28'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL28'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL28'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL28'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL28'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF29') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF29'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF29'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF29'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF29'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF29'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF29'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF29'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF29'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF29'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL29') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL29'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL29'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL29'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL29'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL29'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL29'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL29'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL29'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL29'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF30') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF30'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF30'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF30'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF30'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF30'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF30'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF30'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF30'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF30'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL30') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL30'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL30'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL30'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL30'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL30'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL30'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL30'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL30'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL30'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF31') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF31'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF31'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF31'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF31'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF31'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF31'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF31'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF31'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF31'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL31') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL31'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL31'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL31'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL31'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL31'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL31'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL31'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL31'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL31'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF32') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF32'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF32'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF32'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF32'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF32'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF32'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF32'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF32'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF32'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL32') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL32'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL32'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL32'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL32'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL32'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL32'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL32'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL32'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL32'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF33') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF33'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF33'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF33'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF33'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF33'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF33'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF33'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF33'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF33'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL33') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL33'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL33'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL33'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL33'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL33'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL33'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL33'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL33'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL33'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF34') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF34'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF34'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF34'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF34'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF34'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF34'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF34'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF34'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF34'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL34') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL34'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL34'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL34'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL34'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL34'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL34'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL34'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL34'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL34'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF35') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF35'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF35'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF35'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF35'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF35'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF35'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF35'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF35'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF35'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL35') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL35'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL35'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL35'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL35'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL35'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL35'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL35'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL35'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL35'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF36') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF36'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF36'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF36'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF36'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF36'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF36'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF36'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF36'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF36'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL36') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL36'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL36'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL36'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL36'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL36'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL36'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpec3L6'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL36'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL36'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF37') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF37'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF37'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF37'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF37'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF37'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF37'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF37'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF37'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF37'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL37') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL37'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL37'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL37'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL37'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL37'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL37'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL37'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL37'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL37'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF38') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF38'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF38'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF38'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF38'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF38'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF38'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF38'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF38'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF38'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL38') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL38'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL38'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL38'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL38'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL38'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL38'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL38'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL38'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL38'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF39') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF39'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF39'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF39'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF39'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF39'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF39'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF39'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF39'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF39'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL39') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL39'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL39'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL39'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL39'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL39'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL39'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL39'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL39'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL39'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF40') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF40'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF40'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF40'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF40'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF40'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF40'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF40'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF40'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF40'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL40') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL40'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL40'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL40'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL40'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL40'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL40'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL40'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL40'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL40'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF41') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF41'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF41'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF41'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF41'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF41'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF41'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF41'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF41'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF41'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL41') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL41'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL41'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL41'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL41'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL41'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL41'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL41'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL41'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL41'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF42') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF42'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF42'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF42'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF42'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF42'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF42'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF42'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF42'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF42'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL42') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL42'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL42'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL42'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL42'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL42'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL42'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL42'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL42'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL42'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF43') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF43'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF43'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF43'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF43'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF43'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF43'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF43'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF43'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF43'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL43') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL43'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL43'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL43'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL43'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL43'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL43'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL43'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL43'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL43'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF44') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF44'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF44'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF44'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF44'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF44'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF44'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF44'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF44'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF44'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL44') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL44'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL44'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL44'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL44'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL44'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL44'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL44'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL44'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL44'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF45') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF45'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF45'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF45'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF45'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF45'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF45'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF45'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF45'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF45'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL45') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL45'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL45'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL45'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL45'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL45'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL45'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL45'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL45'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL45'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF46') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF46'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF46'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF46'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF46'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF46'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF46'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF46'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF46'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF46'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL46') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL46'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL46'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL46'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL46'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL46'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL46'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL46'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL46'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL46'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF47') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF47'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF47'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF47'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF47'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF47'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF7'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF47'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF47'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF47'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL47') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL47'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL47'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL47'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL47'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL47'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL47'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL47'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL47'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL47'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF48') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF48'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF48'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF48'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF48'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF48'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF48'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF48'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF48'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF48'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL48') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL48'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL48'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL48'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL48'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL48'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL48'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL48'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL48'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL48'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF49') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF49'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF49'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF49'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF49'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF49'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF49'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF49'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF49'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF49'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL49') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL49'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL49'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL49'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL49'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL49'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL49'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL49'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL49'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL49'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF50') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF50'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF50'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF50'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF50'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF50'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF50'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF50'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF50'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF50'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL50') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL50'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL50'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL50'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL50'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL50'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL50'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL50'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL50'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL50'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF51') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF51'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF51'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF51'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF51'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF51'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF51'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF51'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF51'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF51'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL51') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL51'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL51'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL51'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL51'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL51'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL51'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL51'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL51'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL51'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF52') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF52'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF52'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF52'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF52'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF52'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF52'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF52'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF52'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF52'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL52') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL52'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL52'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL52'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL52'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL52'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL52'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL52'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL52'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL52'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF53') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF53'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF53'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF53'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF53'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF53'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF53'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF53'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF53'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF53'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL53') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL53'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL53'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL53'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL53'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL53'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL53'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL53'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL53'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL53'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF54') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF54'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF54'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF54'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF54'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF54'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF54'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF54'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF54'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF54'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL54') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL54'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL54'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL54'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL54'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL54'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL54'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL54'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL54'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL54'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF55') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF55'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF55'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF55'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF55'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF55'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF55'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF55'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF55'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF55'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL55') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL55'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL55'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL55'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL55'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL55'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL55'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL55'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL55'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL55'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF56') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF56'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF56'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF56'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF56'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF56'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF56'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF56'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF56'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF56'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL56') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL56'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL56'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL56'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL56'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL56'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL56'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL56'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL56'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL56'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF57') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF57'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF57'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF57'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF57'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF57'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF57'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF57'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF57'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF57'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL57') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL57'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL57'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL57'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL57'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL57'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL57'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL57'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL57'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL57'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF58') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF58'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF58'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF58'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF58'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF58'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF58'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF58'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF58'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF58'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL58') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL58'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL58'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL58'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL58'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL58'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL58'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL58'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL58'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL58'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF59') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF59'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF59'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF59'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF59'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF59'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF59'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF59'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF59'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF59'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL59') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL59'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL59'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL59'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL59'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL59'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL59'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL59'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL59'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL59'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF10') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF60'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF60'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF60'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF60'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF60'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF60'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF60'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF60'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF60'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL60') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL60'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL60'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL60'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL60'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL60'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL60'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL60'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL60'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL60'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF61') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF61'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF61'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF61'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF61'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF61'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF61'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF61'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF61'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF61'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL61') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL61'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL61'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL61'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL61'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL61'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL61'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL61'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL61'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL61'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF62') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF62'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF62'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF62'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF62'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF62'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF62'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF62'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF62'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF62'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL62') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL62'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL62'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL62'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL62'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL62'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL62'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL62'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL62'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL62'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF63') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF63'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF63'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF63'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF63'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF63'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF63'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF63'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF63'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF63'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL63') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL63'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL63'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL63'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL63'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL63'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL63'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL63'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL63'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL63'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF64') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF64'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF64'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF64'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF64'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF64'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF64'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF64'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF64'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF64'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL64') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL64'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL64'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL64'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL64'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL64'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL64'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL64'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL64'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL64'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF65') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF65'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF65'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF65'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF65'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF65'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF65'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF65'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF65'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF65'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL65') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL65'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL65'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL65'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL65'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL65'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL65'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL65'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL65'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL65'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF66') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF66'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF66'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF66'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF66'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF66'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF66'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF66'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF66'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF66'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL66') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL66'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL66'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL66'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL66'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL66'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL66'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL66'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL66'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL66'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecF67') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecF67'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecF67'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecF67'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecF67'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecF67'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecF67'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecF67'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecF67'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamF67'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === 'RedactSpecL67') {
        let RedactionFunc = {
            reply_markup: {
                inline_keyboard: []
            }
        };

        RedactionFunc.reply_markup.inline_keyboard.push(
                    [{text: 'Изменить никнейм', callback_data: 'RedactNicknameSpecL67'}],
                    [{text: 'Изменить часовой пояс', callback_data: 'RedactCHPSpecL67'}],
                    [{text: 'Выдать выговор', callback_data: 'GiveWarnSpecL67'}],
                    [{text: 'Вычесть баллы', callback_data: 'TakeScoresSpecL67'}],
                    [{text: 'Изменить ВКонтакте', callback_data: 'RedactVKSpecL67'}],
                    [{text: 'Изменить Telegram', callback_data: 'RedactTGSpecL67'}],
                    [{text: 'Изменить Discord ID', callback_data: 'RedactDSIDSpecL67'}],
                    [{text: 'Изменить форумный аккаунт', callback_data: 'RedactForumSpecL67'}],
        );
                
        if (level >= 3) {
            RedactionFunc.reply_markup.inline_keyboard.push([{text: 'Назначить на должность заместителя', callback_data: 'UpToZamL67'}]);
        }

        await bot.sendMessage(chatID, 'Выберите действие для редактирования:', RedactionFunc)
    }

    if (data === '3') {
        if (level === 2) {
            await bot.sendMessage(chatID, 'Вам доступна панель управления первого уровня. Выберите действие', consoleBtnWlevel1)
        }
        if (level >= 3) {
            await bot.sendMessage(chatID, 'Вам доступна панель управления второго уровня. Выберите действие', consoleBtnWlevel2)
        }
    }

    if (data === '22') {
        if (level === 2 || level === 3) {

            let spisokAddTechForLevel2Cur1 = {
                reply_markup: {
                    inline_keyboard: []
                }
            };

            if (server1 === 1) {
                let nicknameF1 = await processServerData(server1, 2);
                let nicknameL1 = await processServerData(server1, 3);
                let nicknameF2 = await processServerData(server1, 4);
                let nicknameL2 = await processServerData(server1, 5);
                let nicknameF3 = await processServerData(server1, 6);
                let nicknameL3 = await processServerData(server1, 7);
                let nicknameF4 = await processServerData(server1, 8);
                let nicknameL4 = await processServerData(server1, 9);
                let nicknameF5 = await processServerData(server1, 10);
                let nicknameL5 = await processServerData(server1, 11);

                nicknameF1 = nicknameF1 === "N/A" ? [{text: 'RED FORUM', callback_data: 'addF1'}] : 1;
                nicknameL1 = nicknameL1 === "N/A" ? [{text: 'RED LOGS', callback_data: 'addL1'}] : 1;
                nicknameF2 = nicknameF2 === "N/A" ? [{text: 'GREEN FORUM', callback_data: 'addF2'}] : 1;
                nicknameL2 = nicknameL2 === "N/A" ? [{text: 'GREEN LOGS', callback_data: 'addL2'}] : 1;
                nicknameF3 = nicknameF3 === "N/A" ? [{text: 'BLUE FORUM', callback_data: 'addF3'}] : 1;
                nicknameL3 = nicknameL3 === "N/A" ? [{text: 'BLUE LOGS', callback_data: 'addL3'}] : 1;
                nicknameF4 = nicknameF4 === "N/A" ? [{text: 'YELLOW FORUM', callback_data: 'addF4'}] : 1;
                nicknameL4 = nicknameL4 === "N/A" ? [{text: 'YELLOW LOGS', callback_data: 'addL4'}] : 1;
                nicknameF5 = nicknameF5 === "N/A" ? [{text: 'ORANGE FORUM', callback_data: 'addF5'}] : 1;
                nicknameL5 = nicknameL5 === "N/A" ? [{text: 'ORANGE LOGS', callback_data: 'addL5'}] : 1;

                if (nicknameF1 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF1);
                }
                if (nicknameL1 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL1);
                }
                if (nicknameF2 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF2);
                }
                if (nicknameL2 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL2);
                }
                if (nicknameF3 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF3);
                }
                if (nicknameL3 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL3);
                }
                if (nicknameF4 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF4);
                }
                if (nicknameL4 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL4);
                }
                if (nicknameF5 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF5);
                }
                if (nicknameL5 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL5);
                }
            }

            if (server1 === 2) {
                let nicknameF6 = await processServerData(server1, 12);
                let nicknameL6 = await processServerData(server1, 13);
                let nicknameF7 = await processServerData(server1, 14);
                let nicknameL7 = await processServerData(server1, 15);
                let nicknameF8 = await processServerData(server1, 16);
                let nicknameL8 = await processServerData(server1, 17);
                let nicknameF9 = await processServerData(server1, 18);
                let nicknameL9 = await processServerData(server1, 19);
                let nicknameF10 = await processServerData(server1, 20);
                let nicknameL10 = await processServerData(server1, 21);

                nicknameF6 = nicknameF6 === "N/A" ? [{text: 'PURPLE FORUM', callback_data: 'addF6'}] : 1;
                nicknameL6 = nicknameL6 === "N/A" ? [{text: 'PURPLE LOGS', callback_data: 'addL6'}] : 1;
                nicknameF7 = nicknameF7 === "N/A" ? [{text: 'LIME FORUM', callback_data: 'addF7'}] : 1;
                nicknameL7 = nicknameL7 === "N/A" ? [{text: 'LIME LOGS', callback_data: 'addL7'}] : 1;
                nicknameF8 = nicknameF8 === "N/A" ? [{text: 'PINK FORUM', callback_data: 'addF8'}] : 1;
                nicknameL8 = nicknameL8 === "N/A" ? [{text: 'PINK LOGS', callback_data: 'addL8'}] : 1;
                nicknameF9 = nicknameF9 === "N/A" ? [{text: 'CHERRY FORUM', callback_data: 'addF9'}] : 1;
                nicknameL9 = nicknameL9 === "N/A" ? [{text: 'CHERRY LOGS', callback_data: 'addL9'}] : 1;
                nicknameF10 = nicknameF10 === "N/A" ? [{text: 'BLACK FORUM', callback_data: 'addF10'}] : 1;
                nicknameL10 = nicknameL10 === "N/A" ? [{text: 'BLACK LOGS', callback_data: 'addL10'}] : 1;

                if (nicknameF6 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF6);
                }
                if (nicknameL6 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL6);
                }
                if (nicknameF7 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF7);
                }
                if (nicknameL7 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL7);
                }
                if (nicknameF8 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF8);
                }
                if (nicknameL8 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL8);
                }
                if (nicknameF9!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF9);
                }
                if (nicknameL9 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL9);
                }
                if (nicknameF10 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF10);
                }
                if (nicknameL10 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL10);
                }
            }

            if (server1 === 3) {
                let nicknameF11 = await processServerData(server1, 22);
                let nicknameL11 = await processServerData(server1, 23);
                let nicknameF12 = await processServerData(server1, 24);
                let nicknameL12 = await processServerData(server1, 25);
                let nicknameF13 = await processServerData(server1, 26);
                let nicknameL13 = await processServerData(server1, 27);
                let nicknameF14 = await processServerData(server1, 28);
                let nicknameL14 = await processServerData(server1, 29);
                let nicknameF15 = await processServerData(server1, 30);
                let nicknameL15 = await processServerData(server1, 31);

                nicknameF11 = nicknameF11 === "N/A" ? [{text: 'INDIGO FORUM', callback_data: 'addF11'}] : 1;
                nicknameL11 = nicknameL11 === "N/A" ? [{text: 'INDIGO LOGS', callback_data: 'addL11'}] : 1;
                nicknameF12 = nicknameF12 === "N/A" ? [{text: 'WHITE FORUM', callback_data: 'addF12'}] : 1;
                nicknameL12 = nicknameL12 === "N/A" ? [{text: 'WHITE LOGS', callback_data: 'addL12'}] : 1;
                nicknameF13 = nicknameF13 === "N/A" ? [{text: 'MAGENTA FORUM', callback_data: 'addF13'}] : 1;
                nicknameL13 = nicknameL13 === "N/A" ? [{text: 'MAGENTA LOGS', callback_data: 'addL13'}] : 1;
                nicknameF14 = nicknameF14 === "N/A" ? [{text: 'CRIMSON FORUM', callback_data: 'addF14'}] : 1;
                nicknameL14 = nicknameL14 === "N/A" ? [{text: 'CRIMSON LOGS', callback_data: 'addL14'}] : 1;
                nicknameF15 = nicknameF15 === "N/A" ? [{text: 'GOLD FORUM', callback_data: 'addF15'}] : 1;
                nicknameL15 = nicknameL15 === "N/A" ? [{text: 'GOLD LOGS', callback_data: 'addL15'}] : 1;

                if (nicknameF11 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF11);
                }
                if (nicknameL11 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL11);
                }
                if (nicknameF12 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF12);
                }
                if (nicknameL12 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL12);
                }
                if (nicknameF13 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF13);
                }
                if (nicknameL13 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL13);
                }
                if (nicknameF14 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF14);
                }
                if (nicknameL14 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL14);
                }
                if (nicknameF15 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF15);
                }
                if (nicknameL15 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL15);
                }
            }

            if (server1 === 4) {
                let nicknameF16 = await processServerData(server1, 32);
                let nicknameL16 = await processServerData(server1, 33);
                let nicknameF17 = await processServerData(server1, 34);
                let nicknameL17 = await processServerData(server1, 35);
                let nicknameF18 = await processServerData(server1, 36);
                let nicknameL18 = await processServerData(server1, 37);
                let nicknameF19 = await processServerData(server1, 38);
                let nicknameL19 = await processServerData(server1, 39);
                let nicknameF20 = await processServerData(server1, 40);
                let nicknameL20 = await processServerData(server1, 41);

                nicknameF16 = nicknameF16 === "N/A" ? [{text: 'AZURE FORUM', callback_data: 'addF16'}] : 1;
                nicknameL16 = nicknameL16 === "N/A" ? [{text: 'AZURE LOGS', callback_data: 'addL16'}] : 1;
                nicknameF17 = nicknameF17 === "N/A" ? [{text: 'PLATINUM FORUM', callback_data: 'addF17'}] : 1;
                nicknameL17 = nicknameL17 === "N/A" ? [{text: 'PLATINUM LOGS', callback_data: 'addL17'}] : 1;
                nicknameF18 = nicknameF18 === "N/A" ? [{text: 'AQUA FORUM', callback_data: 'addF18'}] : 1;
                nicknameL18 = nicknameL18 === "N/A" ? [{text: 'AQUA LOGS', callback_data: 'addL18'}] : 1;
                nicknameF19 = nicknameF19 === "N/A" ? [{text: 'GRAY FORUM', callback_data: 'addF19'}] : 1;
                nicknameL19 = nicknameL19 === "N/A" ? [{text: 'GRAY LOGS', callback_data: 'addL19'}] : 1;
                nicknameF20 = nicknameF20 === "N/A" ? [{text: 'ICE FORUM', callback_data: 'addF20'}] : 1;
                nicknameL20 = nicknameL20 === "N/A" ? [{text: 'ICE LOGS', callback_data: 'addL20'}] : 1;

                if (nicknameF16 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF16);
                }
                if (nicknameL16 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL16);
                }
                if (nicknameF17 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF17);
                }
                if (nicknameL17 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL17);
                }
                if (nicknameF18 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF18);
                }
                if (nicknameL18 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL18);
                }
                if (nicknameF19!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF19);
                }
                if (nicknameL19 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL19);
                }
                if (nicknameF20 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF20);
                }
                if (nicknameL20 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL20);
                }
            }

            if (server1 === 5) {
                let nicknameF21 = await processServerData(server1, 42);
                let nicknameL21 = await processServerData(server1, 43);
                let nicknameF22 = await processServerData(server1, 44);
                let nicknameL22 = await processServerData(server1, 45);
                let nicknameF23 = await processServerData(server1, 46);
                let nicknameL23 = await processServerData(server1, 47);
                let nicknameF24 = await processServerData(server1, 48);
                let nicknameL24 = await processServerData(server1, 49);
                let nicknameF25 = await processServerData(server1, 50);
                let nicknameL25 = await processServerData(server1, 51);

                nicknameF21 = nicknameF21 === "N/A" ? [{text: 'CHILLI FORUM', callback_data: 'addF21'}] : 1;
                nicknameL21 = nicknameL21 === "N/A" ? [{text: 'CHILLI LOGS', callback_data: 'addL21'}] : 1;
                nicknameF22 = nicknameF22 === "N/A" ? [{text: 'CHOCO FORUM', callback_data: 'addF22'}] : 1;
                nicknameL22 = nicknameL22 === "N/A" ? [{text: 'CHOCO LOGS', callback_data: 'addL22'}] : 1;
                nicknameF23 = nicknameF23 === "N/A" ? [{text: 'MOSCOW FORUM', callback_data: 'addF23'}] : 1;
                nicknameL23 = nicknameL23 === "N/A" ? [{text: 'MOSCOW LOGS', callback_data: 'addL23'}] : 1;
                nicknameF24 = nicknameF24 === "N/A" ? [{text: 'SPB FORUM', callback_data: 'addF24'}] : 1;
                nicknameL24 = nicknameL24 === "N/A" ? [{text: 'SPB LOGS', callback_data: 'addL24'}] : 1;
                nicknameF25 = nicknameF25 === "N/A" ? [{text: 'UFA FORUM', callback_data: 'addF25'}] : 1;
                nicknameL25 = nicknameL25 === "N/A" ? [{text: 'UFA LOGS', callback_data: 'addL25'}] : 1;

                if (nicknameF21 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF21);
                }
                if (nicknameL21 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL21);
                }
                if (nicknameF22 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF22);
                }
                if (nicknameL22 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL22);
                }
                if (nicknameF23 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF23);
                }
                if (nicknameL23 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL23);
                }
                if (nicknameF24 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF24);
                }
                if (nicknameL24 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL24);
                }
                if (nicknameF25 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF25);
                }
                if (nicknameL25 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL25);
                }
            }

            if (server1 === 6) {
                let nicknameF26 = await processServerData(server1, 52);
                let nicknameL26 = await processServerData(server1, 53);
                let nicknameF27 = await processServerData(server1, 54);
                let nicknameL27 = await processServerData(server1, 55);
                let nicknameF28 = await processServerData(server1, 56);
                let nicknameL28 = await processServerData(server1, 57);
                let nicknameF29 = await processServerData(server1, 58);
                let nicknameL29 = await processServerData(server1, 59);
                let nicknameF30 = await processServerData(server1, 60);
                let nicknameL30 = await processServerData(server1, 61);

                nicknameF26 = nicknameF26 === "N/A" ? [{text: 'SOCHI FORUM', callback_data: 'addF26'}] : 1;
                nicknameL26 = nicknameL26 === "N/A" ? [{text: 'SOCHI LOGS', callback_data: 'addL26'}] : 1;
                nicknameF27 = nicknameF27 === "N/A" ? [{text: 'KAZAN FORUM', callback_data: 'addF27'}] : 1;
                nicknameL27 = nicknameL27 === "N/A" ? [{text: 'KAZAN LOGS', callback_data: 'addL27'}] : 1;
                nicknameF28 = nicknameF28 === "N/A" ? [{text: 'SAMARA FORUM', callback_data: 'addF28'}] : 1;
                nicknameL28 = nicknameL28 === "N/A" ? [{text: 'SAMARA LOGS', callback_data: 'addL28'}] : 1;
                nicknameF29 = nicknameF29 === "N/A" ? [{text: 'ROSTOV FORUM', callback_data: 'addF29'}] : 1;
                nicknameL29 = nicknameL29 === "N/A" ? [{text: 'ROSTOV LOGS', callback_data: 'addL29'}] : 1;
                nicknameF30 = nicknameF30 === "N/A" ? [{text: 'ANAPA FORUM', callback_data: 'addF30'}] : 1;
                nicknameL30 = nicknameL30 === "N/A" ? [{text: 'ANAPA LOGS', callback_data: 'addL30'}] : 1;

                if (nicknameF26 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF26);
                }
                if (nicknameL26 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL26);
                }
                if (nicknameF27 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF27);
                }
                if (nicknameL27 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL27);
                }
                if (nicknameF28 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF28);
                }
                if (nicknameL28 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL28);
                }
                if (nicknameF29!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF29);
                }
                if (nicknameL29 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL29);
                }
                if (nicknameF30 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF30);
                }
                if (nicknameL30 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL30);
                }
            }

            if (server1 === 7) {
                let nicknameF31 = await processServerData(server1, 62);
                let nicknameL31 = await processServerData(server1, 63);
                let nicknameF32 = await processServerData(server1, 64);
                let nicknameL32 = await processServerData(server1, 65);
                let nicknameF33 = await processServerData(server1, 66);
                let nicknameL33 = await processServerData(server1, 67);
                let nicknameF34 = await processServerData(server1, 68);
                let nicknameL34 = await processServerData(server1, 69);
                let nicknameF35 = await processServerData(server1, 70);
                let nicknameL35 = await processServerData(server1, 71);

                nicknameF31 = nicknameF31 === "N/A" ? [{text: 'EKB FORUM', callback_data: 'addF1'}] : 1;
                nicknameL31 = nicknameL31 === "N/A" ? [{text: 'EKB LOGS', callback_data: 'addL1'}] : 1;
                nicknameF32 = nicknameF32 === "N/A" ? [{text: 'KRASNODAR FORUM', callback_data: 'addF2'}] : 1;
                nicknameL32 = nicknameL32 === "N/A" ? [{text: 'KRASNODAR LOGS', callback_data: 'addL2'}] : 1;
                nicknameF33 = nicknameF33 === "N/A" ? [{text: 'ARZAMAS FORUM', callback_data: 'addF3'}] : 1;
                nicknameL33 = nicknameL33 === "N/A" ? [{text: 'ARZAMAS LOGS', callback_data: 'addL3'}] : 1;
                nicknameF34 = nicknameF34 === "N/A" ? [{text: 'NOVOSIBIRSK FORUM', callback_data: 'addF4'}] : 1;
                nicknameL34 = nicknameL34 === "N/A" ? [{text: 'NOVOSIBIRSK LOGS', callback_data: 'addL4'}] : 1;
                nicknameF35 = nicknameF35 === "N/A" ? [{text: 'GROZNY FORUM', callback_data: 'addF5'}] : 1;
                nicknameL35 = nicknameL35 === "N/A" ? [{text: 'GROZNY LOGS', callback_data: 'addL5'}] : 1;

                if (nicknameF31 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF31);
                }
                if (nicknameL31 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL31);
                }
                if (nicknameF32 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF32);
                }
                if (nicknameL32 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL32);
                }
                if (nicknameF33 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF33);
                }
                if (nicknameL33 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL33);
                }
                if (nicknameF34 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF34);
                }
                if (nicknameL34 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL34);
                }
                if (nicknameF35 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF35);
                }
                if (nicknameL35 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL35);
                }
            }

            if (server1 === 8) {
                let nicknameF36 = await processServerData(server1, 72);
                let nicknameL36 = await processServerData(server1, 73);
                let nicknameF37 = await processServerData(server1, 74);
                let nicknameL37 = await processServerData(server1, 75);
                let nicknameF38 = await processServerData(server1, 76);
                let nicknameL38 = await processServerData(server1, 77);
                let nicknameF39 = await processServerData(server1, 78);
                let nicknameL39 = await processServerData(server1, 79);
                let nicknameF40 = await processServerData(server1, 80);
                let nicknameL40 = await processServerData(server1, 81);

                nicknameF36 = nicknameF36 === "N/A" ? [{text: 'SARATOV FORUM', callback_data: 'addF36'}] : 1;
                nicknameL36 = nicknameL36 === "N/A" ? [{text: 'SARATOV LOGS', callback_data: 'addL36'}] : 1;
                nicknameF37 = nicknameF37 === "N/A" ? [{text: 'OMSK FORUM', callback_data: 'addF37'}] : 1;
                nicknameL37 = nicknameL37 === "N/A" ? [{text: 'OMSK LOGS', callback_data: 'addL37'}] : 1;
                nicknameF38 = nicknameF38 === "N/A" ? [{text: 'IRKUTSK FORUM', callback_data: 'addF38'}] : 1;
                nicknameL38 = nicknameL38 === "N/A" ? [{text: 'IRKUTSK LOGS', callback_data: 'addL38'}] : 1;
                nicknameF39 = nicknameF39 === "N/A" ? [{text: 'VOLGOGRAD FORUM', callback_data: 'addF39'}] : 1;
                nicknameL39 = nicknameL39 === "N/A" ? [{text: 'VOLGOGRAD LOGS', callback_data: 'addL39'}] : 1;
                nicknameF40 = nicknameF40 === "N/A" ? [{text: 'VORONEZH FORUM', callback_data: 'addF40'}] : 1;
                nicknameL40 = nicknameL40 === "N/A" ? [{text: 'VORONEZH LOGS', callback_data: 'addL40'}] : 1;

                if (nicknameF36 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF36);
                }
                if (nicknameL36 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL36);
                }
                if (nicknameF37 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF37);
                }
                if (nicknameL37 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL37);
                }
                if (nicknameF38 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF38);
                }
                if (nicknameL38 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL38);
                }
                if (nicknameF39!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF39);
                }
                if (nicknameL39 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL39);
                }
                if (nicknameF40 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF40);
                }
                if (nicknameL40 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL40);
                }
            }

            if (server1 === 9) {
                let nicknameF41 = await processServerData(server1, 82);
                let nicknameL41 = await processServerData(server1, 83);
                let nicknameF42 = await processServerData(server1, 84);
                let nicknameL42 = await processServerData(server1, 85);
                let nicknameF43 = await processServerData(server1, 86);
                let nicknameL43 = await processServerData(server1, 87);
                let nicknameF44 = await processServerData(server1, 88);
                let nicknameL44 = await processServerData(server1, 89);
                let nicknameF45 = await processServerData(server1, 90);
                let nicknameL45 = await processServerData(server1, 91);

                nicknameF41 = nicknameF41 === "N/A" ? [{text: 'BELGOROD FORUM', callback_data: 'addF41'}] : 1;
                nicknameL41 = nicknameL41 === "N/A" ? [{text: 'BELGOROD LOGS', callback_data: 'addL41'}] : 1;
                nicknameF42 = nicknameF42 === "N/A" ? [{text: 'MAKHACHKALA FORUM', callback_data: 'addF42'}] : 1;
                nicknameL42 = nicknameL42 === "N/A" ? [{text: 'MAKHACHKALA LOGS', callback_data: 'addL42'}] : 1;
                nicknameF43 = nicknameF43 === "N/A" ? [{text: 'VLADIKAVKAZ FORUM', callback_data: 'addF43'}] : 1;
                nicknameL43 = nicknameL43 === "N/A" ? [{text: 'VLADIKAVKAZ LOGS', callback_data: 'addL43'}] : 1;
                nicknameF44 = nicknameF44 === "N/A" ? [{text: 'VLADIVOSTOK FORUM', callback_data: 'addF44'}] : 1;
                nicknameL44 = nicknameL44 === "N/A" ? [{text: 'VLADIVOSTOK LOGS', callback_data: 'addL44'}] : 1;
                nicknameF45 = nicknameF45 === "N/A" ? [{text: 'KALININGRAD FORUM', callback_data: 'addF45'}] : 1;
                nicknameL45 = nicknameL45 === "N/A" ? [{text: 'KALININGRAD LOGS', callback_data: 'addL45'}] : 1;

                if (nicknameF41 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF41);
                }
                if (nicknameL41 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL41);
                }
                if (nicknameF42 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF42);
                }
                if (nicknameL42 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL42);
                }
                if (nicknameF43 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF43);
                }
                if (nicknameL43 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL43);
                }
                if (nicknameF44 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF44);
                }
                if (nicknameL44 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL44);
                }
                if (nicknameF45 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF45);
                }
                if (nicknameL45 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL45);
                }
            }

            if (server1 === 10) {
                let nicknameF46 = await processServerData(server1, 92);
                let nicknameL46 = await processServerData(server1, 93);
                let nicknameF47 = await processServerData(server1, 94);
                let nicknameL47 = await processServerData(server1, 95);
                let nicknameF48 = await processServerData(server1, 96);
                let nicknameL48 = await processServerData(server1, 97);
                let nicknameF49 = await processServerData(server1, 98);
                let nicknameL49 = await processServerData(server1, 99);
                let nicknameF50 = await processServerData(server1, 100);
                let nicknameL50 = await processServerData(server1, 101);

                nicknameF46 = nicknameF46 === "N/A" ? [{text: 'CHELYABINSK FORUM', callback_data: 'addF46'}] : 1;
                nicknameL46 = nicknameL46 === "N/A" ? [{text: 'CHELYABINSK LOGS', callback_data: 'addL46'}] : 1;
                nicknameF47 = nicknameF47 === "N/A" ? [{text: 'KRASNOYARSK FORUM', callback_data: 'addF47'}] : 1;
                nicknameL47 = nicknameL47 === "N/A" ? [{text: 'KRASNOYARSK LOGS', callback_data: 'addL47'}] : 1;
                nicknameF48 = nicknameF48 === "N/A" ? [{text: 'CHEBOKSARY FORUM', callback_data: 'addF48'}] : 1;
                nicknameL48 = nicknameL48 === "N/A" ? [{text: 'CHEBOKSARY LOGS', callback_data: 'addL48'}] : 1;
                nicknameF49 = nicknameF49 === "N/A" ? [{text: 'KHABAROVSK FORUM', callback_data: 'addF49'}] : 1;
                nicknameL49 = nicknameL49 === "N/A" ? [{text: 'KHABAROVSK LOGS', callback_data: 'addL49'}] : 1;
                nicknameF50 = nicknameF50 === "N/A" ? [{text: 'PERM FORUM', callback_data: 'addF50'}] : 1;
                nicknameL50 = nicknameL50 === "N/A" ? [{text: 'PREM LOGS', callback_data: 'addL50'}] : 1;

                if (nicknameF46 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF46);
                }
                if (nicknameL46 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL46);
                }
                if (nicknameF47 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF47);
                }
                if (nicknameL47 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL47);
                }
                if (nicknameF48 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF48);
                }
                if (nicknameL48 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL48);
                }
                if (nicknameF49!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF49);
                }
                if (nicknameL49 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL49);
                }
                if (nicknameF50 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF50);
                }
                if (nicknameL50 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL50);
                }
            }

            if (server1 === 11) {
                let nicknameF51 = await processServerData(server1, 102);
                let nicknameL51 = await processServerData(server1, 103);
                let nicknameF52 = await processServerData(server1, 104);
                let nicknameL52 = await processServerData(server1, 105);
                let nicknameF53 = await processServerData(server1, 106);
                let nicknameL53 = await processServerData(server1, 107);
                let nicknameF54 = await processServerData(server1, 108);
                let nicknameL54 = await processServerData(server1, 109);
                let nicknameF55 = await processServerData(server1, 110);
                let nicknameL55 = await processServerData(server1, 111);

                nicknameF51 = nicknameF51 === "N/A" ? [{text: 'TULA FORUM', callback_data: 'addF51'}] : 1;
                nicknameL51 = nicknameL51 === "N/A" ? [{text: 'TULA LOGS', callback_data: 'addL51'}] : 1;
                nicknameF52 = nicknameF52 === "N/A" ? [{text: 'RYAZAN FORUM', callback_data: 'addF52'}] : 1;
                nicknameL52 = nicknameL52 === "N/A" ? [{text: 'RYAZAN LOGS', callback_data: 'addL52'}] : 1;
                nicknameF53 = nicknameF53 === "N/A" ? [{text: 'MURMANSK FORUM', callback_data: 'addF53'}] : 1;
                nicknameL53 = nicknameL53 === "N/A" ? [{text: 'MURMANSK LOGS', callback_data: 'addL53'}] : 1;
                nicknameF54 = nicknameF54 === "N/A" ? [{text: 'PENZA FORUM', callback_data: 'addF54'}] : 1;
                nicknameL54 = nicknameL54 === "N/A" ? [{text: 'PENZA LOGS', callback_data: 'addL54'}] : 1;
                nicknameF55 = nicknameF55 === "N/A" ? [{text: 'KUSRK FORUM', callback_data: 'addF55'}] : 1;
                nicknameL55 = nicknameL55 === "N/A" ? [{text: 'KURSK LOGS', callback_data: 'addL55'}] : 1;

                if (nicknameF51 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF51);
                }
                if (nicknameL51 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL51);
                }
                if (nicknameF52 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF52);
                }
                if (nicknameL52 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL52);
                }
                if (nicknameF53 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF53);
                }
                if (nicknameL53 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL53);
                }
                if (nicknameF54 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF54);
                }
                if (nicknameL54 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL54);
                }
                if (nicknameF55 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF55);
                }
                if (nicknameL55 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL55);
                }
            }

            if (server1 === 12) {
                let nicknameF56 = await processServerData(server1, 112);
                let nicknameL56 = await processServerData(server1, 113);
                let nicknameF57 = await processServerData(server1, 114);
                let nicknameL57 = await processServerData(server1, 115);
                let nicknameF58 = await processServerData(server1, 116);
                let nicknameL58 = await processServerData(server1, 117);
                let nicknameF59 = await processServerData(server1, 118);
                let nicknameL59 = await processServerData(server1, 119);
                let nicknameF60 = await processServerData(server1, 120);
                let nicknameL60 = await processServerData(server1, 121);

                nicknameF56 = nicknameF6 === "N/A" ? [{text: 'ARKHANGELSK FORUM', callback_data: 'addF56'}] : 1;
                nicknameL56 = nicknameL6 === "N/A" ? [{text: 'ARKHANGELSK LOGS', callback_data: 'addL56'}] : 1;
                nicknameF57 = nicknameF7 === "N/A" ? [{text: 'ORENBURG FORUM', callback_data: 'addF57'}] : 1;
                nicknameL57 = nicknameL7 === "N/A" ? [{text: 'ORENBURG LOGS', callback_data: 'addL57'}] : 1;
                nicknameF58 = nicknameF8 === "N/A" ? [{text: 'KIROV FORUM', callback_data: 'addF58'}] : 1;
                nicknameL58 = nicknameL8 === "N/A" ? [{text: 'KIROV LOGS', callback_data: 'addL58'}] : 1;
                nicknameF59 = nicknameF59 === "N/A" ? [{text: 'KEMEROVO FORUM', callback_data: 'addF59'}] : 1;
                nicknameL59 = nicknameL59 === "N/A" ? [{text: 'KEMEROVO LOGS', callback_data: 'addL59'}] : 1;
                nicknameF60 = nicknameF60 === "N/A" ? [{text: 'TYUMEN FORUM', callback_data: 'addF60'}] : 1;
                nicknameL60 = nicknameL60 === "N/A" ? [{text: 'TYUMEN LOGS', callback_data: 'addL60'}] : 1;

                if (nicknameF56 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF56);
                }
                if (nicknameL56 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL56);
                }
                if (nicknameF57 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF57);
                }
                if (nicknameL57 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL57);
                }
                if (nicknameF58 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF58);
                }
                if (nicknameL58 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL58);
                }
                if (nicknameF59!== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF59);
                }
                if (nicknameL59 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL59);
                }
                if (nicknameF60 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF60);
                }
                if (nicknameL60 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL60);
                }
            }

            if (server1 === 13) {
                let nicknameF61 = await processServerData(server1, 122);
                let nicknameL61 = await processServerData(server1, 123);
                let nicknameF62 = await processServerData(server1, 124);
                let nicknameL62 = await processServerData(server1, 125);
                let nicknameF63 = await processServerData(server1, 126);
                let nicknameL63 = await processServerData(server1, 127);
                let nicknameF64 = await processServerData(server1, 128);
                let nicknameL64 = await processServerData(server1, 129);
                let nicknameF65 = await processServerData(server1, 130);
                let nicknameL65 = await processServerData(server1, 131);

                nicknameF61 = nicknameF61 === "N/A" ? [{text: 'TOLYATTI FORUM', callback_data: 'addF61'}] : 1;
                nicknameL61 = nicknameL61 === "N/A" ? [{text: 'TOLYATTI LOGS', callback_data: 'addL61'}] : 1;
                nicknameF62 = nicknameF62 === "N/A" ? [{text: 'IVANOVO FORUM', callback_data: 'addF62'}] : 1;
                nicknameL62 = nicknameL62 === "N/A" ? [{text: 'IVANOVO LOGS', callback_data: 'addL62'}] : 1;
                nicknameF63 = nicknameF63 === "N/A" ? [{text: 'STAVROPOL FORUM', callback_data: 'addF63'}] : 1;
                nicknameL63 = nicknameL63 === "N/A" ? [{text: 'STAVROPOL LOGS', callback_data: 'addL63'}] : 1;
                nicknameF64 = nicknameF64 === "N/A" ? [{text: 'SMIOLENSK FORUM', callback_data: 'addF64'}] : 1;
                nicknameL64 = nicknameL64 === "N/A" ? [{text: 'SMIOLENSK LOGS', callback_data: 'addL64'}] : 1;
                nicknameF65 = nicknameF65 === "N/A" ? [{text: 'PSKOV FORUM', callback_data: 'addF65'}] : 1;
                nicknameL65 = nicknameL65 === "N/A" ? [{text: 'PSKOV LOGS', callback_data: 'addL65'}] : 1;

                if (nicknameF61 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF61);
                }
                if (nicknameL61 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL61);
                }
                if (nicknameF62 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF62);
                }
                if (nicknameL62 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL62);
                }
                if (nicknameF63 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF63);
                }
                if (nicknameL63 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL63);
                }
                if (nicknameF64 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF64);
                }
                if (nicknameL64 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL64);
                }
                if (nicknameF65 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF65);
                }
                if (nicknameL65 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL65);
                }
            }

            if (server1 === 14) {
                let nicknameF66 = await processServerData(server1, 132);
                let nicknameL66 = await processServerData(server1, 133);
                let nicknameF67 = await processServerData(server1, 134);
                let nicknameL67 = await processServerData(server1, 135);

                nicknameF66 = nicknameF66 === "N/A" ? [{text: 'BRYANSK FORUM', callback_data: 'addF66'}] : 1;
                nicknameL66 = nicknameL66 === "N/A" ? [{text: 'BRYANSK LOGS', callback_data: 'addL66'}] : 1;
                nicknameF67 = nicknameF67 === "N/A" ? [{text: 'OREL FORUM', callback_data: 'addF67'}] : 1;
                nicknameL67 = nicknameL67 === "N/A" ? [{text: 'OREL LOGS', callback_data: 'addL67'}] : 1;

                if (nicknameF66 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF66);
                }
                if (nicknameL66 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL66);
                }
                if (nicknameF67 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF67);
                }
                if (nicknameL67 !== 1) {
                    spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL67);
                }
            }

            await bot.sendMessage(chatID, `Выберите специалиста, которого хотите назначить:`, spisokAddTechForLevel2Cur1)
        }

        if (level >= 4) {

            let spisokAddTechForLevel2Cur1 = {
                reply_markup: {
                    inline_keyboard: []
                }
            };

            let nicknameF1 = await processServerData(server1, 2);
            let nicknameL1 = await processServerData(server1, 3);
            let nicknameF2 = await processServerData(server1, 4);
            let nicknameL2 = await processServerData(server1, 5);
            let nicknameF3 = await processServerData(server1, 6);
            let nicknameL3 = await processServerData(server1, 7);
            let nicknameF4 = await processServerData(server1, 8);
            let nicknameL4 = await processServerData(server1, 9);
            let nicknameF5 = await processServerData(server1, 10);
            let nicknameL5 = await processServerData(server1, 11);
            let nicknameF6 = await processServerData(server1, 12);
            let nicknameL6 = await processServerData(server1, 13);
            let nicknameF7 = await processServerData(server1, 14);
            let nicknameL7 = await processServerData(server1, 15);
            let nicknameF8 = await processServerData(server1, 16);
            let nicknameL8 = await processServerData(server1, 17);
            let nicknameF9 = await processServerData(server1, 18);
            let nicknameL9 = await processServerData(server1, 19);
            let nicknameF10 = await processServerData(server1, 20);
            let nicknameL10 = await processServerData(server1, 21);
            let nicknameF11 = await processServerData(server1, 22);
            let nicknameL11 = await processServerData(server1, 23);
            let nicknameF12 = await processServerData(server1, 24);
            let nicknameL12 = await processServerData(server1, 25);
            let nicknameF13 = await processServerData(server1, 26);
            let nicknameL13 = await processServerData(server1, 27);
            let nicknameF14 = await processServerData(server1, 28);
            let nicknameL14 = await processServerData(server1, 29);
            let nicknameF15 = await processServerData(server1, 30);
            let nicknameL15 = await processServerData(server1, 31);
            let nicknameF16 = await processServerData(server1, 32);
            let nicknameL16 = await processServerData(server1, 33);
            let nicknameF17 = await processServerData(server1, 34);
            let nicknameL17 = await processServerData(server1, 35);
            let nicknameF18 = await processServerData(server1, 36);
            let nicknameL18 = await processServerData(server1, 37);
            let nicknameF19 = await processServerData(server1, 38);
            let nicknameL19 = await processServerData(server1, 39);
            let nicknameF20 = await processServerData(server1, 40);
            let nicknameL20 = await processServerData(server1, 41);
            let nicknameF21 = await processServerData(server1, 42);
            let nicknameL21 = await processServerData(server1, 43);
            let nicknameF22 = await processServerData(server1, 44);
            let nicknameL22 = await processServerData(server1, 45);
            let nicknameF23 = await processServerData(server1, 46);
            let nicknameL23 = await processServerData(server1, 47);
            let nicknameF24 = await processServerData(server1, 48);
            let nicknameL24 = await processServerData(server1, 49);
            let nicknameF25 = await processServerData(server1, 50);
            let nicknameL25 = await processServerData(server1, 51);
            let nicknameF26 = await processServerData(server1, 52);
            let nicknameL26 = await processServerData(server1, 53);
            let nicknameF27 = await processServerData(server1, 54);
            let nicknameL27 = await processServerData(server1, 55);
            let nicknameF28 = await processServerData(server1, 56);
            let nicknameL28 = await processServerData(server1, 57);
            let nicknameF29 = await processServerData(server1, 58);
            let nicknameL29 = await processServerData(server1, 59);
            let nicknameF30 = await processServerData(server1, 60);
            let nicknameL30 = await processServerData(server1, 61);
            let nicknameF31 = await processServerData(server1, 62);
            let nicknameL31 = await processServerData(server1, 63);
            let nicknameF32 = await processServerData(server1, 64);
            let nicknameL32 = await processServerData(server1, 65);
            let nicknameF33 = await processServerData(server1, 66);
            let nicknameL33 = await processServerData(server1, 67);
            let nicknameF34 = await processServerData(server1, 68);
            let nicknameL34 = await processServerData(server1, 69);
            let nicknameF35 = await processServerData(server1, 70);
            let nicknameL35 = await processServerData(server1, 71);
            let nicknameF36 = await processServerData(server1, 72);
            let nicknameL36 = await processServerData(server1, 73);
            let nicknameF37 = await processServerData(server1, 74);
            let nicknameL37 = await processServerData(server1, 75);
            let nicknameF38 = await processServerData(server1, 76);
            let nicknameL38 = await processServerData(server1, 77);
            let nicknameF39 = await processServerData(server1, 78);
            let nicknameL39 = await processServerData(server1, 79);
            let nicknameF40 = await processServerData(server1, 80);
            let nicknameL40 = await processServerData(server1, 81);
            let nicknameF41 = await processServerData(server1, 82);
            let nicknameL41 = await processServerData(server1, 83);
            let nicknameF42 = await processServerData(server1, 84);
            let nicknameL42 = await processServerData(server1, 85);
            let nicknameF43 = await processServerData(server1, 86);
            let nicknameL43 = await processServerData(server1, 87);
            let nicknameF44 = await processServerData(server1, 88);
            let nicknameL44 = await processServerData(server1, 89);
            let nicknameF45 = await processServerData(server1, 90);
            let nicknameL45 = await processServerData(server1, 91);
            let nicknameF46 = await processServerData(server1, 92);
            let nicknameL46 = await processServerData(server1, 93);
            let nicknameF47 = await processServerData(server1, 94);
            let nicknameL47 = await processServerData(server1, 95);
            let nicknameF48 = await processServerData(server1, 96);
            let nicknameL48 = await processServerData(server1, 97);
            let nicknameF49 = await processServerData(server1, 98);
            let nicknameL49 = await processServerData(server1, 99);
            let nicknameF50 = await processServerData(server1, 100);
            let nicknameL50 = await processServerData(server1, 101);
            let nicknameF51 = await processServerData(server1, 102);
            let nicknameL51 = await processServerData(server1, 103);
            let nicknameF52 = await processServerData(server1, 104);
            let nicknameL52 = await processServerData(server1, 105);
            let nicknameF53 = await processServerData(server1, 106);
            let nicknameL53 = await processServerData(server1, 107);
            let nicknameF54 = await processServerData(server1, 108);
            let nicknameL54 = await processServerData(server1, 109);
            let nicknameF55 = await processServerData(server1, 110);
            let nicknameL55 = await processServerData(server1, 111);
            let nicknameF56 = await processServerData(server1, 112);
            let nicknameL56 = await processServerData(server1, 113);
            let nicknameF57 = await processServerData(server1, 114);
            let nicknameL57 = await processServerData(server1, 115);
            let nicknameF58 = await processServerData(server1, 116);
            let nicknameL58 = await processServerData(server1, 117);
            let nicknameF59 = await processServerData(server1, 118);
            let nicknameL59 = await processServerData(server1, 119);
            let nicknameF60 = await processServerData(server1, 120);
            let nicknameL60 = await processServerData(server1, 121);
            let nicknameF61 = await processServerData(server1, 122);
            let nicknameL61 = await processServerData(server1, 123);
            let nicknameF62 = await processServerData(server1, 124);
            let nicknameL62 = await processServerData(server1, 125);
            let nicknameF63 = await processServerData(server1, 126);
            let nicknameL63 = await processServerData(server1, 127);
            let nicknameF64 = await processServerData(server1, 128);
            let nicknameL64 = await processServerData(server1, 129);
            let nicknameF65 = await processServerData(server1, 130);
            let nicknameL65 = await processServerData(server1, 131);
            let nicknameF66 = await processServerData(server1, 132);
            let nicknameL66 = await processServerData(server1, 133);
            let nicknameF67 = await processServerData(server1, 134);
            let nicknameL67 = await processServerData(server1, 135);

            nicknameF1 = nicknameF1 === "N/A" ? [{text: 'RED FORUM', callback_data: 'addF1'}] : 1;
            nicknameL1 = nicknameL1 === "N/A" ? [{text: 'RED LOGS', callback_data: 'addL1'}] : 1;
            nicknameF2 = nicknameF2 === "N/A" ? [{text: 'GREEN FORUM', callback_data: 'addF2'}] : 1;
            nicknameL2 = nicknameL2 === "N/A" ? [{text: 'GREEN LOGS', callback_data: 'addL2'}] : 1;
            nicknameF3 = nicknameF3 === "N/A" ? [{text: 'BLUE FORUM', callback_data: 'addF3'}] : 1;
            nicknameL3 = nicknameL3 === "N/A" ? [{text: 'BLUE LOGS', callback_data: 'addL3'}] : 1;
            nicknameF4 = nicknameF4 === "N/A" ? [{text: 'YELLOW FORUM', callback_data: 'addF4'}] : 1;
            nicknameL4 = nicknameL4 === "N/A" ? [{text: 'YELLOW LOGS', callback_data: 'addL4'}] : 1;
            nicknameF5 = nicknameF5 === "N/A" ? [{text: 'ORANGE FORUM', callback_data: 'addF5'}] : 1;
            nicknameL5 = nicknameL5 === "N/A" ? [{text: 'ORANGE LOGS', callback_data: 'addL5'}] : 1;
            nicknameF6 = nicknameF6 === "N/A" ? [{text: 'PURPLE FORUM', callback_data: 'addF6'}] : 1;
            nicknameL6 = nicknameL6 === "N/A" ? [{text: 'PURPLE LOGS', callback_data: 'addL6'}] : 1;
            nicknameF7 = nicknameF7 === "N/A" ? [{text: 'LIME FORUM', callback_data: 'addF7'}] : 1;
            nicknameL7 = nicknameL7 === "N/A" ? [{text: 'LIME LOGS', callback_data: 'addL7'}] : 1;
            nicknameF8 = nicknameF8 === "N/A" ? [{text: 'PINK FORUM', callback_data: 'addF8'}] : 1;
            nicknameL8 = nicknameL8 === "N/A" ? [{text: 'PINK LOGS', callback_data: 'addL8'}] : 1;
            nicknameF9 = nicknameF9 === "N/A" ? [{text: 'CHERRY FORUM', callback_data: 'addF9'}] : 1;
            nicknameL9 = nicknameL9 === "N/A" ? [{text: 'CHERRY LOGS', callback_data: 'addL9'}] : 1;
            nicknameF10 = nicknameF10 === "N/A" ? [{text: 'BLACK FORUM', callback_data: 'addF10'}] : 1;
            nicknameL10 = nicknameL10 === "N/A" ? [{text: 'BLACK LOGS', callback_data: 'addL10'}] : 1;
            nicknameF11 = nicknameF11 === "N/A" ? [{text: 'INDIGO FORUM', callback_data: 'addF11'}] : 1;
            nicknameL11 = nicknameL11 === "N/A" ? [{text: 'INDIGO LOGS', callback_data: 'addL11'}] : 1;
            nicknameF12 = nicknameF12 === "N/A" ? [{text: 'WHITE FORUM', callback_data: 'addF12'}] : 1;
            nicknameL12 = nicknameL12 === "N/A" ? [{text: 'WHITE LOGS', callback_data: 'addL12'}] : 1;
            nicknameF13 = nicknameF13 === "N/A" ? [{text: 'MAGENTA FORUM', callback_data: 'addF13'}] : 1;
            nicknameL13 = nicknameL13 === "N/A" ? [{text: 'MAGENTA LOGS', callback_data: 'addL13'}] : 1;
            nicknameF14 = nicknameF14 === "N/A" ? [{text: 'CRIMSON FORUM', callback_data: 'addF14'}] : 1;
            nicknameL14 = nicknameL14 === "N/A" ? [{text: 'CRIMSON LOGS', callback_data: 'addL14'}] : 1;
            nicknameF15 = nicknameF15 === "N/A" ? [{text: 'GOLD FORUM', callback_data: 'addF15'}] : 1;
            nicknameL15 = nicknameL15 === "N/A" ? [{text: 'GOLD LOGS', callback_data: 'addL15'}] : 1;
            nicknameF16 = nicknameF16 === "N/A" ? [{text: 'AZURE FORUM', callback_data: 'addF16'}] : 1;
            nicknameL16 = nicknameL16 === "N/A" ? [{text: 'AZURE LOGS', callback_data: 'addL16'}] : 1;
            nicknameF17 = nicknameF17 === "N/A" ? [{text: 'PLATINUM FORUM', callback_data: 'addF17'}] : 1;
            nicknameL17 = nicknameL17 === "N/A" ? [{text: 'PLATINUM LOGS', callback_data: 'addL17'}] : 1;
            nicknameF18 = nicknameF18 === "N/A" ? [{text: 'AQUA FORUM', callback_data: 'addF18'}] : 1;
            nicknameL18 = nicknameL18 === "N/A" ? [{text: 'AQUA LOGS', callback_data: 'addL18'}] : 1;
            nicknameF19 = nicknameF19 === "N/A" ? [{text: 'GRAY FORUM', callback_data: 'addF19'}] : 1;
            nicknameL19 = nicknameL19 === "N/A" ? [{text: 'GRAY LOGS', callback_data: 'addL19'}] : 1;
            nicknameF20 = nicknameF20 === "N/A" ? [{text: 'ICE FORUM', callback_data: 'addF20'}] : 1;
            nicknameL20 = nicknameL20 === "N/A" ? [{text: 'ICE LOGS', callback_data: 'addL20'}] : 1;
            nicknameF21 = nicknameF21 === "N/A" ? [{text: 'CHILLI FORUM', callback_data: 'addF21'}] : 1;
            nicknameL21 = nicknameL21 === "N/A" ? [{text: 'CHILLI LOGS', callback_data: 'addL21'}] : 1;
            nicknameF22 = nicknameF22 === "N/A" ? [{text: 'CHOCO FORUM', callback_data: 'addF22'}] : 1;
            nicknameL22 = nicknameL22 === "N/A" ? [{text: 'CHOCO LOGS', callback_data: 'addL22'}] : 1;
            nicknameF23 = nicknameF23 === "N/A" ? [{text: 'MOSCOW FORUM', callback_data: 'addF23'}] : 1;
            nicknameL23 = nicknameL23 === "N/A" ? [{text: 'MOSCOW LOGS', callback_data: 'addL23'}] : 1;
            nicknameF24 = nicknameF24 === "N/A" ? [{text: 'SPB FORUM', callback_data: 'addF24'}] : 1;
            nicknameL24 = nicknameL24 === "N/A" ? [{text: 'SPB LOGS', callback_data: 'addL24'}] : 1;
            nicknameF25 = nicknameF25 === "N/A" ? [{text: 'UFA FORUM', callback_data: 'addF25'}] : 1;
            nicknameL25 = nicknameL25 === "N/A" ? [{text: 'UFA LOGS', callback_data: 'addL25'}] : 1;
            nicknameF26 = nicknameF26 === "N/A" ? [{text: 'SOCHI FORUM', callback_data: 'addF26'}] : 1;
            nicknameL26 = nicknameL26 === "N/A" ? [{text: 'SOCHI LOGS', callback_data: 'addL26'}] : 1;
            nicknameF27 = nicknameF27 === "N/A" ? [{text: 'KAZAN FORUM', callback_data: 'addF27'}] : 1;
            nicknameL27 = nicknameL27 === "N/A" ? [{text: 'KAZAN LOGS', callback_data: 'addL27'}] : 1;
            nicknameF28 = nicknameF28 === "N/A" ? [{text: 'SAMARA FORUM', callback_data: 'addF28'}] : 1;
            nicknameL28 = nicknameL28 === "N/A" ? [{text: 'SAMARA LOGS', callback_data: 'addL28'}] : 1;
            nicknameF29 = nicknameF29 === "N/A" ? [{text: 'ROSTOV FORUM', callback_data: 'addF29'}] : 1;
            nicknameL29 = nicknameL29 === "N/A" ? [{text: 'ROSTOV LOGS', callback_data: 'addL29'}] : 1;
            nicknameF30 = nicknameF30 === "N/A" ? [{text: 'ANAPA FORUM', callback_data: 'addF30'}] : 1;
            nicknameL30 = nicknameL30 === "N/A" ? [{text: 'ANAPA LOGS', callback_data: 'addL30'}] : 1;
            nicknameF31 = nicknameF31 === "N/A" ? [{text: 'EKB FORUM', callback_data: 'addF1'}] : 1;
            nicknameL31 = nicknameL31 === "N/A" ? [{text: 'EKB LOGS', callback_data: 'addL1'}] : 1;
            nicknameF32 = nicknameF32 === "N/A" ? [{text: 'KRASNODAR FORUM', callback_data: 'addF2'}] : 1;
            nicknameL32 = nicknameL32 === "N/A" ? [{text: 'KRASNODAR LOGS', callback_data: 'addL2'}] : 1;
            nicknameF33 = nicknameF33 === "N/A" ? [{text: 'ARZAMAS FORUM', callback_data: 'addF3'}] : 1;
            nicknameL33 = nicknameL33 === "N/A" ? [{text: 'ARZAMAS LOGS', callback_data: 'addL3'}] : 1;
            nicknameF34 = nicknameF34 === "N/A" ? [{text: 'NOVOSIBIRSK FORUM', callback_data: 'addF4'}] : 1;
            nicknameL34 = nicknameL34 === "N/A" ? [{text: 'NOVOSIBIRSK LOGS', callback_data: 'addL4'}] : 1;
            nicknameF35 = nicknameF35 === "N/A" ? [{text: 'GROZNY FORUM', callback_data: 'addF5'}] : 1;
            nicknameL35 = nicknameL35 === "N/A" ? [{text: 'GROZNY LOGS', callback_data: 'addL5'}] : 1;
            nicknameF36 = nicknameF36 === "N/A" ? [{text: 'SARATOV FORUM', callback_data: 'addF36'}] : 1;
            nicknameL36 = nicknameL36 === "N/A" ? [{text: 'SARATOV LOGS', callback_data: 'addL36'}] : 1;
            nicknameF37 = nicknameF37 === "N/A" ? [{text: 'OMSK FORUM', callback_data: 'addF37'}] : 1;
            nicknameL37 = nicknameL37 === "N/A" ? [{text: 'OMSK LOGS', callback_data: 'addL37'}] : 1;
            nicknameF38 = nicknameF38 === "N/A" ? [{text: 'IRKUTSK FORUM', callback_data: 'addF38'}] : 1;
            nicknameL38 = nicknameL38 === "N/A" ? [{text: 'IRKUTSK LOGS', callback_data: 'addL38'}] : 1;
            nicknameF39 = nicknameF39 === "N/A" ? [{text: 'VOLGOGRAD FORUM', callback_data: 'addF39'}] : 1;
            nicknameL39 = nicknameL39 === "N/A" ? [{text: 'VOLGOGRAD LOGS', callback_data: 'addL39'}] : 1;
            nicknameF40 = nicknameF40 === "N/A" ? [{text: 'VORONEZH FORUM', callback_data: 'addF40'}] : 1;
            nicknameL40 = nicknameL40 === "N/A" ? [{text: 'VORONEZH LOGS', callback_data: 'addL40'}] : 1;
            nicknameF41 = nicknameF41 === "N/A" ? [{text: 'BELGOROD FORUM', callback_data: 'addF41'}] : 1;
            nicknameL41 = nicknameL41 === "N/A" ? [{text: 'BELGOROD LOGS', callback_data: 'addL41'}] : 1;
            nicknameF42 = nicknameF42 === "N/A" ? [{text: 'MAKHACHKALA FORUM', callback_data: 'addF42'}] : 1;
            nicknameL42 = nicknameL42 === "N/A" ? [{text: 'MAKHACHKALA LOGS', callback_data: 'addL42'}] : 1;
            nicknameF43 = nicknameF43 === "N/A" ? [{text: 'VLADIKAVKAZ FORUM', callback_data: 'addF43'}] : 1;
            nicknameL43 = nicknameL43 === "N/A" ? [{text: 'VLADIKAVKAZ LOGS', callback_data: 'addL43'}] : 1;
            nicknameF44 = nicknameF44 === "N/A" ? [{text: 'VLADIVOSTOK FORUM', callback_data: 'addF44'}] : 1;
            nicknameL44 = nicknameL44 === "N/A" ? [{text: 'VLADIVOSTOK LOGS', callback_data: 'addL44'}] : 1;
            nicknameF45 = nicknameF45 === "N/A" ? [{text: 'KALININGRAD FORUM', callback_data: 'addF45'}] : 1;
            nicknameL45 = nicknameL45 === "N/A" ? [{text: 'KALININGRAD LOGS', callback_data: 'addL45'}] : 1;
            nicknameF46 = nicknameF46 === "N/A" ? [{text: 'CHELYABINSK FORUM', callback_data: 'addF46'}] : 1;
            nicknameL46 = nicknameL46 === "N/A" ? [{text: 'CHELYABINSK LOGS', callback_data: 'addL46'}] : 1;
            nicknameF47 = nicknameF47 === "N/A" ? [{text: 'KRASNOYARSK FORUM', callback_data: 'addF47'}] : 1;
            nicknameL47 = nicknameL47 === "N/A" ? [{text: 'KRASNOYARSK LOGS', callback_data: 'addL47'}] : 1;
            nicknameF48 = nicknameF48 === "N/A" ? [{text: 'CHEBOKSARY FORUM', callback_data: 'addF48'}] : 1;
            nicknameL48 = nicknameL48 === "N/A" ? [{text: 'CHEBOKSARY LOGS', callback_data: 'addL48'}] : 1;
            nicknameF49 = nicknameF49 === "N/A" ? [{text: 'KHABAROVSK FORUM', callback_data: 'addF49'}] : 1;
            nicknameL49 = nicknameL49 === "N/A" ? [{text: 'KHABAROVSK LOGS', callback_data: 'addL49'}] : 1;
            nicknameF50 = nicknameF50 === "N/A" ? [{text: 'PERM FORUM', callback_data: 'addF50'}] : 1;
            nicknameL50 = nicknameL50 === "N/A" ? [{text: 'PREM LOGS', callback_data: 'addL50'}] : 1;
            nicknameF51 = nicknameF51 === "N/A" ? [{text: 'TULA FORUM', callback_data: 'addF51'}] : 1;
            nicknameL51 = nicknameL51 === "N/A" ? [{text: 'TULA LOGS', callback_data: 'addL51'}] : 1;
            nicknameF52 = nicknameF52 === "N/A" ? [{text: 'RYAZAN FORUM', callback_data: 'addF52'}] : 1;
            nicknameL52 = nicknameL52 === "N/A" ? [{text: 'RYAZAN LOGS', callback_data: 'addL52'}] : 1;
            nicknameF53 = nicknameF53 === "N/A" ? [{text: 'MURMANSK FORUM', callback_data: 'addF53'}] : 1;
            nicknameL53 = nicknameL53 === "N/A" ? [{text: 'MURMANSK LOGS', callback_data: 'addL53'}] : 1;
            nicknameF54 = nicknameF54 === "N/A" ? [{text: 'PENZA FORUM', callback_data: 'addF54'}] : 1;
            nicknameL54 = nicknameL54 === "N/A" ? [{text: 'PENZA LOGS', callback_data: 'addL54'}] : 1;
            nicknameF55 = nicknameF55 === "N/A" ? [{text: 'KUSRK FORUM', callback_data: 'addF55'}] : 1;
            nicknameL55 = nicknameL55 === "N/A" ? [{text: 'KURSK LOGS', callback_data: 'addL55'}] : 1;
            nicknameF56 = nicknameF6 === "N/A" ? [{text: 'ARKHANGELSK FORUM', callback_data: 'addF56'}] : 1;
            nicknameL56 = nicknameL6 === "N/A" ? [{text: 'ARKHANGELSK LOGS', callback_data: 'addL56'}] : 1;
            nicknameF57 = nicknameF7 === "N/A" ? [{text: 'ORENBURG FORUM', callback_data: 'addF57'}] : 1;
            nicknameL57 = nicknameL7 === "N/A" ? [{text: 'ORENBURG LOGS', callback_data: 'addL57'}] : 1;
            nicknameF58 = nicknameF8 === "N/A" ? [{text: 'KIROV FORUM', callback_data: 'addF58'}] : 1;
            nicknameL58 = nicknameL8 === "N/A" ? [{text: 'KIROV LOGS', callback_data: 'addL58'}] : 1;
            nicknameF59 = nicknameF59 === "N/A" ? [{text: 'KEMEROVO FORUM', callback_data: 'addF59'}] : 1;
            nicknameL59 = nicknameL59 === "N/A" ? [{text: 'KEMEROVO LOGS', callback_data: 'addL59'}] : 1;
            nicknameF60 = nicknameF60 === "N/A" ? [{text: 'TYUMEN FORUM', callback_data: 'addF60'}] : 1;
            nicknameL60 = nicknameL60 === "N/A" ? [{text: 'TYUMEN LOGS', callback_data: 'addL60'}] : 1;
            nicknameF61 = nicknameF61 === "N/A" ? [{text: 'TOLYATTI FORUM', callback_data: 'addF61'}] : 1;
            nicknameL61 = nicknameL61 === "N/A" ? [{text: 'TOLYATTI LOGS', callback_data: 'addL61'}] : 1;
            nicknameF62 = nicknameF62 === "N/A" ? [{text: 'IVANOVO FORUM', callback_data: 'addF62'}] : 1;
            nicknameL62 = nicknameL62 === "N/A" ? [{text: 'IVANOVO LOGS', callback_data: 'addL62'}] : 1;
            nicknameF63 = nicknameF63 === "N/A" ? [{text: 'STAVROPOL FORUM', callback_data: 'addF63'}] : 1;
            nicknameL63 = nicknameL63 === "N/A" ? [{text: 'STAVROPOL LOGS', callback_data: 'addL63'}] : 1;
            nicknameF64 = nicknameF64 === "N/A" ? [{text: 'SMIOLENSK FORUM', callback_data: 'addF64'}] : 1;
            nicknameL64 = nicknameL64 === "N/A" ? [{text: 'SMIOLENSK LOGS', callback_data: 'addL64'}] : 1;
            nicknameF65 = nicknameF65 === "N/A" ? [{text: 'PSKOV FORUM', callback_data: 'addF65'}] : 1;
            nicknameL65 = nicknameL65 === "N/A" ? [{text: 'PSKOV LOGS', callback_data: 'addL65'}] : 1;
            nicknameF66 = nicknameF66 === "N/A" ? [{text: 'BRYANSK FORUM', callback_data: 'addF66'}] : 1;
            nicknameL66 = nicknameL66 === "N/A" ? [{text: 'BRYANSK LOGS', callback_data: 'addL66'}] : 1;
            nicknameF67 = nicknameF67 === "N/A" ? [{text: 'OREL FORUM', callback_data: 'addF67'}] : 1;
            nicknameL67 = nicknameL67 === "N/A" ? [{text: 'OREL LOGS', callback_data: 'addL67'}] : 1;

            if (nicknameF1 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF1);
            }
            if (nicknameL1 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL1);
            }
            if (nicknameF2 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF2);
            }
            if (nicknameL2 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL2);
            }
            if (nicknameF3 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF3);
            }
            if (nicknameL3 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL3);
            }
            if (nicknameF4 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF4);
            }
            if (nicknameL4 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL4);
            }
            if (nicknameF5 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF5);
            }
            if (nicknameL5 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL5);
            }
            if (nicknameF6 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF6);
            }
            if (nicknameL6 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL6);
            }
            if (nicknameF7 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF7);
            }
            if (nicknameL7 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL7);
            }
            if (nicknameF8 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF8);
            }
            if (nicknameL8 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL8);
            }
            if (nicknameF9!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF9);
            }
            if (nicknameL9 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL9);
            }
            if (nicknameF10 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF10);
            }
            if (nicknameL10 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL10);
            }
            if (nicknameF11 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF11);
            }
            if (nicknameL11 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL11);
            }
            if (nicknameF12 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF12);
            }
            if (nicknameL12 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL12);
            }
            if (nicknameF13 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF13);
            }
            if (nicknameL13 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL13);
            }
            if (nicknameF14 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF14);
            }
            if (nicknameL14 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL14);
            }
            if (nicknameF15 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF15);
            }
            if (nicknameL15 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL15);
            }
            if (nicknameF16 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF16);
            }
            if (nicknameL16 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL16);
            }
            if (nicknameF17 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF17);
            }
            if (nicknameL17 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL17);
            }
            if (nicknameF18 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF18);
            }
            if (nicknameL18 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL18);
            }
            if (nicknameF19!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF19);
            }
            if (nicknameL19 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL19);
            }
            if (nicknameF20 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF20);
            }
            if (nicknameL20 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL20);
            }
            if (nicknameF21 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF21);
            }
            if (nicknameL21 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL21);
            }
            if (nicknameF22 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF22);
            }
            if (nicknameL22 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL22);
            }
            if (nicknameF23 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF23);
            }
            if (nicknameL23 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL23);
            }
            if (nicknameF24 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF24);
            }
            if (nicknameL24 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL24);
            }
            if (nicknameF25 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF25);
            }
            if (nicknameL25 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL25);
            }
            if (nicknameF26 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF26);
            }
            if (nicknameL26 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL26);
            }
            if (nicknameF27 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF27);
            }
            if (nicknameL27 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL27);
            }
            if (nicknameF28 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF28);
            }
            if (nicknameL28 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL28);
            }
            if (nicknameF29!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF29);
            }
            if (nicknameL29 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL29);
            }
            if (nicknameF30 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF30);
            }
            if (nicknameL30 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL30);
            }
            if (nicknameF31 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF31);
            }
            if (nicknameL31 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL31);
            }
            if (nicknameF32 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF32);
            }
            if (nicknameL32 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL32);
            }
            if (nicknameF33 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF33);
            }
            if (nicknameL33 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL33);
            }
            if (nicknameF34 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF34);
            }
            if (nicknameL34 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL34);
            }
            if (nicknameF35 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF35);
            }
            if (nicknameL35 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL35);
            }
            if (nicknameF36 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF36);
            }
            if (nicknameL36 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL36);
            }
            if (nicknameF37 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF37);
            }
            if (nicknameL37 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL37);
            }
            if (nicknameF38 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF38);
            }
            if (nicknameL38 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL38);
            }
            if (nicknameF39!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF39);
            }
            if (nicknameL39 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL39);
            }
            if (nicknameF40 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF40);
            }
            if (nicknameL40 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL40);
            }
            if (nicknameF41 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF41);
            }
            if (nicknameL41 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL41);
            }
            if (nicknameF42 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF42);
            }
            if (nicknameL42 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL42);
            }
            if (nicknameF43 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF43);
            }
            if (nicknameL43 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL43);
            }
            if (nicknameF44 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF44);
            }
            if (nicknameL44 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL44);
            }
            if (nicknameF45 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF45);
            }
            if (nicknameL45 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL45);
            }
            if (nicknameF46 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF46);
            }
            if (nicknameL46 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL46);
            }
            if (nicknameF47 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF47);
            }
            if (nicknameL47 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL47);
            }
            if (nicknameF48 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF48);
            }
            if (nicknameL48 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL48);
            }
            if (nicknameF49!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF49);
            }
            if (nicknameL49 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL49);
            }
            if (nicknameF50 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF50);
            }
            if (nicknameL50 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL50);
            }
            if (nicknameF51 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF51);
            }
            if (nicknameL51 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL51);
            }
            if (nicknameF52 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF52);
            }
            if (nicknameL52 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL52);
            }
            if (nicknameF53 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF53);
            }
            if (nicknameL53 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL53);
            }
            if (nicknameF54 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF54);
            }
            if (nicknameL54 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL54);
            }
            if (nicknameF55 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF55);
            }
            if (nicknameL55 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL55);
            }
            if (nicknameF56 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF56);
            }
            if (nicknameL56 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL56);
            }
            if (nicknameF57 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF57);
            }
            if (nicknameL57 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL57);
            }
            if (nicknameF58 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF58);
            }
            if (nicknameL58 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL58);
            }
            if (nicknameF59!== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF59);
            }
            if (nicknameL59 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL59);
            }
            if (nicknameF60 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF60);
            }
            if (nicknameL60 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL60);
            }
            if (nicknameF61 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF61);
            }
            if (nicknameL61 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL61);
            }
            if (nicknameF62 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF62);
            }
            if (nicknameL62 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL62);
            }
            if (nicknameF63 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF63);
            }
            if (nicknameL63 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL63);
            }
            if (nicknameF64 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF64);
            }
            if (nicknameL64 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL64);
            }
            if (nicknameF65 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF65);
            }
            if (nicknameL65 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL65);
            }
            if (nicknameF66 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF66);
            }
            if (nicknameL66 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL66);
            }
            if (nicknameF67 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameF67);
            }
            if (nicknameL67 !== 1) {
                spisokAddTechForLevel2Cur1.reply_markup.inline_keyboard.push(nicknameL67);
            }
            
            await bot.sendMessage(chatID, 'Вам доступна возможность назначения специалистов на любом из серверов. Выберите действие:', spisokAddTechForLevel2Cur1)
        }
    }

    if (data === 'back') {
        const chatMember = await bot.getChatMember(chatID, msg.from.id);

        if (chatMember.status === 'kicked') {
            console.log('Пользователь заблокировал бота');
            return;
        }

        const { rows } = await pool.query('SELECT users.user_level, users.user_workserver1, users.user_way1 FROM users WHERE user_id = $1', [chatID]);

        let level = rows.length > 0 ? rows[0].user_level : 0;


        if (level === 0) {
            await bot.sendMessage(chatID,'Уровень Ваших прав не позволяет Вам использовать данную команду');
        }

        if (level === 1) {
            await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel1);
        }

        if (level === 2) {
            await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel2);
        }

        if (level === 3) {
            await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel3);
        }

        if (level === 4) {
            await bot.sendMessage(chatID,`Доброго времени суток, ${nickname}! Вам необходимо выбрать действие:`, startBtnWlevel4);
        }
    }
})