import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Cart = ({navigation}) => {

  return (
    <View>
        <View style={styles.title_container}>
            <Text style={styles.title}>Mon panier :</Text>
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
