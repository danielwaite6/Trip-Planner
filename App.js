import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/TripsScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';



const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  TripsScreen
},
{
  initialRouteName: 'TripsScreen',
})


export default createAppContainer(AppNavigator) ;