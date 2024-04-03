// DonhangScreen.tsximport React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Nhanvien: React.FC = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    fullName: "Nguyễn Thị Lan Anh",
    position: "Nhân viên bán hàng",
    phoneNumber: "0362521690",
    age: "22",
    address: "Thuận Thành Bắc Ninh",
  });

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Add logic to save editedInfo to data
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Thông tin nhân viên</Text>
        </View>

        <Image style={styles.logo} source={require("../assets/lananh2.jpg")} />
        <View style={styles.employeeInfo}>
          <Text style={styles.label}>Họ và tên:</Text>
          <Text style={styles.value}>{editedInfo.fullName}</Text>
        </View>
        <View style={styles.employeeInfo}>
          <Text style={styles.label}>Chức vụ:</Text>
          <Text style={styles.value}>{editedInfo.position}</Text>
        </View>
        <View style={styles.employeeInfo}>
          <Text style={styles.label}>Số điện thoại:</Text>
          <Text style={styles.value}>{editedInfo.phoneNumber}</Text>
        </View>
        <View style={styles.employeeInfo}>
          <Text style={styles.label}>Tuổi: </Text>
          <Text style={styles.value}>{editedInfo.age}</Text>
        </View>
        <View style={styles.employeeInfo}>
          <Text style={styles.label}>Địa chỉ:</Text>
          <Text style={styles.value}>{editedInfo.address}</Text>
        </View>

        <View style={styles.grouplogout}>
          <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
            <Icon name="edit" size={25} color="black" />
            <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate("Dangnhap")}
          >
            <Icon name="sign-out" size={25} color="#ff0000" />
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Chỉnh sửa thông tin</Text>
            <TextInput
              style={styles.input}
              placeholder="Họ và tên"
              value={editedInfo.fullName}
              onChangeText={(text) =>
                setEditedInfo({ ...editedInfo, fullName: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Chức vụ"
              value={editedInfo.position}
              onChangeText={(text) =>
                setEditedInfo({ ...editedInfo, position: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              value={editedInfo.phoneNumber}
              onChangeText={(text) =>
                setEditedInfo({ ...editedInfo, phoneNumber: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Tuổi"
              value={editedInfo.age}
              onChangeText={(text) =>
                setEditedInfo({ ...editedInfo, age: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Địa chỉ"
              multiline={true}
              value={editedInfo.address}
              onChangeText={(text) =>
                setEditedInfo({ ...editedInfo, address: text })
              }
            />

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={handleCloseModal}
              >
                <Text style={styles.modalButtonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#007bff" }]}
                onPress={handleSaveChanges}
              >
                <Text style={[styles.modalButtonText, { color: "#fff" }]}>
                  Lưu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("Sanpham")}
        >
          <Icon name="list" size={35} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="user" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99FF99",
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
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    marginBottom: 30,
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
  employeeInfo: {
    marginBottom: 10,
    marginStart: 15,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
    marginLeft: 10,
  },
  grouplogout: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginEnd: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#33FF66",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#ff0000",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#33FF66",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
    color: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
  },
});

export default Nhanvien;
