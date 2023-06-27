import { View , Text, TextInput, Image, ScrollView,FlatList, RefreshControl,ActivityIndicator, TouchableOpacity, } from "react-native";
import { useState, useEffect } from "react";

import SlideShow from "./open/SlideShow";
import styles from "./styles";
import BlinkingText from "./open/BlinkingText";






const Home =(props)=>{
  const phoneFromLogin = props.route.params.phoneFromLogin;
  console.log("Home : "+ phoneFromLogin);
    const [greeting, setGreeting] = useState("");
    const [listTour, setlistTour] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [keyWord, setkeyWord] = useState("");
  


    const checkHouse = () => {
        const currentHour = new Date().getHours();
        let message = "";
    
        if (currentHour >= 5 && currentHour < 12) {
          message = "Good morning";
        } else if (currentHour >= 12 && currentHour < 18) {
          message = "Good afternoon";
        } else {
          message = "Good evening";
        }
        setGreeting(message);
      };
      const search =async()=>{
        const key = keyWord;
        console.log(key);
        if(key!=""){
          let api_url ="https://xuantuan06.000webhostapp.com/php/SeachTour.php?key="+key;
          try {
              const response = await fetch(api_url);// load dữ liệu
              if (response.ok) {
                const data = await response.text();
                if (data === "Không tìm thấy dữ liệu.") {
                  alert("Hiện tại chưa có tour phù hợp")
                } else {
                  const json = JSON.parse(data);
                  setlistTour(json);
                }
              } else {
                console.error("Lỗi truy vấn API");
              }
            } catch (error) {
              console.error(error);
            } finally {
              setisLoading(false);
            }
        }else getListTour();
        
        

      }

      const getListTour=async()=>{
        let api_url ="http://192.168.31.108:3000/tours"
  
  
        try {
            const response = await fetch(api_url);// load dữ liệu
            if (response.ok) {
              const data = await response.text();
              if (data === "Không tìm thấy dữ liệu.") {
                console.error(data);
              } else {
                const json = JSON.parse(data);
                setlistTour(json);
              }
            } else {
              console.error("Lỗi truy vấn API");
            }
          } catch (error) {
            console.error(error);
          } finally {
            setisLoading(false);
          }
    };

    const renderTour=({item})=>{
      return(
        
          <View style={styles.home_Tour}>
              <View style={{width:'40%',justifyContent:'center', alignItems:'center', padding:3}} onPressIn >
                <Image source={{uri: 'https://tophinhanhdep.com/wp-content/uploads/2021/10/720x1480-Wallpapers.jpg'}} style={styles.home_ImageTuor}/>
              </View>
              <View style={{width:'60%', padding:5}}>
                <View style={{justifyContent: 'center', alignItems:'center', width:'100%'}} >
                  <BlinkingText text ={item.title} interval={1000}/>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:12, width:'50%'}} >Số lượng {item.member}/{item.limit}</Text>
                  <Text style={{fontSize:12,fontStyle:'italic' }}>Hạn: {item.dealine}</Text>
                </View>
                
                <Text>Chi phí : {item.price}</Text>
                <Text>Mô tả : </Text>
                <Text style={{marginLeft: 3,fontSize: 12,}} numberOfLines={4} >{item.description}</Text>
              </View>
          </View>
          </TouchableOpacity>
             
      )
    };
// Thực hiện các tác vụ khi người dùng vuốt từ trên xuống 
const handleRefresh = () => {
  setRefreshing(true); // set trạng thái RefreshControl là true
  getListTour().then(() => {
    setRefreshing(false); // set trạng thái RefreshControl là false khi cập nhật thành công
  });
  setkeyWord("");
};
  

      useEffect(()=>{
        checkHouse();
        getListTour();
      },[]);



      //View
    return(
        <View style={styles.home_Container}>
            
            <Text style={styles.home_Greet}>{greeting}</Text>
            <View style={styles.home_Search}>
                <TextInput style={{width:'85%'}} placeholder="Tìm kiếm" onChangeText={(txt)=> setkeyWord(txt)} value={keyWord}/>
                {
                  keyWord != "" ?
                  <TouchableOpacity style={{ width:40, height:'90%', justifyContent: 'center', alignItems:'center'}} onPress={search}>
                    <Image source={require("./image/search.png")} onPress={search}/>
                  </TouchableOpacity>
                  :null
                  
                }
                
            </View>

            <View style={{height:200}}>
                <SlideShow/>
            </View>

            {/* listTuor */}
            
            <View style={styles.home_Tours}>
          
            <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={true}
        >
          <FlatList data={listTour}
            keyExtractor={(item) => { return item.id }}
            renderItem={renderTour} 
          />
        </ScrollView>

            </View>
        </View>      
    )
}
export default Home;

