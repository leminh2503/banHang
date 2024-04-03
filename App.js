import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import Dangky from './Screen/Dangky';
import Dangnhap from './Screen/Dangnhap';
import Hello from './Screen/Hello';
import Donhang from './Screen/Donhang';
import Nhanvien from './Screen/Nhanvien';
import Sanpham from './Screen/Sanpham';
import Editnhanvien from './Screen/Editnhanvien.tsx';
import Doanhthu from './Screen/Doanhthu';
import Donhang1 from './Screen/Donhang1';
import {View, ActivityIndicator} from "react-native";


const Stack = createStackNavigator();

function LoadingPersisGate() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size={30} color="blue" />
    </View>
  );
}

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={<LoadingPersisGate />} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dangky" component={Dangky} />
        <Stack.Screen name="Dangnhap" component={Dangnhap} />
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Donhang" component={Donhang} />
        <Stack.Screen name="Nhanvien" component={Nhanvien} />
        <Stack.Screen name="Sanpham" component={Sanpham} />
        <Stack.Screen name="Editnhanvien" component={Editnhanvien} />
        <Stack.Screen name="Doanhthu" component={Doanhthu} />
        <Stack.Screen name="Donhang1" component={Donhang1} />
      </Stack.Navigator>
    </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
