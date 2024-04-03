import StatusBarConstants from "../constants/StatusBarConstants";
import {CommonReduxAction} from "../../types/common";

export default {
  open: (): CommonReduxAction => {
    return {
      type: StatusBarConstants.STATUS_BAR_OPEN,
    };
  },

  close: (): CommonReduxAction => {
    return {
      type: StatusBarConstants.STATUS_BAR_CLOSE,
    };
  },

  toggle: (): CommonReduxAction => {
    return {
      type: StatusBarConstants.STATUS_BAR_TOGGLE,
    };
  },

  setColor: (color: string): {type: string; color: string} => {
    return {
      type: StatusBarConstants.STATUS_BAR_SET_COLOR,
      color,
    };
  },
};
