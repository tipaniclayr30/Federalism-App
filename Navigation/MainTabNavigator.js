import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Platform, Icons } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import AboutScreen from '../Screen/AboutScreen';
import ContactScreen from '../Screen/ContactUsScreen';
import AboutDescriptionScreen from '../Screen/AboutDescriptionScreen';

import Colors from '../Constant/Colors';

const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
});

const ProfileStack = createStackNavigator({
        ProfileScreen: ProfileScreen,
});

const AboutStack = createStackNavigator({
    AboutScreen: AboutScreen,
    AboutDescriptionScreen: AboutDescriptionScreen,
});
AboutStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        return {
            tabBarVisible: false
        };
    }

    return {
        tabBarVisible,
    };
};

const ContactStack = createStackNavigator({
    ContactScreen: ContactScreen,
});


export default createBottomTabNavigator(
    {
        Home: HomeStack,
        About: AboutStack,
        Contact: ContactStack,
        Profile: ProfileStack,

    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = Platform.OS === 'ios'
                        ? `ios-home${focused ? '' : '-outline'}`
                        : 'md-home';
                } else if (routeName === 'About') {
                    iconName = Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle';
                }
                else if (routeName === 'Contact') {
                    iconName = Platform.OS === 'ios' ? 'ios-contact' : 'md-contact';
                }
                else if (routeName === 'Profile') {
                    iconName = Platform.OS === 'ios' ? 'ios-person' : 'md-person';
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.primary,
            inactiveTintColor: 'black',
        },
    }
);