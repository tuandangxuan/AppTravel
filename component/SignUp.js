import { View, Text, TextInput, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import axios from 'axios';





const SignUp =({navigation})=>{
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [passw, setpassw] = useState("");
  const [passw1, setpassw1] = useState("");


  const doSignUp = async()=>{
    if (fullname.length==0){
      alert("Chưa nhập họ tên"); return;
  }
  if(phone.length==0){
      alert("Chưa nhập số điện thoại"); return;
  }
  if(passw.length <5 || passw.length >20){
      alert("Mật khẩu phải từ 5 đến 20 ký tự chữ cái"); return;
  }
  if(passw1.length <5 || passw1.length >20){
    alert("Nhập mật lại mật khẩu"); return;
  }
  if(passw!=passw1){
    alert("Mật khẩu không trùng khớp"); return;
  }
  

const data = {
  fullname:fullname,
  phone:phone,
  passw:passw
}

axios.post('https://xuantuan06.000webhostapp.com/php/SignUp.php', data)
  .then(response => {
    if (response.data.success) {
      // Xử lý khi đăng ký thành công
      navigation.navigate('DangNhap');
      console.log(response.data.message);
    } else {
      // Xử lý khi đăng ký thất bại
      console.log(response.data.message);
    }
  })
  .catch(error => {
    // Xử lý khi có lỗi xảy ra
    console.log(error);
  });
        
  }
   
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
            onChangeText={(txt) => {
              setfullname(txt);
            }}
          />

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
            
            onChangeText={(txt) => {
              setphone(txt);
            }}
           
            />

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
            placeholder="Mật khẩu "
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
            onChangeText={(txt) => {
              setpassw(txt);
            }}

            />

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
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor="#fff"
            secureTextEntry={getPasswordVisible ? false : true}
            onChangeText={(txt) => {
              setpassw1(txt);
            }}

            />

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
      <TouchableOpacity style={styles.ChangePass_bottom} onPress={doSignUp} >
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