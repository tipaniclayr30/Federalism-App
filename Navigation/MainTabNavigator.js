import { createBottomTabNavigator } from 'react-navigation';
import { Platform, Icons } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons' 
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';

export default createBottomTabNavigator(
    {
        HomeScreen: HomeScreen,
        ProfileScreen: ProfileScreen,
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'HomeScreen') {
                    iconName = Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle';
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'ProfileScreen') {
                    iconName = Platform.OS === 'ios' ? 'ios-options' : 'md-options';
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);