let keys = {};

function setKey(userId, key) {
  keys[userId] = key;
}

function getKey(userId) {
  return keys[userId];
}

function getUsers() {
  return Object.keys(keys).map(userId => {
    return {
      userId,
    };
  });
}

export default {
  setKey,
  getKey,
  getUsers,
}
