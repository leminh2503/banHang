import {CommonReduxAction} from "../../types/common";
import DarkModeConstant from "../constants/DarkModeConstant";

export default {
  darkTheme: (): CommonReduxAction => {
    return {
      type: DarkModeConstant.DARK_THEME,
    };
  },

  lightTheme: (): CommonReduxAction => {
    return {
      type: DarkModeConstant.LIGHT_THEME,
    };
  },
};
