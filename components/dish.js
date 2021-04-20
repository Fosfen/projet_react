import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableHighlight} from 'react-native';
import Cart from '../Views/Cart';

function removeItem(cart, id){
  console.log(id)
  var index = cart.map(x => {
    return x.id;
  }).indexOf(id);

  cart.splice(index, 1);
}

const Dish = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => props.navigation.navigate("Detail", props)}>
    <View style={styles.main_container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri:props.image}}/>
      </View>
     <View style={styles.parent_description_container}>
        <View style={styles.description_container}>
          <Text style={styles.title}>{props.name} : {/*TODO quantité*/}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>

        <View style={styles.price_and_button_container}>
          <Text style={styles.price}>{props.price}€</Text>
          
          <Button style={styles.button} color="#aa0000" title="-"
            onPress={() => removeItem(props.cart, props.id)}>
          </Button>
              
          <Button style={styles.button} color="#00aa00" title="+"
              onPress={() =>
                        props.cart.push({id: props.id, name:props.name, price:props.price})
                      }>
          </Button>

        </View>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    main_container:{
      flexDirection:"row",
      padding:5,
    },

    image_container:{
      flex: 1,
    },

    parent_description_container:{
      flex: 4,
      flexDirection:"column",
    },

    description_container:{
      flex: 4,
    },

    price_and_button_container:{
      flexDirection:"row",
    },

    image:{
      width: "100%",
      height: 100,
      resizeMode:"center"
    },

    title:{
      fontSize : 16,
      fontWeight : 'bold',
      marginLeft : 10
    },

    price:{
      flex:1,
      fontSize : 14,
      fontWeight : 'bold',
      marginLeft : 10
    },

    button:{
      justifyContent:'flex-end',
    },

    description:{
      fontSize : 11,
      marginLeft : 10
    }
  });

export default Dish
