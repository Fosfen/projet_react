import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, ScrollView} from "react-native";
import Dish from "../components/dish";

const mocked_data = {
  dishes: [
    { "id": "1", "name": "Saucisse", "description": "Une onctueuse saucisse, dotée d'une délicate touche de miel.", "price": 50.0, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDu1AAhoP31DueEGOLe-4bkb3HRDfhSH7Z-zCKN1vwQc4DdZd_wIOrCIOblitaowAesPuQGlv&usqp=CAc"},
    { "id": "2", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "3", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "4", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "5", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "6", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "7", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "8", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"},
    { "id": "9", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg"}
  ]}

const Home = ({ navigation}) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setData(mocked_data.dishes);
  }, []);

  return (
    <View style={styles.main_container}>
        <Button color="#00aa00" title="Voir ma commande"
          onPress={() =>
            navigation.navigate('Cart', {cart:cart})
          }/>

        <View style={styles.title_container}>
            <Text style={styles.title}>La carte</Text>
        </View>

        <ScrollView>
          <View>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Dish id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} navigation={navigation} cart={cart}/>
              )}
            />
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  main_container:{
    height:"100%"
  },
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
