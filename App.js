/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Header, Icon } from './src/componentes'
import { Home, Cadastro } from './src/pages'

const App: () => React$Node = () => {
  let heightIos = 0;
  if (Platform.OS == 'ios') {
    heightIos = 35; 
  }

  return (
    
      <NavigationContainer>
        <View style={{ marginTop: heightIos }}>
          <Header />
        </View>
        
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}          
            options={{
              title: 'Home',
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Icon name="car" size={18} color="#000" />
              ),         
            }}
          />
          <Tab.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              tabBarLabel: 'Cadastro',
              tabBarIcon: () => (
                <Icon name="cog" size={18} color="#000" />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
