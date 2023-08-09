import { Client } from 'ts-postgres';
import axios from 'axios';


async function main() {
     /*
     Main Logic:
    - Get all users external ids from DB
    - Iterate on the ids
      - Get each user from Voxy API and append it to a list
    - Iterate on the Voxy-Users
      - For each user calculate it's current trial status
      - If a trial is about to end(2 days?) then push to a queue
     */

}

main();