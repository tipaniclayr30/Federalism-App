import React from 'react';
import { View, Text } from 'react-native';

class ContactUsScreen extends React.Component {
    static navigationOptions = () => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Text>Contact Us</Text>
            </View>
        );
    }
}

export default ContactUsScreen;