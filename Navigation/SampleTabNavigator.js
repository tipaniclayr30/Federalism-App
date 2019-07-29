import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Platform, Icons } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import ContactUsScreen from '../Screen/ContactUsScreen';

const HomeStack = createStackNavigator({
    ContactUsScreen: ContactUsScreen,
});

const ProfileStack = createStackNavigator({
    ProfileScreen: ProfileScreen,
});

export default createBottomTabNavigator(
    {
        Contact: HomeStack,
        Profile: ProfileStack,
    }, {
        initialRouteName: 'Profile',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Contact') {
                    iconName = Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle';
                } else if (routeName === 'Profile') {
                    iconName = Platform.OS === 'ios' ? 'ios-options' : 'md-options';
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);