import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  { uri: 'https://tophinhanhdep.com/wp-content/uploads/2021/10/720x1480-Wallpapers.jpg' },
  { uri: 'https://i.pinimg.com/564x/b1/78/32/b17832ed39fd47db601a525e963050a2.jpg' },
  { uri: 'https://duhocchaudaiduong.edu.vn/mot-so-hinh-nen-dep/imager_2_3642_700.jpg' },
];

const SlideShow = () => {
  
    
    const [data, setData] = useState([]);

  useEffect(() => {
    let api_url ="https://xuantuan06.000webhostapp.com/php/GetSlide.php"
    fetch(api_url).then(response => response.json())
    .then(data => setData(data))
    .catch(error => {
      console.error(error);
    })}, []);
    
   

  return (
    <Swiper loop={true} autoplay={true}>
      {data.map((item, index) => (
        <View key={index}>
          <Image source={{uri: item.image}} style={{ width: '100%', height: 200, borderRadius:10 }} />
        </View>
      ))}
    </Swiper>
  );
      };

export default SlideShow;