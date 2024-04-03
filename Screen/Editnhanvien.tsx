import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Nhanvien: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    fullName: "Nguyễn Văn A",
    position: "Nhân viên bán hàng",
    phoneNumber: "0123456789",
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
        <Text style={styles.header}>Thông tin nhân viên</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Icon name="edit" size={25} color="#666" />
          <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Logout")}
        >
          <Icon name="sign-out" size={25} color="#ff0000" />
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  employeeInfo: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#666",
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
