import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Button} from "react-native";

const Cart = ({navigation, route}) => {

  return (
    <View style={styles.main_container}>
      <Button title="Commander" color="#00aa00"
      onPress = {() =>
        navigation.navigate('Confirm')
      }
      />
        <View style={styles.title_container}>
            <Text style={styles.title}>Ma commande : {route.params.cart.map(a=>a.price).reduce((a,b)=>a+b,0)}€</Text>
        </View>
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

export default Cart;
