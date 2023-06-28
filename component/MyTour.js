import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import BlinkingText from "./open/BlinkingText";

const MyTour = (props) => {
  const [listTour, setlistTour] = useState([]);

  useEffect(() => {
    let api_url = "https://xuantuan06.000webhostapp.com/php/GetTourFromApi.php";
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setlistTour(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(listTour);

  const renderTour = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.home_Tour}>
          <View
            style={{
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Image source={{ uri: item.image }} style={styles.home_ImageTuor} />
          </View>
          <View style={{ width: "60%", padding: 5 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <BlinkingText text={item.title} interval={1000} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, width: "50%" }}>
                Số lượng {item.member}/{item.maximum}
              </Text>
              <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                Hạn: {item.lastdate}
              </Text>
            </View>

            <Text>Chi phí : {item.price}</Text>
            <Text>Mô tả : </Text>
            <Text style={{ marginLeft: 3, fontSize: 12 }} numberOfLines={4}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.My_Tours}>
      <View style={styles.MyTours_title}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Danh sách các tours đã đăng kí
        </Text>
      </View>
      <ScrollView
        refreshControl={<RefreshControl />}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={true}
      >
        <FlatList
          data={listTour}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={renderTour}
        />
      </ScrollView>
    </View>
  );
};
export default MyTour;
