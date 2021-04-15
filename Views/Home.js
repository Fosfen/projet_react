import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const  Home = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/dishes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
        <View style={styles.title_container}>
            <Text style={styles.title}>La carte</Text>
        </View>

        <View style={styles.dishes_container}>
         {/* DISHES COME HERE */}
         <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
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
    dishes_container:{
        flexDirection: "row",
        backgroundColor:"grey"
    },
  });


export default Home;
