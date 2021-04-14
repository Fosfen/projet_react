import React from "react";
import { View, Text, StyleSheet } from "react-native";

const  Home = () => {
  return (
    <View style={styles.main_container}>
        <Text>Main container</Text>

        <View style={styles.title_container}>
            <Text>Title container</Text>
        </View>

        <View style={styles.dishes_container}>
         {/* DISHES COME HERE */}
        </View>

      </View>
  );
};

const styles = StyleSheet.create({
    main_container: {
        backgroundColor:"red"
    },
    title_container:{
        padding:3,
        backgroundColor:"green"
    },
    dishes_container:{
        flexDirection: "row",
        backgroundColor:"grey"
    },
  });


export default Home;
