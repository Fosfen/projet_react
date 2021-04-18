import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button} from "react-native";
import Dish from "../components/dish";

const mocked_data = {
  dishes: [
    { "id": "1", "name": "Saucisse", "description": "Une onctueuse saucisse, dotée d'une délicate touche de miel.", "price": 0.50, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDu1AAhoP31DueEGOLe-4bkb3HRDfhSH7Z-zCKN1vwQc4DdZd_wIOrCIOblitaowAesPuQGlv&usqp=CAc"},
    { "id": "2", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"}
  ]}

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mocked_data.dishes);
  }, []);

  return (
    <View>
      <Button color="#00aa00" title="Go to my cart"
        onPress={() =>
          navigation.navigate('Cart')
        }/>

        <View style={styles.title_container}>
            <Text style={styles.title}>La carte</Text>
        </View>

        <View>
         <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Dish name={item.name} image={item.image} price={item.price} description={item.description} navigation={navigation}/>
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
