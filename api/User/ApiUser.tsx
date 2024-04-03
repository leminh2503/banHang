import {fetcher} from "../Fetcher";

// import store from "../../redux/store";

export interface IRegisterBody {
  // username: string;
  email: string;
  password: string;
  display_name: string;
  is_business: string;
}

export interface ILoginBody {
  email: string;
  password: string;
  device_token: string;
}

interface IChangePasswordBody {
  old_password: string;
  new_password: string;
}

interface IResetPassword {
  code: string;
  email: string;
  new_password: string;
}

export interface IProfile {
  data?: {
    username?: string;
    firstName: string;
    email: string;
    address: string;
    phone: string;
    avatar_user: string;
    dateOfBirth: string;
    sex: string;
    city: {
      id: number;
      name: string;
    };
    district: {
      id: number;
      name: string;
    };
    education_id: string | number;
    korean_level_id: string | number;
    salary_id: string | number;
    skill_group_id: string | number;
    skill_id: string | number;
    work_experience_id: string | number;
    work_place: string | number;
  };
}

export interface ISettingId {
  _id?: string;
  themes?: string;
  location?: string;
  region?: string;
  language?: string;
  referCode?: string;
}
export enum IAccountRole {
  USER = 0,
  ADMIN = 1,
  ANONYMOUS = 2,
}
export interface IUserLogin {
  _id?: string;
  username?: string;
  email?: string;
  lastName?: string;
  firstName?: string;
  avatar?: string;
  bio?: string;
  website?: string;
  facebook?: string;
  role?: IAccountRole;
  interactionId?: string;
  settingId?: ISettingId;
  hasPassword?: boolean;
}

export interface IData {
  id: number;
  name: string | null;
}

export interface IDataVi {
  id: number;
  name_vi: string | null;
}

export interface IAccountInfo {
  token?: string;
  token_live: string;
  stepClass: number;
}

export interface IDataProfile {
  data: {
    avatar: string;
    display_name: string;
    email: string;
    firstname: string;
    lastname: string;
    phone_number: string;
    province: {
      name: string;
      code: number;
    };
    district: {
      name: string;
      code: number;
    };
    ward: {
      name: string;
      code: number;
    };
    detail_address: string;
  };
}

export interface IRegisterEmployer {
  role?: number;
  username?: string;
  email?: string;
  password?: string;
  company_name: string;
  skill_group_id: number;
  address?: string;
  firstname: string;
  phone: string;
  token?: string;
}

export interface INotification {
  id: number;
  jinoboard_contents_id: number;
  type: string;
  job_id?: number;
  view?: number;
  timemodified: number;
  title?: string;
  applicant_name?: string;
  image_url?: string;
  company_name?: string;
  com_id?: number;
  content?: string;
  job_name?: string;
  firstname?: string;
  isSave?: boolean | undefined;
  user_id?: number;
  cv_id?: number;
}

export interface IListNotification {
  data: {
    total: number;
    currentPage: string;
    from: number;
    to: number;
    last_page: number;
    data: INotification[];
    unview: number;
  };
}

export interface IUserProfileNoGiven {
  id?: number;
  name?: string;
  description?: string;
  condition?: string;
  amount?: number;
  giver_id?: number;
  receiver_id?: number;
  status?: number;
  detail_address?: string;
  merchandise_image?: {
    id?: number;
    merchandises_id?: number;
    image_data?: string;
  }[];
  like?: number;
}

export interface IUserProfileReceived {
  id?: number;
  merchandise_id?: number;
  amount?: string;
  merchandises?: {
    id?: number;
    name?: string;
    description?: string;
    condition?: string;
    amount?: number;
    giver_id?: number;
    receiver_id?: string;
    status?: number;
    detail_address?: string;
  };
  merchandise_image?: {
    id?: number;
    merchandises_id?: number;
    image_data?: string;
  }[];
  like?: number;
}

export interface IGetUserProfileMerchandises {
  data?: {
    given?: {
      data?: IUserProfileNoGiven[];
      per_page?: number;
      total?: number;
      current_page?: number;
      last_page?: number;
    };
    noGiven?: {
      current_page?: number;
      data?: IUserProfileNoGiven[];
      per_page?: number;
      total?: number;
      last_page?: number;
    };
    received?: {
      current_page?: number;
      data?: IUserProfileReceived[];
      total?: number;
      per_page?: number;
      last_page?: number;
    };
  };
}

export interface IGetUserByIdResponse {
  data?: {
    id?: number;
    firstname?: string;
    lastname?: string;
    display_name?: string;
    email?: string;
    phone_number?: string;
    avatar?: string;
    province_code?: string;
    district_code?: string;
    ward_code?: string;
    status?: number;
    role_id?: number;
    created_at?: string;
    updated_at?: string;
    has_edit?: number;
    rate?: number;
    detail_address?: string;
    about_us?: string;
    is_business?: number;
  };
}

export interface IAccount {
  data: {
    avatar?: string;
    detail_address?: string;
    display_name?: string;
    district_code?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    phone_number?: string;
    province_code?: string;
    rate?: number;
    ward_code?: string;
    status?: number;
  };
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  display_name: string;
  email: string;
  phone_number: string;
  avatar: string;
  province_code: string;
  district_code: string;
  ward_code: string;
  status: number;
  role_id: number;
  has_edit: number;
  rate: number;
  detail_address?: string;
}

export interface IListUser {
  data: IUser[];
}

export interface IReportBody {
  receiver_id: string;
  comment?: string;
  merchandise_id?: string;
}

const path = {
  register: "/auth/register",
  existEmail: "/auth/exist",
  login: "/auth/login",
  loginSocial: "/auth/login-social",
  confirmOtp: "auth/register/verify-code",
  sendOtp: "/users/resend-code",
  forgotPassword: "/users/resend-code",
  forgotPasswordOtp: "/users/verify-code",
  resetPassword: "/users/reset-password",
  refreshOtp: "auth/refresh-otp",
  changePassword: "/users/change-password?_method=PUT",
  // getProfile: "/auth/get-profile",
  getProfile: "/users/my-account",
  baseStyle: "/static/style-app.json",
  changeUserPassWord: "/auth/change-user-password",
  logout: "/users/logout",
  getDistrict: "/get-district",
  getAccount: "/users/my-account",
  editProfileFavorite: "/auth/create-profile-favorit",
  getProfileFavorite: "/auth/get-profile-favorit",
  getProfilePersonal: "/auth/get-profile-personal",
  editProfilePersonal: "/auth/create-profile",
  verifyEmailEmployer: "/auth/employer/verify-email",
  registerEmployer: "/auth/employer/register",
  getSkillGr: "/get-skillGr",
  updateEmployer: "/auth/employer/update-profile",
  checkMail: "/auth/check-mail",
  getListNotification: "/notification-get-list",
  readAllNotification: "/notification-seen-all",
  getCity: "/get-city",
  infoAdmin: "/admin",
  userProfilePath: "/users/merchandises",
  getUserByIdPath: "/users",
  editProfile: "/users/edit-profile?_method=PUT",
  postAvatar: "/users/edit-avatar?_method=PUT",
  getListUser: "/users",
  deleteUser: "/users/delete-account",
  reportUser: "/users/report",
};

function reportUser(body: IReportBody): Promise<IAccount> {
  return fetcher({url: path.reportUser, method: "post", data: body});
}

function getAccount(): Promise<IAccount> {
  return fetcher(
    {url: path.getAccount, method: "get"},
    {
      displayError: false,
    }
  );
}

function getDistrict(body: {province_id: number}): Promise<never> {
  return fetcher({url: path.getDistrict, method: "post", data: body});
}

function logout(params?: {
  device?: string;
  device_token?: string;
}): Promise<never> {
  return fetcher(
    {url: path.logout, method: "get", params: params}
    // {displayError: false}
  );
}

function getUserProfileMerchandises(params: {
  page?: number;
}): Promise<IGetUserProfileMerchandises> {
  return fetcher({url: path.userProfilePath, method: "get", params: params});
}

function getUserProfileMerchandisesAnyOne(
  id: number
): Promise<IGetUserProfileMerchandises> {
  return fetcher({url: `${path.userProfilePath}/${id}`, method: "get"});
}

function getUserById(id: number): Promise<IGetUserByIdResponse> {
  return fetcher({url: `${path.getUserByIdPath}/${id}`, method: "get"});
}

function getDataProfile(): Promise<IDataProfile> {
  return fetcher({url: path.getProfile, method: "get"}, {displayError: false});
}

function register(body: IRegisterBody): Promise<never> {
  return fetcher({url: path.register, method: "post", data: body});
}

function login(body: any): Promise<any> {
  return fetcher(
    {url: path.login, method: "post", data: body},
    {
      displayError: false,
      contentType: "multipart/form-data",
    }
  );
}

function forgotPassword(data: {email: string; type: number}): Promise<never> {
  return fetcher({url: path.forgotPassword, method: "post", data: data});
}

function sendOtp(data: {email: string; type: number}): Promise<never> {
  return fetcher({url: path.forgotPassword, method: "post", data: data});
}

function resetPassword(body: IResetPassword): Promise<never> {
  return fetcher({url: path.resetPassword, method: "post", data: body});
}

function forgotPasswordOtp(body: {
  email: string;
  // role: number;
  code: string;
}): Promise<never> {
  return fetcher({url: path.forgotPasswordOtp, method: "post", data: body});
}

function changePassword(body: IChangePasswordBody): Promise<never> {
  return fetcher({url: path.changePassword, method: "post", data: body});
}

function isLogin(): boolean {
  return !!getAuthToken();
}

function getAuthToken(): any {
  // const {user} = store.getState();
  // return user?.credentials;
  // const {userReducer} = store.getState();
  // return userReducer?.credentials;
}

function editProfile(body: any): Promise<any> {
  return fetcher({url: path.editProfile, method: "post", data: body});
}

function deleteUser(body: any): Promise<any> {
  return fetcher({url: path.deleteUser, method: "delete"});
}

function postAvatar(data: any): Promise<any> {
  return fetcher(
    {
      url: path.postAvatar,
      method: "post",
      data: data,
    },
    {
      contentType: "multipart/form-data",
    }
  );
}

function confirmOtp(data: {email: string; code: string}): Promise<any> {
  return fetcher({url: path.confirmOtp, method: "post", data: data});
}

function loginSocial(data: {
  token: string;
  device: number | string;
  device_token: string;
  login_type: string;
}): Promise<any> {
  return fetcher({url: path.loginSocial, method: "post", data: data});
}

export default {
  register,
  login,
  isLogin,
  sendOtp,
  forgotPassword,
  changePassword,
  logout,
  forgotPasswordOtp,
  resetPassword,
  getDistrict,
  getDataProfile,
  getUserProfileMerchandises,
  getUserById,
  getUserProfileMerchandisesAnyOne,
  getAccount,
  editProfile,
  deleteUser,
  postAvatar,
  confirmOtp,
  reportUser,
  loginSocial,
};
