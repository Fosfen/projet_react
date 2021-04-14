import React from 'react';
import { Text, View } from 'react-native';

const Dish = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

export default Dish
