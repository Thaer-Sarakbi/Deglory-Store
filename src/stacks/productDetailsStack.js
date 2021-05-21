import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import { createStackNavigator } from '@react-navigation/stack';

const productDetailsStack = ({ route }) => {
  console.log(route.params.data)
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} initialParams={{ id: route.params.id, data: route.params.data }}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default productDetailsStack