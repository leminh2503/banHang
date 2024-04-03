import {CommonReduxAction} from "../../types/common";
import NotificationConstant from "../constants/NotificationConstant";

export default {
  open: (): CommonReduxAction => {
    return {
      type: NotificationConstant.NOTIFICATION_OPEN,
    };
  },

  close: (): CommonReduxAction => {
    return {
      type: NotificationConstant.NOTIFICATION_CLOSE,
    };
  },
};
