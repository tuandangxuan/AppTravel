import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [getPasswordVisible, setPasswordVisible] = useState(false);

  const doLogin = () => {
    //check
    // if (phone.length == 0) {
    //   alert("chua nhap username");
    //   return;
    // }
    // if (password.length == 0) {
    //   alert("chua nhap password");
    //   return;
    // }

    // //lay data

    // let url_login = 'http://192.168.1.22:3000/user?username=' + username;

    // fetch(url_login)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then(async (res_json) => {
    //     if (res_json.length != 1) {
    //       alert("nhap lai username");
    //       return;
    //     }
    //     let objU = res_json[0];
    //     if (objU.password != password) {
    //       alert("nhap lai password");
    //       return;
    //     }

    //     try {
    //       await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
    //       navigation.navigate('TabMenu')
    //     } catch (e) {
    //       // saving error
    //       console.log(e);
    //     }
    //   })
    navigation.navigate("TabMenu");
  };
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("./image/backgroung.png")}
      resizeMode="stretch"
    >
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={{ width: "60%", height: "40%", padding: 30, margin: 10 }}
            source={require("./image/logott.png")}
          />
          <Text style={styles.title}>XIN CHÀO</Text>
          <View style={styles.textInput}>
            <TextInput
              style={{ color: "#fff", fontSize: 18 }}
              placeholder="Số điện thoại"
              placeholderTextColor="#fff"
              onChangeText={(txt) => {
                setphone(txt);
              }}
            ></TextInput>
          </View>

          <View style={styles.password}>
            <TextInput
              style={{ color: "#fff", fontSize: 18 }}
              placeholder="Mật khẩu"
              placeholderTextColor="#fff"
              secureTextEntry={getPasswordVisible ? false : true}
              onChangeText={(txt) => {
                setpassword(txt);
              }}
            ></TextInput>

            <TouchableOpacity
              style={{
                height: "100%",
                aspectRatio: 1,
                position: "absolute",
                right: 0,
                width: 40,
                padding: 4,
                margin: 7,
              }}
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

          <TouchableOpacity style={styles.loginBtn} onPress={doLogin}>
            <Text style={{ fontWeight: "bold", color: "gray", fontSize: 18 }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <View>
            <Text style={{ color: "#fff" }}>
              Bạn chưa có tài khoản?
              <Text
                style={styles.singup}
                onPress={() => {
                  navigation.navigate("DangKi");
                }}
              >
                Đăng Ký
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    margin: 10,
    padding: 10,
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
  },
  textInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    color: "#fff",
    fontSize: 50,
    justifyContent: "center",
  },
  password: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    fontSize: 100,
    color: "#fff",
    paddingRight: 45,
    justifyContent: "center",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#fff",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  singup: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
});
