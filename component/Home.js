import { View , Text, TextInput, Image, ScrollView,FlatList, RefreshControl,ActivityIndicator, } from "react-native";
import { useState, useEffect } from "react";

import SlideShow from "./open/SlideShow";
import styles from "./styles";
import BlinkingText from "./open/BlinkingText";
import Decription from "./open/Description";





const Home =(props)=>{
    const [greeting, setGreeting] = useState("");
    const [listTour, setlistTour] = useState([]);
    const [isLoading, setisLoading] = useState(true);


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

      const getListTour=async()=>{
        let api_url ="http://192.168.31.108:3000/tours"
  
  
        try {
            const response = await fetch(api_url);// load dữ liệu
            const json = await response.json();// chuyển dl thành json
           
            setlistTour(json)// đổ dl vào state
  
          } catch (error) {
            console.error(error);
          }finally{
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
             
      )
    };
// Thực hiện các tác vụ khi người dùng vuốt từ trên xuống 
    const handleRefresh = () => {
      setisLoading(true);
      console.log("Vuốt trên xuống");
      getListTour();
      
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
                <TextInput style={{width:'90%'}} placeholder="Tìm kiếm"/>
                <Image source={require("./image/search.png")}/>
            </View>

            <View style={{height:200}}>
                <SlideShow/>
            </View>

            {/* listTuor */}
            
            <View style={styles.home_Tours}>
          
              <ScrollView
                refreshControl={<RefreshControl
                refreshing={isLoading}
                onRefresh={handleRefresh} />}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={true}
              >
                 <FlatList data={listTour}
                      keyExtractor={(item) => { return item.id }}
                      renderItem={renderTour} />
              </ScrollView>

            </View>
        </View>      
    )
}
export default Home;

