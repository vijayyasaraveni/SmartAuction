import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import InventoryScreen from '../components/InventoryScreen';
import VehicleDetailsScreen from '../components/VehicleDetailsScreen';
import OffersScreen from '../components/OffersScreen';
import { StatusBar, useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{ title: 'Vehicle Details' }} />
        <Stack.Screen name="Offers" component={OffersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 