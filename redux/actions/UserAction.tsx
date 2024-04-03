import UserConstant from "../constants/UserConstant";
import {IAccountInfo} from "../../api/User/ApiUser";
import {CommonReduxAction} from "../../types/common";

export default {
  userLogin: (user: IAccountInfo): {type: string; user: IAccountInfo} => {
    return {
      type: UserConstant.USER_LOGIN,
      user,
    };
  },

  userLogout: (): CommonReduxAction => {
    return {
      type: UserConstant.USER_LOGOUT,
    };
  },

  userGetProfile: (dataProfile: any): {type: string; dataProfile: any} => {
    return {
      type: UserConstant.USER_GET_PROFILE,
      dataProfile,
    };
  },
};
