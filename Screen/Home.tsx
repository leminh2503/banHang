import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import RevenueChart from "../components/piechart";

const Home: React.FC = () => {
  const navigation = useNavigation();

  // Chức năng của từng nút

  return (
    <View style={styles.container}>
      {/* Banner */}
      <Swiper autoplay={true}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../assets/LOGO.png")} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../assets/LOGO.png")} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../assets/LOGO.png")} />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require("../assets/lananh1.jpg")}
          />
        </View>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Các nút */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Trang chủ</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen1")}
          >
            <Text style={styles.buttonText}>Chức năng 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen2")}
          >
            <Text style={styles.buttonText}>Chức năng 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen3")}
          >
            <Text style={styles.buttonText}>Chức năng 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen4")}
          >
            <Text style={styles.buttonText}>Chức năng 4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen5")}
          >
            <Text style={styles.buttonText}>Chức năng 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => handleButtonPress("Screen6")}
          >
            <Text style={styles.buttonText}>Chức năng 6</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="home" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Donhang1")}
        >
          <Icon name="shopping-cart" size={35} color="#454545" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Sanpham")}
        >
          <Icon name="list" size={35} color="#454545" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Nhanvien")}
        >
          <Icon name="user" size={35} color="#454545" />
        </TouchableOpacity>
      </View>
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
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#454545",
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
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width, // Set width to device width
    height: 280, // Set height as needed
  },
});

export default Home;
