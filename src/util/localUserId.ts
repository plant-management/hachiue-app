import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUserId = async (userId: string) => {
  try {
    await AsyncStorage.setItem("userId", userId);
  } catch (e) {
    // saving error
  }
};

const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem("userId");
    if (userId !== null) {
      // value previously stored
      return userId;
    }
  } catch (e) {
    // error reading value
  }
};

export { storeUserId, getUserId };
