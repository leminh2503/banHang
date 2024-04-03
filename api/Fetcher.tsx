import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import _ from "lodash";
import Config from "../config";
// import UserAction from "../redux/actions/UserAction";
// import RequiredAuthenticationAction from "../redux/actions/RequiredAuthenticationAction";
import store, {persistor} from "../redux/store";
import {showError} from "../utils/notification";
import {setCredentials} from "../redux/UserInfo/slice";
import {useAppSelector} from "../redux/hooks";
import {selectLanguage} from "../redux/Language/slice";
// import {IAccountInfo} from "./User/ApiUser";
// import {useTranslation} from "react-i18next";

export interface IDataError {
  status: string;
  message: string;
  error?: {
    username?: string[];
    email?: string[];
    amount?: string[];
    category_id?: string[];
    condition?: string[];
    description?: string[];
    district_given_code?: string[];
    name?: string[];
    province_given_code?: string[];
    ward_given_code?: string[];
    phone_number?: string[];
    password?: string[];
    display_name?: string[];
  };
  code?: string;
}

export interface IMetadata {
  time?: string;
  totalPages: number;
  totalItems: number;
  currentPage: number;
}

export interface IDataWithMeta<T> {
  meta: IMetadata;
  data: T;
}

interface IResponseDTO {
  success?: boolean;
  errorCode?: string;
  message?: string;
  meta?: IMetadata;
  data?: any;
}

// interface IResponseWithMetadataDTO<T> {
//   success?: boolean;
//   errorCode?: string;
//   message?: string;
//   meta: IMetadata;
//   data?: T;
// }

interface IFetcherOptions {
  token?: string;
  withToken?: boolean;
  withMetadata?: boolean;
  displayError?: boolean;
  baseUrl?: string;
  contentType?: string;
}

function displayError(dataError: IDataError): void {
  // const {t} = useTranslation()

  console.log("dataError", dataError);

  try {
    let errorMessage;
    if (dataError) {
      if (dataError.message) {
        errorMessage = dataError.message;
      } else if (dataError.error) {
        console.log("dataErrorádasd, ");
        if (Array.isArray(dataError.error.username)) {
          errorMessage = dataError.error.username[0];
        } else if (Array.isArray(dataError.error.email)) {
          errorMessage = dataError.error.email[0];
        } else if (Array.isArray(dataError.error.amount)) {
          errorMessage = dataError.error.amount[0];
        } else if (Array.isArray(dataError.error?.district_given_code)) {
          errorMessage = dataError.error?.district_given_code[0];
        } else if (Array.isArray(dataError.error?.name)) {
          errorMessage = dataError.error?.name[0];
        } else if (Array.isArray(dataError.error?.condition)) {
          errorMessage = dataError.error?.condition[0];
        } else if (Array.isArray(dataError.error?.category_id)) {
          errorMessage = dataError.error?.category_id[0];
        } else if (Array.isArray(dataError.error?.description)) {
          errorMessage = dataError.error?.description[0];
        } else if (Array.isArray(dataError.error?.province_given_code)) {
          errorMessage = dataError.error?.province_given_code[0];
        } else if (Array.isArray(dataError.error?.ward_given_code)) {
          errorMessage = dataError.error?.ward_given_code[0];
        } else if (Array.isArray(dataError.error?.phone_number)) {
          errorMessage = dataError.error?.phone_number[0];
        } else if (Array.isArray(dataError.error?.password)) {
          errorMessage = dataError.error?.password[0];
        } else if (Array.isArray(dataError.error?.display_name)) {
          errorMessage = dataError.error?.display_name[0];
        }
      } else if (dataError.code) {
        errorMessage = dataError.code;
      }
    } else {
      errorMessage = "Đã có lỗi xảy ra, vui lòng liên hệ bộ phận kĩ thuật";
    }
    showError(
      errorMessage ?? "Đã có lỗi xảy ra, vui lòng liên hệ bộ phận kĩ thuật"
    );
  } catch (e) {
    showError(_.toString(e));
  }
}

export function fetcher<T>(
  config: AxiosRequestConfig,
  options: IFetcherOptions = {}
): Promise<T> {
  // console.log("res", config.data);
  // const language = "vi";
  const defaultOptions: IFetcherOptions = {
    withToken: Config.NETWORK_CONFIG.USE_TOKEN,
    withMetadata: Config.NETWORK_CONFIG.WITH_METADATA,
    displayError: Config.NETWORK_CONFIG.DISPLAY_ERROR,
    ...options,
  };
  const {language} = store.getState().userReducer;

  const apiClient = axios.create({
    headers: {
      "Content-Type": defaultOptions?.contentType ?? "application/json",
      "X-localization": language ?? "",
      "Accept": "*/*",
    },
    baseURL: defaultOptions?.baseUrl ?? Config.NETWORK_CONFIG.API_BASE_URL,
    timeout: Config.NETWORK_CONFIG.TIMEOUT,
  });
  const {credentials} = store.getState().userReducer;

  console.log("credentials======", credentials);
  console.log("language-----------", language, config.url);

  // Access Token
  if (defaultOptions.token && defaultOptions.token?.length > 0) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${defaultOptions.token}`;
  } else {
    if (defaultOptions.withToken) {
      const token = credentials;
      if (token) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }
  }

  return new Promise<never>((resolve, reject) => {
    apiClient
      .request<AxiosResponse<IResponseDTO>>(config)
      .then(async (response) => {
        if (response.data) {
          if (response.data === undefined) {
            const dataEmpty: IDataError = {
              status: "ERROR???",
              message: "Data Empty",
            };
            if (defaultOptions.displayError) {
              displayError(dataEmpty);
            }
            reject(dataEmpty);
            return;
          }
          resolve(response?.data);
          return;
        }
        const dataError: IDataError = {
          status: response.data,
          message: response.data,
        };

        console.log("displayError", response);

        if (defaultOptions.displayError) {
          displayError(dataError);
        }
        // console.log("dataError", dataError);
        reject(dataError);
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          // Axios error
          const lostErrorVi =
            "Mất kết nối server. Vui lòng kiểm tra đường truyền internet của bạn.";

          const somethingsWrong: IDataError = {
            status: "ERROR???",
            // message: language === "ko" ? lostErrorKo : lostErrorVi,
            message: lostErrorVi,
            code: "404",
          };

          // @ts-ignore
          const dataError: IDataError =
            error?.response?.data ?? somethingsWrong;
          if (error.response?.status === 401) {
            console.log("error.response?.status", error.response);
            store.dispatch(setCredentials(""));
          }
          if (dataError)
            if (dataError.code === "401") {
              const messErrAuth =
                "Phiên đăng nhập đã hết hạn\nVui lòng đăng nhập lại";
              showError(messErrAuth);
              store.dispatch(setCredentials(""));
              // store.dispatch(UserAction.userLogout());
            }

          if (defaultOptions.displayError) {
            console.log("error.response", error?.response?.data);
            console.log("dataError", dataError);
            displayError(dataError);
          }
        } else {
          // Native error
          showError(_.toString(error));
        }
        return reject(error);
      });
  });
}

export function fetcherUploadFile<T>(
  config: AxiosRequestConfig,
  options: IFetcherOptions = {}
): Promise<T> {
  const defaultOptions: IFetcherOptions = {
    withToken: Config.NETWORK_CONFIG.USE_TOKEN,
    withMetadata: Config.NETWORK_CONFIG.WITH_METADATA,
    displayError: Config.NETWORK_CONFIG.DISPLAY_ERROR,
    ...options,
  };
  const {language} = store.getState().userReducer;

  const apiClient = axios.create({
    headers: {
      "Accept": "*/*",
      "Content-Type": "multipart/form-data",
      "X-localization": language ?? "",
    },
    baseURL: Config.NETWORK_CONFIG.API_BASE_URL,
    timeout: Config.NETWORK_CONFIG.TIMEOUT,
  });
  const state = store.getState();
  const language1 = state.languageUi.languageUi;
  apiClient.defaults.headers.common.Language = language1;

  // Access Token
  if (defaultOptions.token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${defaultOptions.token}`;
  } else {
    if (defaultOptions.withToken) {
      const token = state.userReducer?.credentials;

      if (token) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }
  }

  return new Promise<never>((resolve, reject) => {
    apiClient
      .request<AxiosResponse<IResponseDTO>>(config)
      .then(async (response) => {
        if (response.data) {
          if (response.data === undefined) {
            const dataEmpty: IDataError = {
              status: "ERROR???",
              message: "Data Empty",
            };
            if (defaultOptions.displayError) {
              displayError(dataEmpty);
            }
            reject(dataEmpty);
            return;
          }
          resolve(response?.data);
          return;
        }
        const dataError: IDataError = {
          status: response.data,
          message: response.data,
        };

        if (defaultOptions.displayError) {
          displayError(dataError);
        }

        console.log("dataError", dataError);
        reject(dataError);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
        if (axios.isAxiosError(error)) {
          // Axios error

          const lostErrorVi =
            "Mất kết nối server. Vui lòng kiểm tra đường truyền internet của bạn.";

          const lostErrorKo =
            "서버 연결이 끊어졌습니다. 인터넷 연결을 확인하십시오.";

          const somethingsWrong: IDataError = {
            status: "ERROR???",
            message: language1 === "ko" ? lostErrorKo : lostErrorVi,
            code: "404",
          };

          // @ts-ignore
          const dataError: IDataError =
            error?.response?.data ?? somethingsWrong;

          console.log("error?.response?.data", dataError);

          if (dataError?.message === "AUTH3001.NotAuthenticated") {
            persistor.purge();
            // const navigate = useNavigation();
            // navigate.navigate("LoginRoute");
          } else {
            if (defaultOptions.displayError) {
              displayError(dataError);
            }
          }
        } else {
          // Native error
          showError(_.toString(error));
        }

        return reject(error);
      });
  });
}

// export function fetcherWithMetadata<T>(
//     config: AxiosRequestConfig,
//     options: IFetcherOptions = {}
// ): Promise<{data: T; meta: IMetadata}> {
//   const defaultOptions: IFetcherOptions = {
//     withToken: Config.NETWORK_CONFIG.USE_TOKEN,
//     withMetadata: true,
//     displayError: Config.NETWORK_CONFIG.DISPLAY_ERROR,
//     ...options,
//   };
//
//   const apiClient = axios.create({
//     headers: {
//       "Content-Type": "application/json",
//     },
//     baseURL: Config.NETWORK_CONFIG.API_BASE_URL,
//     timeout: Config.NETWORK_CONFIG.TIMEOUT,
//   });
//
//   // Access Token
//   if (defaultOptions.withToken) {
//     const state = store.getState();
//     const token = state.user?.accessToken;
//     if (token) {
//       apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
//   }
//
//   return new Promise<{data: T; meta: IMetadata}>((resolve, reject) => {
//     apiClient
//         .request<T, AxiosResponse<IResponseWithMetadataDTO<T>>>(config)
//         .then((response) => {
//           if (response.data.success) {
//             if (response.data.data === undefined) {
//               const dataEmpty: IDataError = {
//                 status: "ERROR???",
//                 message: "Data is empty",
//               };
//               if (defaultOptions.displayError) {
//                 displayError(dataEmpty);
//               }
//               reject(dataEmpty);
//               return;
//             }
//
//             resolve({
//               data: response.data.data as any,
//               meta: response.data.meta,
//             });
//             return;
//           }
//           const dataError: IDataError = {
//             status: response.data.errorCode,
//             message: response.data.message,
//           };
//           if (defaultOptions.displayError) {
//             displayError(dataError);
//           }
//           // Kien Duong
//           if (
//               dataError.errorCode === "NEWS000102" ||
//               dataError.errorCode === "JWT000201"
//           ) {
//             // Dispath Login
//           }
//           reject(dataError);
//         })
//         .catch((error: Error | AxiosError) => {
//           if (axios.isAxiosError(error)) {
//             // Axios error
//             const somethingsWrong: IDataError = {
//               errorCode: "ERROR???",
//               errorMessage: "Đã có lỗi xảy ra, vui lòng liên hệ bộ phận kĩ thuật",
//             };
//
//             const dataError: IDataError =
//                 error?.response?.data ?? somethingsWrong;
//
//             if (dataError?.errorCode === "AUTH3001.NotAuthenticated") {
//               persistor.purge();
//             } else {
//               if (defaultOptions.displayError) {
//                 displayError(dataError);
//               }
//             }
//           } else {
//             // Native error
//             showError(_.toString(error));
//           }
//
//           return reject(error);
//         });
//   });
// }
