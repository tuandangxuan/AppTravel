import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "react-native";

const ChangePass = ({navigation}) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.ChangePass_container}>
      <View style={styles.ChangePass_box}>
        <Text style={styles.ChangePass_Text}>Đổi Mật Khẩu</Text>

        <View style={styles.ChangePass_password}>
          <TextInput
            style={{ color: "#94cbf4", fontSize: 18 }}
            placeholder="Mật khẩu cũ"
            placeholderTextColor="#94cbf4"
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
            style={{ color: "#94cbf4", fontSize: 18 }}
            placeholder="Mật khẩu mới"
            placeholderTextColor="#94cbf4"
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
            style={{ color: "#94cbf4", fontSize: 18 }}
            placeholder="Nhập lại mật khẩu mới"
            placeholderTextColor="#94cbf4"
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
      <TouchableOpacity style={styles.ChangePass_bottom} onPress={()=>navigation.navigate('ThongTin')} >
        <Text style={{fontWeight: "bold",fontSize: 20,}}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChangePass;
