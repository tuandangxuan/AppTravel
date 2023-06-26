import { View , Text, TextInput, Image,} from "react-native";
import { useState, useEffect } from "react";
import SlideShow from "./open/SlideShow";
import styles from "./styles";





const Home =()=>{
    const [greeting, setGreeting] = useState("");

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

      useEffect(()=>{
        checkHouse();
      },[]);



      //View
    return(
        <View style={styles.home_Container}>
            
            <Text style={styles.home_Greet}>{greeting}</Text>
            <View style={styles.home_Search}>
                <TextInput style={{width:'90%'}}
                    placeholder="Tìm kiếm"
                />
                <Image source={require("./image/search.png")}/>

            </View>

            <View style={{height:200}}>
                <SlideShow/>
            </View>
            <View style={styles.home_Tours}>
                <View style={styles.home_Tour}>
                    <View style={{width:'35%'}}>
                    <Image source={{uri: 'https://tophinhanhdep.com/wp-content/uploads/2021/10/720x1480-Wallpapers.jpg'}} style={{width:120, height:120, borderRadius: 10,}}/>

                    </View>
                    <View style={{width:'65%' , }}>
                        <Text>2 ngày 1 đêm Cát Bà</Text>
                        <Text>2 ngày 1 đêm Cát Bà</Text>
                        <Text>2 ngày 1 đêm Cát Bà</Text>
                        <Text>2 ngày 1 đêm Cát Bà</Text>


                    </View>
                </View>
            </View>
        </View>
        
    )
}
export default Home;

