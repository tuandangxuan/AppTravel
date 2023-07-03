import { View , Text, Linking, TouchableOpacity, Image, ScrollView} from "react-native";





const About =()=>{
    const arr =[
        {title:"Hạ Long",image: "https://dulichkhampha24.com/wp-content/uploads/2019/09/du-lich-ha-long.jpg", link:"https://nucuoimekong.com/kinh-nghiem-du-lich-vinh-ha-long"},
        {title:"Thái Lan",image: "https://luhanhvietnam.com.vn/tour-thai-lan/wp-content/uploads/2022/05/du-lich-thai-lan-co-con-nho.jpg", link:"https://cattour.vn/tour-du-lich-thai-lan-bangkok-pattaya-5-ngay-4-dem.html?gad=1&gclid=CjwKCAjw44mlBhAQEiwAqP3eVpetwFXeVYURRLhTcDLG7LCylEXMEEKSBtPHr87AFXPkAK4VkKJkNhoCeawQAvD_BwE"}

    ];

    const handleImagePress = (link) => {
        Linking.openURL(link);
      };
    
    return(
        <View style={{flex:1, marginTop:30, padding:10}}>
            <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                <Text style={{fontStyle:'italic', fontSize:25, fontWeight:'bold', color:'#6633FF', }} >Giới thiệu</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                >
                {arr.map((item, index) => (
                    <View style={{marginTop: 20, paddingBottom:20}}>
                    
                    <TouchableOpacity key={index} onPress={() => handleImagePress(item.link)}>
                    <Image source={{ uri: item.image }} style={{width:'100%', height:400}} />
                    <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                        <Text style={{fontStyle:'italic', fontSize:15, fontWeight:'bold', color:'#FF6600',textDecorationLine:'underline', marginTop:10}} >{item.title}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                ))}
            </ScrollView>
            
        </View>
    )
}
export default About;