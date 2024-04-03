import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Users = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Dangnhap")}>
        <Text>Xác nhận</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8f9b3",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 60,
  },
  bottomBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Users;
