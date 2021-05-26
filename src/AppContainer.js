import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './screens/HomePage';
import WhishListPage from './screens/WhishListPage';
import CartPage from './screens/CartPage'
import ProfilePage from './screens/ProfilePage'
import Icon from 'react-native-vector-icons/Ionicons';
import homeStack from '../src/stacks/productStack';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator()

const AppContainer = (props) => {
  let orders = useSelector((state) => state.cartReducer.orders)
  //console.log(orders.length)

  if(orders.length > 0){
    return (
      <Tab.Navigator tabBarOptions={{
          activeTintColor: '#DB3022',
          inactiveBackgroundColor: 'white'
        }}>
        <Tab.Screen 
          name="Home" 
          component={homeStack} 
          options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={30} />
              )
          }}
        />
  
        <Tab.Screen 
          name="CartPage" 
          component={CartPage} 
          
          options={{
              tabBarLabel: 'Cart',
              labelStyle: {
                color: '#DB3022'
              },
              tabBarBadge: orders.length,
              tabBarIcon: ({ color, size }) => (
                <Icon name="cart" color={color} size={30} />
              )
          }}
        />
  
        <Tab.Screen 
          name="WhishListPage" 
          component={WhishListPage}
          options={{
              tabBarLabel: 'WhishList',
              tabBarIcon: ({ color, size }) => (
                <Icon name="heart" color={color} size={30} />
              )
          }} 
        />
  
        <Tab.Screen 
          name="ProfilePage" 
          component={ProfilePage}
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={30} />
              )
          }} 
        />
      </Tab.Navigator>
    )
  } else {
    return (
      <Tab.Navigator tabBarOptions={{
          activeTintColor: '#DB3022',
          inactiveBackgroundColor: 'white'
        }}>
        <Tab.Screen 
          name="Home" 
          component={homeStack} 
          options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={30} />
              )
          }}
        />
  
        <Tab.Screen 
          name="CartPage" 
          component={CartPage} 
          
          options={{
              tabBarLabel: 'Cart',
              labelStyle: {
                color: '#DB3022'
              },
              tabBarIcon: ({ color, size }) => (
                <Icon name="cart" color={color} size={30} />
              )
          }}
        />
  
        <Tab.Screen 
          name="WhishListPage" 
          component={WhishListPage}
          options={{
              tabBarLabel: 'WhishList',
              tabBarIcon: ({ color, size }) => (
                <Icon name="heart" color={color} size={30} />
              )
          }} 
        />
  
        <Tab.Screen 
          name="ProfilePage" 
          component={ProfilePage}
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={30} />
              )
          }} 
        />
      </Tab.Navigator>
    )
  }
  

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
      }
})

export default AppContainer