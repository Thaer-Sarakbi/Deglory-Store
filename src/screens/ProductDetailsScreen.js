import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, useWindowDimensions, FlatList  } from 'react-native';
import api from '../api';
import axios from 'axios';
import Swiper from 'react-native-swiper'
import HTML from "react-native-render-html";
import Rating from '../components/Rating';
 
const ProductDetailsScreen = ({ route }) => {
  //console.log(route.params.data)
  const id = route.params.id

  const url = `${api.url.wc}products/${id}?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}`;
  const url2 = `${api.url.wc}products/reviews?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}&id=${id}`;
 

  const [data, setData] = useState('')
  //console.log(data.related_ids)

  const [reviews, setReviews] = useState([])
  //console.log(reviews)

  const getData = async() => {
    await axios.get(url)
    .then(response => {
      //console.log(response);
      setData(response.data)
    })
  }

  const getReviews = () => {
    axios.get(url2)
    .then(res => {
      //console.log(res.data)
      setReviews(res.data)
    })
  }

  useEffect(() => {
    getData()
    getReviews()
   }, [])

   const contentWidth = useWindowDimensions().width;
 
  if(data){
  
    return (
      <ScrollView>
      <View style={styles.container}>
      
        <View style={styles.sliderContainer}>
        <Swiper autoplay  activeDotColor='#FF6347'> 
        {data.images.map((image, index) => {
          
          return(
          <View key={index} style={styles.slide}>
            <Image 
              source={{ uri: image.src }}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          )
         })
        }
        </Swiper>
      </View>

        <View style= {{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 10 }}>
          <View style = {{ flex: 3 }}>
            <Text style= {{ fontSize: 20, fontWeight: 'bold' }}>{data.name}</Text>
            <Text style= {{ color: '#9E9E9E', fontSize: 15 }}>{data.categories[0].name}</Text>
            <Rating />
          </View>
          <View style = {{ flex: 1, alignItems: 'flex-end' }}>
            <Text style = {{ textDecorationLine: 'line-through', fontSize: 18, color: '#FF6347' }}>{data.regular_price} RM</Text>
            <Text style= {{ fontSize: 18 }}>{data.price} RM</Text>
          </View>
        </View>

        <View style= {{ paddingTop: 20 }}>
          <HTML source={{ html: data.description }} contentWidth={contentWidth}  tagsStyles={{ section: { fontWeight: 'bold' }}}  />
        </View>

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsText}>{reviews.length} Reviews</Text>
          
            {reviews.map((review, index) => {
              //console.log(review)
              const avatar = review.reviewer_avatar_urls
              const url = avatar[Object.keys(avatar)[1]]
              //console.log(url)

              const date = new Date(review.date_created)
              var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              const month = months[date.getMonth()]
              const day = date.getDate()
              const year = date.getFullYear()
              return(
                <View style= {styles.reviewBox} key={index}>
                  <View style= {{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style= {{ fontWeight: 'bold', fontSize: 20 }}>{review.reviewer}</Text>
                      <Rating number= {review.rating} />
                    </View>
                    <Text style= {{ alignSelf: 'center', color: '#9E9E9E' }}>{month} {day}, {year}</Text>
                  </View>
                  <HTML source={{ html: review.review }} contentWidth={contentWidth} />
                  <Image source={{ uri: url }} style={styles.avatar} />
                </View>
              )
            })}
        </View>

        <TouchableOpacity style={styles.addToCart}>
          <Text style={{ color: 'white', fontSize: 15 }}>ADD TO CART</Text>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    )
  } else {
    return(
      <View style={styles.container}>
        <Text>Loading!!!</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  sliderContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    //width: '100%',
    //alignSelf: 'center',
  },
  addToCart: {
    backgroundColor: '#FF6347',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 30,
    height: 45,
    marginTop: 20
  },
  reviewBox: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 15,
    paddingTop: 20,
    marginBottom: 35,
    borderRadius: 10
  },
  reviewsContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  reviewsText: {
    fontSize: 30,
    marginBottom: 40,
    marginLeft: -15
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    position: 'absolute',
    top: -25,
    left: -20
  },
  customRatingBarStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
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

export default ProductDetailsScreen