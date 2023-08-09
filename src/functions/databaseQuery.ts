import logger from "../util/logger";
import { Client, ResultRow } from "ts-postgres";
import { databaseClientParameters } from './../util/consts'

export async function databaseQuery(query: string) {

    const queryResultRows: ResultRow[] = [];
    const client = new Client(databaseClientParameters);
    await client.connect();

    try {
        
        const result = await client.query(query);

        for await (const row of result) {
            console.log(row);
            queryResultRows.push(row);
        }

    }catch (error){
        logger.error("An error occured: ${error}");

    } finally {
        await client.end();
        logger.error("Database query '${query}' was successful");
        return queryResultRows;
    }
}