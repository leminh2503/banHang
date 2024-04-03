import axios from "axios";
import * as SecureStore from "expo-secure-store";

const BASE_URL = "http://192.168.0.103:120";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerApi = ({ name, email, password }: RegisterData) => {
  return axios({
    method: "POST",
    url: BASE_URL.concat("/api/Users/create"),
    data: {
      userName: name,
      email: email,
      passWord: password,
    },
  });
};

export const loginApi = ({ email, password }: LoginData) => {
  return axios({
    method: "POST",
    url: BASE_URL.concat("/api/Users/login"),
    data: {
      email,
      password,
    },
  });
}; // Hàm registerApi thực hiện yêu cầu đăng ký, hàm gửi một yêu cầu
// POST đến URL với dữ liệu được truyền vào là  email,password

export const setAccessToken = async (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  try {
    await SecureStore.setItemAsync("accessToken", accessToken);
    addTokenToAxios(accessToken);
    return true;
  } catch (error) {
    console.log("Lỗi khi lưu token", error);
  }
  return false;
};
// Hàm setAccessToken để lưu trữ token truy cập an toàn vào SecureStore
// Kiểm tra accessToken có tồn tại hay không. Nếu không trả về 'false'
// Nếu tồn tại sử dụng SecureStore để lưu accessToken sau đó gọi hàm
// addTokenToAxios để thêm accessToken vào tiêu đề của mọi yêu cầu HTTP sử dụng 'axios'
export const getAccessToken = async () => {
  try {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    return accessToken;
  } catch (error) {
    console.log("Lỗi khi lưu token", error);
  }
  return false;
};
// hàm getAccessToken để lấy accessToken từ SecureStore

const getUsersTest = async () => {
  return axios({
    method: "GET",
    url: BASE_URL.concat("/api/Users/get-all"),
  });
};

export const addTokenToAxios = (accessToken: string) => {
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${accessToken}`;
      // config.headers.Authorization = `123456789`
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

export const TestApi = () => {
  return axios({
    method: "GET",
    url: BASE_URL.concat("/WeatherForecast"),
  });
};
