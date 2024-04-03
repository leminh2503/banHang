import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Donhang: React.FC = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const items = [
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: 150,
      quantity: 1,
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      price: 150,
      quantity: 1,
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      price: 150,
      quantity: 1,
    },
    {
      id: 5,
      name: "Sản phẩm 5",
      price: 150,
      quantity: 1,
    },
    {
      id: 6,
      name: "Sản phẩm 6",
      price: 150,
      quantity: 1,
    },
    {
      id: 7,
      name: "Sản phẩm 7",
      price: 150,
      quantity: 1,
    },
    {
      id: 8,
      name: "Sản phẩm 8",
      price: 150,
      quantity: 1,
    },
    {
      id: 9,
      name: "Sản phẩm 9",
      price: 150,
      quantity: 1,
    },
    {
      id: 10,
      name: "Sản phẩm 10",
      price: 150,
      quantity: 1,
    },
    {
      id: 11,
      name: "Sản phẩm 11",
      price: 150,
      quantity: 1,
    },
    {
      id: 12,
      name: "Sản phẩm 12",
      price: 150,
      quantity: 1,
    },
    // Thêm các mặt hàng khác vào đây nếu cần
  ];
  const [orderItems, setOrderItems] = useState([]);
  // Tính tổng số tiền của đơn hàng
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Render mỗi mặt hàng trong danh sách
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemQuantity}>Số lượng: {item.quantity}</Text>
          <Text style={styles.itemPrice}>Giá: ${item.price}</Text>
        </View>
      </View>
    </View>
  );
  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toString().includes(searchText)
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.searchContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.header}>Đơn hàng</Text>
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Tìm kiếm"
        />
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.footer}>
          <Text style={styles.total}>Tổng: ${total}</Text>
          {/* Thêm nút thanh toán hoặc các thành phần khác ở đây nếu cần */}
        </View>

        {/* Nội dung màn hình giỏ hàng ở đây */}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={35} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="shopping-cart" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Sanpham")}
        >
          <Icon name="list" size={35} color="#666" />
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
    padding: 5,
    backgroundColor: "#b8f9b3",
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  backButton: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 20,
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
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 12,
  },
  itemInfo: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 4,
    marginStart: 70,
  },
  itemQuantity: {
    fontSize: 16,
    color: "#888",
    marginBottom: 4,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 12,
    alignItems: "flex-end",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default Donhang;
