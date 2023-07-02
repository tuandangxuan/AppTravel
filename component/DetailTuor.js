import { View , Text, Image, TouchableOpacity} from "react-native";
import { useState , useEffect } from "react";
import styles from "./styles";
import BlinkingText from "./open/BlinkingText";
import axios from "axios";

const DetailTour =(props)=>{
  
    const idTour= props.route.params.idTourFromHome
    const [tour, settour] = useState([]);
    const getListTour=async()=>{
        let api_url ="https://xuantuan06.000webhostapp.com/php/DetailTour.php?id="+idTour;
  
  
        try {
            const response = await fetch(api_url);// load dữ liệu
            const json = await response.json();// chuyển dl thành json
            settour(json)
               
  
          } catch (error) {
            console.error(error);
          }finally{
           
          }
    };
    const data={
        id: idTour,
        phone : props.route.params.phoneFromLogin
    }
    const joinTour=()=>{
        axios.post('https://xuantuan06.000webhostapp.com/php/JoinTour.php', data)
    .then(response => {
    if (response.data.success) {
      //Đăng nhập thành công
      navigation.navigate('TabMenu', {phoneFromLogin : phone });
      alert("Xin chào bạn");
      console.log(response.data.message);
    } else {
      // Xử lý khi  thất bại
      console.log(response.data.message);
      alert(response.data.message);
      
    }
  })
  .catch(error => {
    // Xử lý khi có lỗi xảy ra
    console.log(error);
  });
    }
    useEffect(()=>{
        getListTour();
      },[]);
    

    return(
        <View style={{ flex:1, marginTop:35, padding:5}}>
            <View style={{justifyContent: 'center',alignItems:'center'}}>
                <Text style={{fontSize:20, fontStyle:'italic', marginBottom:20}}>{tour.title}</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', padding:3}}  >
                <Image source={ {uri: tour.image}} style={styles.detail_ImageTuor}/>
            </View>
            <View>
                <Text style={{fontSize: 15,marginTop:20}}>Số lượng thành viên : {tour.members}</Text>
            </View>
            <View>
                <Text style={{fontSize: 17,marginTop:20}}>{tour.description}</Text>
            </View>
            
            <View>
                <Text style={{fontSize: 15,marginTop:20}}>Chi phí : {tour.price} VNĐ</Text>
            </View>
            <View style={{ width:'100%',justifyContent: 'flex-end', alignItems:'flex-end'}}>
                <Text style={{fontSize: 15,marginTop:30}}>Ngày hết hạn : {tour.lastdate}</Text>
            </View>
            <View>
            <TouchableOpacity style={styles.detailTour_btnThamgia}>
                <BlinkingText text ="Tham gia" interval={1000}/> 
            </TouchableOpacity>
            </View>
            
            
        </View>
    )
}
export default DetailTour;