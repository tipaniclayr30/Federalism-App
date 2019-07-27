import React from 'react';
import { View, Text } from 'react-native';

class AboutScreen extends React.Component {
    static navigationOptions = () => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Text>About Screen</Text>
            </View>
        );
    }
}

export default AboutScreen;