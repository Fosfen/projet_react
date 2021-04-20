import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, ScrollView} from "react-native";
import Dish from "../components/dish";

const mocked_data = {
  dishes: [
    { "id": "1", "name": "Saucisse", "description": "Une onctueuse saucisse, dotée d'une délicate touche de miel.", "price": 0.50, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDu1AAhoP31DueEGOLe-4bkb3HRDfhSH7Z-zCKN1vwQc4DdZd_wIOrCIOblitaowAesPuQGlv&usqp=CAc", "details":"Cette saucisse à été concue dans un boyau naturel, et sain pour votre corps"},
    { "id": "2", "name": "Kebab", "description": "C'est la street, on aime tous graille un bon Kebab", "price": 3.50, "image":"https://www.toute-la-franchise.com/images/zoom/ouvrir-un-kebab-en-franchise.jpg", "details":"Kebab disponible en boeuf ou poulet. Produits frais."},
    { "id": "3", "name": "Croque Monsieur", "description": "Un p'tit croque monsieur au cheddar fondant", "price": 1.50, "image":"https://www.atelierdeschefs.com/media/recette-e13751-croque-monsieur.jpg", "details":"Pain de mie de qualité supérieure"},
    { "id": "4", "name": "Panini", "description": "C'est pas un Kebab, c'est pas un croque non plus", "price": 3, "image":"https://www.ptitchef.com/imgupl/recipe/panini-a-la-raclette--lg-459546p720601.jpg", "details":"Disponible sous différentes déclinaisons : 4 fromages, reine, veggie, bolognaise"},
    { "id": "5", "name": "Charismatik", "description": "L'incontournable burger", "price": 6.50, "image":"https://vaoresto.site/upload/1600245049-le-charismatik-speed-burger-chalon-sur-saone.png", "details":"Confectionné avec amour par une équipe de passionnés du burger. Peut contenir des traces d'addictif !"},
    { "id": "6", "name": "Grande frite", "description": "Din ch'nord, on a des frites comme jamais t'as connu tizaut !", "price": 0.90, "image":"https://www.mon-emballage.com/21237-zoom/pochette-grande-frite-pyramikraft-carton-brun-.jpg", "details":"Frites fraiches !"},
    { "id": "7", "name": "Nuggets", "description": "Un poulet élevé en plein air réduit à sa plus simple forme", "price": 2.00, "image":"https://assets.afcdn.com/recipe/20130909/64035_w1024h1024c1cx1728cy2592.webp", "details":"Nuggets detail"},
    { "id": "8", "name": "Tenders", "description": "Ce poulet la à été frit un peu plus que le nuggets..", "price": 2.50, "image":"https://chamasburger.com/wp-content/uploads/2020/07/Tenders.jpg", "details":"Tenders detail"},
    { "id": "9", "name": "Carambar", "description": "Carambar, à fond la blague", "price": 0.05, "image":"https://www.espace-bonbon.fr/1767-thickbox_default/carambar-caramel.jpg", "details":"Carambar detail"}
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
                <Dish id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} details={item.details} navigation={navigation} cart={cart}/>
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
