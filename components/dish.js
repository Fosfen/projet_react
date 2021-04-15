import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

const Dish = (props) => {
  return (
    <View style={styles.main_container}>
      <View>
        <Image style={styles.image} source={{uri:props.image}}/>
      </View>
      <View style={styles.description_container}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.description}>YOlo je suis un super long texte qui va bien casser les couilles dans la description espece de mouldi sagar de tes morts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main_container:{
      flexDirection:"row",
      padding:5
    },
    image_container:{
      width:"20%"
    },
    description_container:{
      width:"70%",
    },
    image:{
      width:100,
      height:100,
    },
    title:{
      fontSize : 16,
      fontWeight : 'bold',
      marginLeft : 10
    },
    description:{
      fontSize : 11,
      marginLeft : 10
    }
  });

export default Dish
