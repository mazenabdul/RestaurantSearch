import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({searchTerm, onSearchChange, onSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name='search' />
      <TextInput 
        autoCapitalize="none"
        placeholder={'Search for a restaurant'} 
        style={styles.inputStyle} 
        value={searchTerm} 
        onChangeText={onSearchChange} 
        onEndEditing={onSubmit} />
    </View>
    
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 45,
    borderWidth:0.5,
    borderColor: 'black',
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 15
  },
  icon: {
    margin: 5,
    fontSize: 30
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  }
 
})

export default SearchBar