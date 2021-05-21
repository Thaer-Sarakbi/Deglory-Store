import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Rating = (props) => {
  //console.log(props)
  const maxRating= [1, 2, 3, 4, 5]
  const starImgFailed = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  return (
    <View style= {styles.customRatingBarStyle}>
      {
        maxRating.map((index) => {
          return(
            <View key={index} activeOpacity={0.7}>
              <Image style={styles.starImgStyle} source={ index <= props.number ? {uri: starImgFailed} : {uri: starImgCorner} } />
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    customRatingBarStyle: {
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },
    starImgStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover'
      },
})

export default Rating