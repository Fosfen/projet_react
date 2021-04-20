// Other immports
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// React native components
import React from 'react';
import { StyleSheet } from 'react-native';

// Our components
import Home from './Views/Home';
import Cart from './Views/Cart';
import Detail from './Views/Detail';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions ={{ title: 'Delivecrous'}}>

        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
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
  }
});
