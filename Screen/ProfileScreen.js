import React from 'react';
import { View, Text, Image, StyleSheet, TextInput,Alert } from 'react-native';
import { Tab, Tabs } from 'native-base';
import { PrimaryButton, TextButton } from '../Components/Buttons';
import { Input } from '../Components/Inputs';


class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTab: 0, labelSwitch: 'Switch 0' };

    }

    componentDidMount = () => {

    }
    static navigationOptions = () => {
        return {
            header: null,

        };
    }

    onSwitch = () => {
        this.props.navigation.navigate((this.state.labelSwitch == 'Switch 0' ? 'Sample' : 'Main'));
        this.state.labelSwitch == 'Switch 0' ? this.setState({labelSwitch:'Switch 1'}) : this.setState({labelSwitch : 'Switch 0'})
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.imageLogo} source={require('../assets/images/kkpp_logo.png')} />
                <View style={styles.tabContainer}>
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00FF42' }} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                        <Tab heading={<View style={{ backgroundColor: this.state.currentTab == 0 ? '#00FF42' : 'white' }}>
                            <Text style={{ color: this.state.currentTab == 0 ? 'white' : 'black' }}>Login</Text>
                        </View>}>
                            <PrimaryButton label={this.state.labelSwitch} onPress={this.onSwitch} />

                            <Login label={this.state.labelSwitch} onPress={() => this.onSwitch} navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={<View style={{ backgroundColor: this.state.currentTab == 1 ? '#00FF42' : 'white' }}>
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
        const { onSwitch, label } = this.props;
        return (
            <View style={styles.mainTabContainer}>
                <Input placeholder='Email' secureTextEntry={false} />
                <Input placeholder='Password' secureTextEntry={true} />
                <PrimaryButton label={label} onPress={() => onSwitch} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Don't have an account?  </Text>
                    <TextButton label={'Sign up'} />
                </View>
            </View>
        )

    }

}

class Signup extends React.Component {
    render() {
        return (
            <View style={styles.mainTabContainer}>
                <Input placeholder='Fullname' secureTextEntry={false} />
                <Input placeholder='Email' secureTextEntry={false} />
                <Input placeholder='Password' secureTextEntry={true} />
                <Input placeholder='Confirm Password' secureTextEntry={true} />
                <PrimaryButton label={"Signup"} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Don't have an account?  </Text>
                    <TextButton label={'Login'} />
                </View>
            </View>
        )

    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    imageLogo: {
        resizeMode: 'contain',
        width: '30%',
        height: '20%',
        marginTop: '3%'
    }, tabContainer: {
        marginTop: '4%'
    }, mainTabContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '8%'
    }

})
