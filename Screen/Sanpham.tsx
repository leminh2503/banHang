// DonhangScreen.tsximport React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Sanpham: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    { id: 1, name: "Bánh mỳ", price: 100, conlai: 50 },
    { id: 2, name: "Sua", price: 150, conlai: 50 },
    { id: 3, name: "Mì tôm", price: 200, conlai: 50 },
    { id: 4, name: "Sua Milo", price: 100, conlai: 50 },
    { id: 5, name: "Sua TH True Milk", price: 150, conlai: 50 },
    { id: 6, name: "Product 3", price: 200, conlai: 50 },
    { id: 7, name: "Product 1", price: 100, conlai: 50 },
    { id: 8, name: "Product 2", price: 150, conlai: 50 },
    { id: 9, name: "Product 3", price: 200, conlai: 50 },
    { id: 10, name: "Product 1", price: 100, conlai: 50 },
    { id: 11, name: "Product 2", price: 150, conlai: 50 },
    { id: 12, name: "Product 3", price: 200, conlai: 50 },
    // Add more products as needed
    // Add more products as needed
  ]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.productDetails}>
        <Text style={styles.productPrice}>Giá bán: ${item.price}</Text>
        <Text style={styles.productTon}>Số lượng tồn: {item.conlai}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Danh sách Sản phẩm</Text>
        {/* Nội dung màn hình giỏ hàng ở đây */}
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Nhập tên sản phẩm"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={35} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Donhang")}
        >
          <Icon name="shopping-cart" size={35} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="list" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Nhanvien")}
        >
          <Icon name="user" size={35} color="#666" />
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
  backButton: {
    marginRight: 10,
  },
  productDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    marginTop: 8,
  },
  productTon: {
    fontSize: 16,
    marginTop: 8,
    marginStart: 160,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Sanpham;
