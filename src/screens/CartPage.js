import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { removeProduct } from '../actions/cartActions';

const CartPage = (props) => {
   
  let orders = useSelector((state) => state.cartReducer.orders)
  
  const dispatch = useDispatch();

  const remove = (id) => dispatch(removeProduct(id))

  if(orders.length > 0){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
  
        {orders.map(order => {
          //console.log(order.id)
          return(
          <View key= {order.id} style={styles.card}>
            
            <View >
              <Image source= {{ uri: order.images[0].src }} style= {{ width: 120, height: '100%', resizeMode: 'cover' }} />
            </View>
  
                <View style={{  flex: 1 }}>
                  <View style= {styles.rightSide}>
                    <Text style= {{  fontWeight: 'bold', fontSize: 20 }}>{order.name}</Text>
                    <Menu>
                      <MenuTrigger>
                        <Image source={require('../assets/three.png')} style= {{ width: 20, height: 25, marginLeft: 5 }} />
                      </MenuTrigger>
                      <MenuOptions style={{ borderRadius: 45 }}>
                        <MenuOption onSelect={() => remove(order.id)} style={{ height: 50, borderBottomWidth: 1, borderBottomColor: '#EEEEEE', justifyContent: 'center' }}>
                          <Text>Delete from the list</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => console.log('clicked')} style={{ height: 50, justifyContent: 'center' }}>
                          <Text>Hi</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </View>
  
                  <View style= {styles.rightBottom}>
                    <View style= {{ flexDirection: 'row', marginLeft: 5 }}>
                      <TouchableOpacity style= {styles.amountIcons}>
                        <Ionicons name="add-outline" size = {25} color="#9E9E9E" />
                      </TouchableOpacity>
                      <Text style= {{ fontSize: 30, marginHorizontal: 10 }}>1</Text>
                      <TouchableOpacity style= {styles.amountIcons}>
                        <Ionicons name="remove-outline" size = {25} color={'#9E9E9E'} />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text style={{ fontSize: 15, marginBottom: 11 }}>{order.price} RM</Text>
                    </View>
                  </View>
  
                </View>
  
          </View>
         )
        })}
      </View>
    )
  } else {
    return(
      <View>
        <Text style={styles.title}>Cart</Text>
        <Text>Your Cart is empty</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE'
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 40, 
    marginLeft: 20, 
    marginTop: 20
  },
  card: {
    flexDirection: 'row', 
    marginHorizontal: 10, 
    backgroundColor: '#FAFAFA' ,
    borderRadius: 10, 
    overflow: 'hidden', 
    height: 150
  },
  rightSide: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10, 
    paddingHorizontal: 10
  },
  rightBottom: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 25, 
    flex: 1, 
    alignItems: 'flex-end', 
    paddingBottom: 10, 
    paddingRight: 15 
  },
  amountIcons: { 
    borderWidth: 1, 
    borderColor: '#9E9E9E', 
    borderRadius: 35, 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
})

export default CartPage