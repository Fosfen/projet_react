import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Detail = ({ navigation, route }) => {
  return (
    <View>
      
      <Image style={styles.image} source={{uri:route.params.image}}/>

      <View>
        <Text style={styles.text}>Nom de l'article : { route.params.name } </Text>
        <Text style={styles.text}>Prix de l'article : {route.params.price}</Text>
        <Text style={styles.text}> Détails : { route.params.details}</Text>

      </View>

      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 25
    },
    
    image:{
      width: "100%",
      height: 100,
      resizeMode:"center"
    }

  });

export default Detail;
