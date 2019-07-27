import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Tab, Tabs } from 'native-base';
import {PrimaryButton} from '../Components/Buttons';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTab: 0 };

    }
    static navigationOptions = () => {
        return {
            header: null,

        };
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.imageLogo} source={require('../assets/images/kkpp_logo.png')} />
                <View style={styles.tabContainer}>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:'green'}} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                        <Tab heading={<View style={{ backgroundColor: this.state.currentTab == 0 ? 'green' : 'white' }}>
                            <Text style={{ color: this.state.currentTab == 0 ? 'white' : 'black' }}>Login</Text>
                        </View>}>
                            <Login />
                        </Tab>
                        <Tab heading={<View style={{ backgroundColor: this.state.currentTab == 1 ? 'green' : 'white' }}>
                            <Text style={{ color: this.state.currentTab == 1 ? 'white' : 'black' }}>Signup</Text>
                        </View>}>
                            <Signup />
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
            <View style={styles.mainTabContainer}>
                <Text>Hi</Text>
                <PrimaryButton label={"Login"}/>
            </View>
        )

    }

}

class Signup extends React.Component {
    render() {
        return (
            <View style={styles.mainTabContainer}>
                <Text>Hi</Text>
                <PrimaryButton/>
            </View>
        )

    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    }, imageLogo: {
        width: '30%',
        height: '20%',
        marginTop: '5%'
    }, tabContainer: {
        marginTop: '7%'
    },mainTabContainer:{
        flex: 1,
        alignItems: 'center',
        marginTop:'20%'
    }

})
