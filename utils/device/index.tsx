import {Platform, Dimensions} from "react-native";

// size device
export const getWidthScreen = Dimensions.get("window").width;

export const getHeightScreen = Dimensions.get("window").height;

// type device
export const isIOS = (): boolean => {
  return Platform.OS === "ios";
};
