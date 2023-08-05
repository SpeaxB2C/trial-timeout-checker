import { Client } from 'ts-postgres';
import axios from 'axios';

type User = {
    email_address: string,
    phone_number: string,
    can_reserve_group_sessions: boolean,
    date_of_next_vpa: string,
    purchased_tutoring_credits: number,
    tutoring_credits_used: number,
    expiration_date: string,
    last_name: string,
    level: string,
    tutoring_credits: number,
    date_joined: string,
    native_language: string,
    first_name: string,
    segments: any[],
    access_type: string,
    feature_group: FeatureGroup
  }

type FeatureGroup = {
    name: string,
    id: number,
}
  
  type GetUsersResponse = {
    data: User[];
  };

async function getUsersFromDatabase(){

    const client = new Client({"host": 'localhost'});
    const externalUserIds: string[] = [];
    await client.connect();

    try {
        
        const result = client.query(
            "SELECT * FROM USERS",
        );

        

        for await (const row of result) {
            console.log(row.get('external_user_id'));
            externalUserIds.push(row.get('external_user_id'));
        }
    } finally {
        await client.end();
        return externalUserIds;
    }

}


async function getUserFromVoxyApi(userExternalId: String){
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<User>(
          baseUrl + "/" + userExternalId,
          {
            headers: {
              Accept: 'application/json',
              Authorization: 'Voxy ${apiKey}:${apiSecret}',
            },
          },
        );
    
        console.log(JSON.stringify(data, null, 4));
    
        // 👇️ "response status is: 200"
        console.log('response status is: ', status);
    
        return data;
}

function iterateDatabaseUsers(externalUserIds: string[]){
    const voxyUsers: User[] = [];
    externalUserIds.forEach(async function (externalUserId){
        console.log(externalUserId);
            const user = await getUserFromVoxyApi(externalUserId);
            voxyUsers.push(user);
    });
}

function iterateVoxyUsers(users: Array<User>){

}

function calculateUserTrial(){

}

async function main() {

    var external_user_ids = await getUsersFromDatabase();

}

await main();