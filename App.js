import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import AppContainer from './src/AppContainer';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import productsReducer from './src/store/productsReducer'

const store = createStore(productsReducer)

const App = (props) => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default App