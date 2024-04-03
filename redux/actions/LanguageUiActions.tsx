import {CommonReduxAction} from "../../types/common";
import LanguageConstant from "../constants/LanguageUiConstants";

export default {
  changeLanguage: (language: string): {type: string; language: string} => ({
    type: LanguageConstant.CHANGE_LANGUAGE,
    language,
  }),

  setDefaultLanguage: (): CommonReduxAction => ({
    type: LanguageConstant.RESET_LANGUAGE,
  }),
};
