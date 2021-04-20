import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView} from "react-native";

const Cart = ({navigation, route}) => {

  return (
    <View>
        <View style={styles.title_container}>
            <Text style={styles.title}>Ma commande : {route.params.cart.map(a=>a.price).reduce((a,b)=>a+b,0)}€</Text>
            <ScrollView>
              <FlatList
                data={route.params.cart}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text> # {item.name} - {item.price}€</Text>
              )}
              />
            </ScrollView>
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

export default Cart;
