import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import CustomApiHook from "./CustomApiHook";
import { AsyncStorage } from "react-native";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const data = CustomApiHook("https://fakestoreapi.com/products");
  const [selectedItem, setSelectedItem] = useState("");
  global.src = require("./assets/bookmark.png");
  
  const setImage = (src) => {
    setSelectedItem(src);
  };

  const { bookmark, setBookMark } = useState(null);
  global.boma = [];
  console.log(boma);
  const bm = (a, b, c,d) => {
    let obj = {};
    obj = { a, b, c };
    if(boma.length >0){
    for(var i=0; i<=boma.length();i++){
        for(var j=i+1; j<=boma.length();j++){
            if(boma[i].d!=boma[j].d){
                
            }
            
        }
        boma.push(obj);
    }
}
else{
    boma.push(obj);
}
    
    src = require("./assets/redHeart.png");
    setImage(src);
    console.log(boma);
  };

  useEffect(() => {
    setImage(src);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "grey",
                margin: 10,
                height: 400,
                width: 600,
                borderRadius: 10,
                elevation: 2,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => bm(item.title, item.price, item.image,item.id)}
              >
                <Image
                  source={selectedItem}
                  style={{ height: 50, width: 50, marginLeft: 120 }}
                />
              </TouchableOpacity>
              <Image
                source={{ uri: item.image }}
                style={{ height: 100, width: 100 }}
              />

              <Text style={{ fontSize: 20, color: "black", margin: 10 }}>
                {" "}
                {item.title}
              </Text>
              <Text style={{ fontSize: 20, color: "black", margin: 10 }}>
                {" "}
                ${item.price}
              </Text>
              <Text style={{ fontSize: 20, color: "black", margin: 10 }}>
                {" "}
                Buy Now
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            height: 35,
            width: 150,
          }}
          onPress={() => navigation.navigate("Bookmark", boma)}
        >
          <Text style={{ color: "black", fontSize: 25 }}>Bookmark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});