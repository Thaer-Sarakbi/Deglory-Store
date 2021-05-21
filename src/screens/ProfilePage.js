import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import api from '../api';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilePage = (props) => {
  const url = `${api.url.wc}customers?consumer_key=${api.keys.consumerKey}&consumer_secret=${api.keys.consumerSecret}&id=2`;
  //console.log(url)

  const [user, setUser] = useState()
  //console.log(user.first_name)

  const getData = async() => {
    await axios.get(url)
    .then(response => {
      //console.log(response);
      setUser(response.data[0])
    })
  }

  useEffect(() => {
    getData()
   }, [])

  if(user){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Profile</Text>
        <View style= {{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }}>
          <Image style= {{ width: 70, height: 70, borderRadius: 50 }} source={{ uri: user.avatar_url }} />
          <View style= {{ marginLeft: 15 }}>
            <Text style= {{ fontWeight: 'bold', fontSize: 23 }}>{user.first_name} {user.last_name}</Text>
            <Text style={{ color: '#9E9E9E' }}>{user.email}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.orderContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 20 }}>My Orders</Text>
              <Text style={{ color: '#9E9E9E' }}>Already have 12 orders</Text>
            </View>
            <Icon name="chevron-forward-outline" size={30} color='#9E9E9E' />
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shippingContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 20 }}>Shipping Addresses</Text>
              <Text style={{ color: '#9E9E9E' }}>3 addresses</Text>
            </View>
            <Icon name="chevron-forward-outline" size={30} color='#9E9E9E' />
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shippingContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 20 }}>Payment Methods</Text>
              <Text style={{ color: '#9E9E9E' }}>Visa **34</Text>
            </View>
            <Icon name="chevron-forward-outline" size={30} color='#9E9E9E' />
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shippingContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 20 }}>My Reviews</Text>
              <Text style={{ color: '#9E9E9E' }}>Reviews for 4 items</Text>
            </View>
            <Icon name="chevron-forward-outline" size={30} color='#9E9E9E' />
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>

      </View>
    )
  } else {
    return(
      <View>
        <Text>Loading!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  title: {
    fontSize: 35,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 20
  },
  orderContainer: {
    marginHorizontal: 15,
    marginTop: 40,
  },
  shippingContainer: {
    marginHorizontal: 15,
    marginTop: 25
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#E0E0E0',
    marginTop: 10
  }
})

export default ProfilePage