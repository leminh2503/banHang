import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  StatusBar,
} from "react-native";

const Dangnhap = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar></StatusBar>
      <View>
        <Image style={styles.logo} source={require("../assets/LOGO.png")} />
      </View>
      <Text style={styles.texthello}>Chào mừng bạn đến với LALAAN !</Text>
      <Text style={styles.textlg}>Đăng nhập với tư cách</Text>
      <View style={styles.viewbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dangnhap")}
        >
          <Text style={styles.textbutton}>Quản lý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dangnhap")}
        >
          <Text style={styles.textbutton}>Nhân viên bán hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8f9b3",
  },
  logo: {
    width: 150,
    height: 150,
    margin: 50,
    alignSelf: "center",
    borderRadius: 100,
  },
  texthello: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textlg: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  viewbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#03c460",
    borderWidth: 1,
    borderColor: "gray",
    width: "48%",
    alignItems: "center",
  },
  textbutton: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
});
export default Dangnhap;
