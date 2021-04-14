import React from "react";
import { View, Text, StyleSheet } from "react-native";

const  Home = () => {
  return (
    <View>
        <View style={styles.title_container}>
            <Text style={styles.title}>La carte</Text>
        </View>

        <View style={styles.dishes_container}>
         {/* DISHES COME HERE */}
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
