import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const SingleItem = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.images}/>
      <Text style={styles.text}>{result.name}</Text>
      <Text>Rating: {result.rating} Stars,  Reviews: {result.review_count}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  images: {
    height: 200,
    width: 250,
    borderRadius: 8,
    marginVertical: 8
  },
  text: {
    fontSize:16,
    fontWeight:'bold',
    marginBottom: 5
  },
  container : {
    marginLeft: 15
  }
})

export default SingleItem