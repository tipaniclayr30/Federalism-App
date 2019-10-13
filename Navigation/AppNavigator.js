import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../Screen/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

const LoginStack = createStackNavigator({
  LoginScreen: LoginScreen,
},{
  initialRouteName: 'LoginScreen'
})

export default createAppContainer(createSwitchNavigator({
  Login: LoginStack,
  Main: MainTabNavigator,
},{
  initialRouteName: 'Main'
}));