import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'
import SingleItem from '../components/SingleItem'

const ResultsList = ({header, results, navigation}) => {
  if(!results.length){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <FlatList 
        keyExtractor={(result)=> result.id} 
        renderItem={({item}) => {
          return (
          <TouchableOpacity onPress={() => navigation.navigate('Results', {id: item.id})}>
            <SingleItem result={item} />
          </TouchableOpacity>
            ) 
          }} 
        horizontal={true} 
        data={results}
        showsHorizontalScrollIndicator={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15
  },
  container: {
    marginBottom: 20
  }
})

export default withNavigation(ResultsList)