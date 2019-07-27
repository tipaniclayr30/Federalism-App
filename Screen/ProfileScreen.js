import React from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = () => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}

export default ProfileScreen;