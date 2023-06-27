import { View, Text, TextInput, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";





const SignUp =({navigation})=>{
    const [getPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <ImageBackground style={{ height: '100%', width: '100%' }} source={require('./image/backgroung.png')} resizeMode='stretch' >
    <View style={styles.SignUp_container}>
      <View style={styles.SignUp_box}>
        <Text style={styles.ChangePass_Text}>Đăng Kí</Text>

        <View style={styles.ChangePass_password}>
          <TextInput
            style={{ color: "#fff", fontSize: 18 }}
            placeholder="Họ và tên"
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
          ></TextInput>

          <TouchableOpacity
            style={styles.ChangePass_T}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}
          >
            
          </TouchableOpacity>
        </View>
        <View style={styles.ChangePass_password}>
          <TextInput
            style={{ color: "#fff", fontSize: 18 }}
            placeholder="Số điện thoại"
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
          ></TextInput>

          <TouchableOpacity
            style={styles.ChangePass_T}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}
          >
          </TouchableOpacity>
        </View>
        
        <View style={styles.ChangePass_password}>
          <TextInput
            style={{ color: "#fff", fontSize: 18 }}
            placeholder="Mật khẩu cũ"
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
          ></TextInput>

          <TouchableOpacity
            style={styles.ChangePass_T}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./image/key.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ChangePass_password}>
          <TextInput
            style={{ color: "#fff", fontSize: 18 }}
            placeholder="Mật khẩu cũ"
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
          ></TextInput>

          <TouchableOpacity
            style={styles.ChangePass_T}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./image/key.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.ChangePass_bottom} onPress={()=>navigation.navigate('DangNhap')} >
        <Text style={{fontWeight: "bold",fontSize: 15,color:'#fff'}}>Xác nhận</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ChangePass_cancel} onPress={()=>navigation.navigate('DangNhap')} >
        <Text style={{fontWeight: "bold",fontSize: 15,color:'#fff'}}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}
export default SignUp;