export const updateUserData = (user: {}) => {
  return {
    type: "SET_USER",
    user: user,
  };
};
