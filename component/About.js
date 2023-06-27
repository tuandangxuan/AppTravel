import { View , Text} from "react-native";





const About =()=>{
    const arr =[
        {title:"Hạ Long",image: "https://dulichkhampha24.com/wp-content/uploads/2019/09/du-lich-ha-long.jpg", link:"https://nucuoimekong.com/kinh-nghiem-du-lich-vinh-ha-long"},
        {title:"Thái Lan",image: "https://luhanhvietnam.com.vn/tour-thai-lan/wp-content/uploads/2022/05/du-lich-thai-lan-co-con-nho.jpg", link:"https://cattour.vn/tour-du-lich-thai-lan-bangkok-pattaya-5-ngay-4-dem.html?gad=1&gclid=CjwKCAjw44mlBhAQEiwAqP3eVpetwFXeVYURRLhTcDLG7LCylEXMEEKSBtPHr87AFXPkAK4VkKJkNhoCeawQAvD_BwE"}

    ];

    const handleImagePress = (link) => {
        Linking.openURL(link);
      };
    
    return(
        <View>
            <Text>Giới thiệu</Text>
        </View>
    )
}
export default About;