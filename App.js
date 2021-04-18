// Other immports
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// React native components
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

// Our components
import Home from './Views/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions ={{ title: 'Delivecrous',
          headerRight: () => (
          <View style={styles.CartButtonContainer}>
            <Button color="#00aa00" title="Go to my cart"/>
          </View>
        )}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CartButtonContainer:{
    padding:5,
  }
});
