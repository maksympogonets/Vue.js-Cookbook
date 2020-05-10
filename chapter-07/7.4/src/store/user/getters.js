function getUsersList(state) {
  return state.data.usersList;
}

function getUsersData(state) {
  return state.data.userData;
}

function getUserById(state) {
  return (userId) => {
    return state.data.usersList.find(u => u.id === userId);
  }
}

function isLoading(state) {
  return state.loading;
}

function hasError(state) {
  return state.error;
}

export default {
  getUsersList,
  getUsersData,
  getUserById,
  isLoading,
  hasError,
};
