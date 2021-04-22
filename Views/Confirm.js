import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Confirm = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Merci pour votre commande ! Elle sera livrée après la fin du cours.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 25
    }
  });

export default Confirm;
