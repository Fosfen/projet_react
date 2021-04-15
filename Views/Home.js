import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Dish from "../components/dish";

const mocked_data = {
  dishes: [
    { "id": "1", "name": "Saucisse", "description": "Une onctueuse saucisse, dotée d'une délicate touche de miel." },
    { "id": "2", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab" }
  ]}

const  Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mocked_data.dishes);
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
            <Dish name={item.name} description={item.description}/>
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
