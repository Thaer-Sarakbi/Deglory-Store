 import React from 'react';
 import { Text, View, StyleSheet } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
 
 const relatedProductStack = (props) => {
   const Stack = createStackNavigator();

   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="RelatedProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
   )
 }
 
 const styles = StyleSheet.create({
   container: {}
 })
 
 export default relatedProductStack