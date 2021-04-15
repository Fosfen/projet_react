import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Dish from "../components/dish";

const  Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://192.168.152.86:3000/dishes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
        <View style={styles.title_container}>
            <Text style={styles.title}>La carte</Text>
        </View>

        <View>
         <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Dish name={item.name}  image={item.image}/>
          )}
        />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    title_container:{
        padding:10,
        marginLeft:"5%",
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        textDecorationLine:"underline"
    },
  });


export default Home;
