import logger from "../util/logger";
import axios from 'axios';
import { User } from '../types/user';
import { apiRequestHeaders, apiBaseUrl } from '../util/consts'


export async function getUserApiRequest(userExternalId: string){
    
  try {
  
    const { data, status } = await axios.get<User>(
      apiBaseUrl + "/" + userExternalId,
      {
        headers: apiRequestHeaders,
      },
    );

    logger.info('Data of request: ',JSON.stringify(data, null, 4));
    logger.info('response status is:', status);

    return data;

  }catch (error){
    
    logger.error("An error occured: ${error}");
    

  } finally {
  }
}