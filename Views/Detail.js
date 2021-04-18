import React from 'react';
import { View, Image, Text } from 'react-native';

const Detail = ({ navigation, route }) => {
  return (
    <View>
      <View>
        
      </View>

      <View>
        <Text>{ route.params.name }</Text>
      </View>

      <View>

      </View>
    </View>
  )
}

export default Detail;
