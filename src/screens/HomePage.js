import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import api from '../api';
import Rating from '../components/Rating'

const HomePage = ({ navigation }) => {
  const [data, setData] = useState('')
  //console.log(data)

  const maxRating= [1, 2, 3, 4, 5]
  const starImgFailed = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  const url = `${api.url.wc}products?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}`;
  
  const getData = async() => {
    await axios.get(url)
    .then(response => {
      //console.log(response);
      setData(response.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  if(data){
    //console.log(data.name)
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
            data = {data}
            keyExtractor= {(item) => {return item.id}}
            horizontal
            renderItem = {({item}) => {
              //console.log(item.id)
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
  } else {
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