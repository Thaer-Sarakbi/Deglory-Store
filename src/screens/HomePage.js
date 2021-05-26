import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native';
import api from '../api';
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/actions';

const HomePage = ({ navigation }) => {
  //const [data, setData] = useState('')
  
  let products = useSelector((state) => state.productsReducer.products)
  //console.log(products)

  const url = `${api.url.wc}products?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}`;
  
  const dispatch = useDispatch();

  const getProduct = () => dispatch(getProducts(url)) 

  useEffect(() => {
    //getData()
    getProduct()
  }, [])

  const backAction = () => {
    navigation.goBack() 
    console.log('true')
    // Alert.alert("Hold on!", "Are you sure you want to exit?", [
    //   {
    //     text: "Cancel",
    //     onPress: () => null,
    //     style: "cancel"
    //   },
    //   { text: "YES", onPress: () => BackHandler.exitApp() }
    // ]);
    // return true;
  };

   BackHandler.addEventListener("hardwareBackPress", backAction);

   if(products){
    //console.log(products)
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>
          <Image style={{ height: 250, width: '100%'}} source={{ uri: 'https://www.truthmedia.gr/sites/default/files/online-shopping-ecommerce-ss-1920_1.png' }} />
          <Text style= {{ bottom: 50, color: 'white', fontSize: 30, position: 'absolute', left: 10, fontWeight: 'bold'  }}>Deglory Store</Text>
        </View>
  
        <View style= {{ paddingTop: 25, paddingHorizontal: 10 }}>
          <Text style= {{ fontSize: 30, fontWeight: 'bold' }}>Featured Products</Text>
          <FlatList 
            data = {products}
            keyExtractor= {(item) => {return item.id}}
            horizontal
            renderItem = {({item}) => {
              //console.log(item)
              if(item.featured === true){
                return(
                  <TouchableOpacity style= {styles.featuredCard} onPress={() => navigation.navigate('productDetails', { id: item.id })}> 
                    <Image source={{ uri: item.images[0].src }} style= {{ width: '100%', height: 150, resizeMode: 'cover' }} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.category}>{item.categories[0].name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style= {{ textDecorationLine: 'line-through' }}>{item.regular_price}</Text>
                      <Text>{item.sale_price}</Text>
                    </View>

                    <Rating number = {item.average_rating} />

                  </TouchableOpacity>
                )
              }
            }}
          />
        </View>
      </View>
      </ScrollView>
    )
  } 
  else {
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  customRatingBarStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  starImgStyle: {
    width: 25,
    height: 25,
    resizeMode: 'cover'
  },
  title: {},
  category: {
    color: '#9E9E9E',
    marginTop: 5
  },
  featuredCard:{  
    width: 150,
    marginRight: 15,
    borderColor: '#E0E0E0' ,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden'
  }
})

export default HomePage