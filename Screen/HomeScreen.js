import React from 'react';
import {View,Text} from 'react-native';

class HomeScreen extends React.Component {

    static navigationOptions = () => {
        return {
            header: null,
          };
    }

    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

export default HomeScreen;