import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

  //State to store user search terms
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, results, errors] = useResults()

  //Function to sort the results according to price 
  const filterPrice = (price) => {
    //price === '$' || price === '$$' || price === '$$$'
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
        <View style={{flex:1}}>
            <SearchBar onSubmit={() => searchApi(searchTerm)} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {errors ? <Text>{errors}</Text>:null}
          <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList header="Bang for your Buck!" results={filterPrice('$')} />
            <ResultsList header="Bit Pricier" results={filterPrice('$$')} />
            <ResultsList header="Big Spender!" results={filterPrice('$$$')} />
          </ScrollView>
        </View>
      
  )
}

const styles = StyleSheet.create({})

export default SearchScreen