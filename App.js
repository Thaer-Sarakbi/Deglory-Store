import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import AppContainer from './src/AppContainer';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './src/store/productsReducer'
import rootReducer from './src/store/rootReducer'
import { MenuProvider } from 'react-native-popup-menu';

const store = createStore(rootReducer,
   compose(
     applyMiddleware(thunk)
   ))

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default App