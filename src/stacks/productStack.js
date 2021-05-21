import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import productDetailsStack from './productDetailsStack';

const productStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default productStack