import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {

  const [images, setImages] = useState(null)
  const id = navigation.getParam('id')

  const getImages = async (id) => {
    const response = await yelp.get(`/${id}`)
    setImages(response.data)

  }

  useEffect(() => {
    getImages(id)
  }, [])

  if(!images) {
    return null
  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>{images.name}</Text>
      <FlatList data={images.photos} keyExtractor={(photo) => photo} renderItem={({ item }) => {
        return <Image source={{uri: item}} style={styles.image} />
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10
  },
  text : {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 15
  }
})

export default ResultsShowScreen