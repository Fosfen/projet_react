import React from 'react';
import { Text, View, Image} from 'react-native';

const Dish = (props) => {
  return (
    <View>
      <Image source={{uri:props.image}}/>
      <Text>{props.name}</Text>
    </View>
  );
}

export default Dish
