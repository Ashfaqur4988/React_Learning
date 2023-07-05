export const dbConnection = () => {
  return {
    connect: () => {
      console.log("connection established");
    },
    disconnect: () => {
      console.log("connection closed");
    },
  };
};
