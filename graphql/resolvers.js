const thlim = {
  name: "thLim",
  age: 28,
  gender: "male",
};

const resolvers = {
  Query: {
    name: () => "thLim",
    person: () => thlim,
  },
};
export default resolvers;
