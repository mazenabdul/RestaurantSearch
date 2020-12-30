import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen
},

{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
    cardStyle: {backgroundColor: '#FFF'}
  }
})

export default createAppContainer(navigator)