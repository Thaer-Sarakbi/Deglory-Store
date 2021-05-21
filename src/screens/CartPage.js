import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CartPage = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>CartPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default CartPage