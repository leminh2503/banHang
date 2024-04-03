import {CommonReduxAction} from "../../types/common";
import ConfirmModalFollowingConstant from "../constants/ConfirmModalFollowingConstant";

export default {
  confirm: (): CommonReduxAction => {
    return {
      type: ConfirmModalFollowingConstant.USER_CONFIRM,
    };
  },
};
