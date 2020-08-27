import { people, thlim, getById } from "./db";

const resolvers = {
  Query: {
    author: () => thlim,
    people: () => people,
    person: (_, { id }) => getById(id)
  },
};

export default resolvers;
