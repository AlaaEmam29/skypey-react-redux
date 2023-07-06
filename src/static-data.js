import { faker } from '@faker-js/faker';
import { MAXMESSAGES, MINMESSAGES, count, ownerId, userIDs } from './constant/constant';
import {sentence} from 'txtgen'
export function createRandomUser(userIDs , count = 1) {
   const users = [];
    for (let i = 0; i < count; i++) { 
            const user_id = userIDs[i];

    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      profile_pic: faker.image.avatar(),
      status: sentence(),
      user_id ,
    });
  }
  return users;

}



export function createRandomMessage(count, userIDs) {
  const messages = {};
  for (let i = 0; i < count; i++) {
    const user_id = userIDs[i];
      messages[user_id] = {};
      const numMessages = faker.number.int({ min: MINMESSAGES, max: MAXMESSAGES });
      for (let j = 0; j < numMessages; j++) {
          messages[user_id][j] = {
        text:sentence(),
            is_user_msg: faker.datatype.boolean(),
            msg_id: faker.string.uuid(),
                edit:false

          }
        
        
      }
}
  return messages;
}
export const USERS = createRandomUser(userIDs , count);
export const MESSAGES = createRandomMessage(count, userIDs);
export const OWNER = createRandomUser(ownerId)[0];
