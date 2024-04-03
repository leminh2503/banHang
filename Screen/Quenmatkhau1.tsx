import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
const Quenmatkhau1 = ({ navigation }) => {
  const [maxacnhan, setMaxacnhan] = useState("");

  const handleQuenpass1 = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.text1}> Quên mật khẩu</Text>
      </View>

      <View>
        <Text style={styles.text2}>
          Vui lòng nhập mã xác nhận gồm 4 chữ số để đặt lại mật khẩu{" "}
        </Text>
      </View>
      <View>
        <TextInput
          value={maxacnhan}
          onChangeText={(value) => {
            setMaxacnhan(value);
          }}
          placeholder="Nhập mã xác nhận"
          style={styles.input}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Datlaimatkhau")}>
          <Text>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#97F2F3",
    paddingTop: 90,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 40,
  },
  text2: {
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 280,
    alignSelf: "center",
  },

  input: {
    width: "90%",
    padding: 10,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    borderColor: "gray",
  },

  button: {
    width: "25%",
    marginTop: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#8AC0DE",
    alignItems: "center",
  },
});

export default Quenmatkhau1;
