import {CommonReduxAction} from "../../types/common";
import ContentLanguageConstant from "../constants/ContentLanguageConstant";

export default {
  changeContentLanguage: (
    language: string
  ): {type: string; language: string} => ({
    type: ContentLanguageConstant.CHANGE_LANGUAGE,
    language,
  }),

  setDefaultContentLanguage: (): CommonReduxAction => ({
    type: ContentLanguageConstant.RESET_LANGUAGE,
  }),
};
