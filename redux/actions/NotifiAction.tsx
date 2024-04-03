import {CommonReduxAction} from "../../types/common";
import NotifiConstant from "../constants/NotifiConstant";

export default {
  notifyChange: (countView: number): {type: string; view: number} => {
    return {
      type: NotifiConstant.NOTIFY_CHANGE,
      view: countView,
    };
  },

  notifyClear: (): CommonReduxAction => {
    return {
      type: NotifiConstant.NOTIFY_CLEAR,
    };
  },
};
