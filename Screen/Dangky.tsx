import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Dangky = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Đăng Ký </Text>
        <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Tên đăng nhập</Text>
        <TextInput
          value={name}
          onChangeText={(value) => {
            setName(value);
          }}
          placeholder=""
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          placeholder=""
          style={styles.input}
        />
        <Text style={styles.label}>Nhập mật khẩu</Text>
        <TextInput
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          placeholder=""
          style={styles.input}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dangnhap")}
        >
          <Text>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#b8f9b3",
  },

  content: {
    alignItems: "center",
    width: "100%",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
    alignItems: "center",

    borderRadius: 50,
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 33,
    borderColor: "gray",
  },
  label: {
    marginVertical: 4,
    padding: 5,
    alignSelf: "flex-start",
    marginLeft: 20,
  },

  buttons: {
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#03c460",
    width: "55%",
    alignItems: "center",
  },
});

export default Dangky;
