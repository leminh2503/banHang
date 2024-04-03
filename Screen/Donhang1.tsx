import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Trang chủ</Text>
        {/* Nội dung màn hình trang chủ ở đây */}
        <TouchableOpacity onPress={() => navigation.navigate("Donhang")}>
          <Text>Doanh thu</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
  logo: {
    alignSelf: "center",

    marginBottom: 30,
  },
});

export default Home;
