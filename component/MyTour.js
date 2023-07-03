import { View , Text, ScrollView, FlatList, TouchableOpacity, Image,RefreshControl} from "react-native";
import { useState , useEffect} from "react";
import styles from "./styles";
import BlinkingText from "./open/BlinkingText";




const MyTour =(props)=>{
    const phoneFromLogin = props.route.params.phoneFromLogin;
    const [isLoading, setisLoading] = useState(true);

    
    const [listTour, setlistTour] = useState([]);
    const handleRefresh = () => {
        setisLoading(true);
        console.log("Vuốt trên xuống");
        getListTour();
        
      };

    const getListTour=async()=>{
        let api_url ="https://xuantuan06.000webhostapp.com/php/GetMyTourFromApi.php?phone="+phoneFromLogin;
  
  
        try {
            const response = await fetch(api_url);// load dữ liệu
            const json = await response.json();// chuyển dl thành json
           
            setlistTour(json)// đổ dl vào state
  
          } catch (error) {
            console.error(error);
          }finally{
            setisLoading(false)
          }
    };


    const renderTour=({item})=>{
      return(
        <TouchableOpacity onPress={()=>{props.navigation.navigate('DetailTour', {idTourFromHome : item.id, phoneFromLogin : 0})}}>
          <View style={styles.home_Tour} >
              <View style={{width:'40%',justifyContent:'center', alignItems:'center', padding:3}}  >
                <Image source={ {uri: item.image}} style={styles.home_ImageTuor}/>
              </View>
              <View style={{width:'60%', padding:5}}>
                <View style={{justifyContent: 'center', alignItems:'center', width:'100%'}} >
                  <BlinkingText text ={item.title} interval={1000}/>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:12, width:'50%'}}>Số lượng {item.members}</Text>
                  <Text style={{fontSize:12,fontStyle:'italic' }}>Hạn: {item.lastdate}</Text>
                </View>
                
                <Text>Chi phí : {item.price}</Text>
                <Text>Mô tả : </Text>
                <Text style={{marginLeft: 3,fontSize: 12,}} numberOfLines={4} >{item.description}</Text>
              </View>
          </View>
          </TouchableOpacity>
             
      )
    };
    useEffect(()=>{
        getListTour();
      },[]);

    return(
        <View style={styles.home_Container}>
            <View style={{justifyContent: 'center',alignItems:'center', marginTop:10}}>
                <Text style={{fontStyle:'italic', fontSize:25, fontWeight:'bold', color:'#6633FF'}}>Danh sách chuyến đi của bạn</Text>
            </View>
            {/* listTuor */}
            
            <View style={styles.myTour_Tours}>
          
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
export default MyTour;