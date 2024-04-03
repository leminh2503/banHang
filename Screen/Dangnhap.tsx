import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Dangnhap = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdHidden, setpwdHidden] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Đăng Nhập </Text>
        <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      </View>
      <View style={styles.viewpass}>
        <TextInput
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          placeholder="Số điện thoại"
          style={styles.input}
        />
      </View>

      <View style={styles.viewpass}>
        <TextInput
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          placeholder="Mật khẩu"
          secureTextEntry={pwdHidden}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setpwdHidden(!pwdHidden)}>
          <Icon name="eye" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonpass}>
        <TouchableOpacity onPress={() => navigation.navigate("Quenmatkhau")}>
          <Text style={styles.text2}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 18 }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Dangky")}
      >
        <Text style={styles.registerText}>
          Don't have an account? Register here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#b8f9b3",
  },

  content: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },

  text1: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 50,
  },
  text2: {
    color: "red",
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
    marginBottom: 30,
  },

  input: {
    fontSize: 20,
  },
  viewpass: {
    marginTop: 20,
    margin: 10,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1.5,
    borderRadius: 25,
    borderColor: "gray",
  },
  registerText: {
    marginTop: 30,
    color: "black",
  },

  button: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#03c460",
    width: "45%",
    alignItems: "center",
  },
  button1: {
    marginTop: 50,
  },
  buttonpass: {
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Dangnhap;
