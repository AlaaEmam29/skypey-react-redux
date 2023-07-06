import { faker } from '@faker-js/faker';

export const status = ["online", "offline"]
export const count = 10;
export const userIDs = Array.from({ length: count }, () => faker.string.uuid());
export const MINMESSAGES = 5
export const MAXMESSAGES = 20
export const ownerId = faker.string.uuid()