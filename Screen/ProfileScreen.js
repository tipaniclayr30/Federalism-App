import React from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Tab, Tabs } from 'native-base';
import { PrimaryButton, TextButton } from '../Components/Buttons';
import { Input } from '../Components/Inputs';
import { fetchLogin } from '../Fetchs/fetchLogin'
import { postSignup } from '../Fetchs/postSignup';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            labelSwitch: 'Switch 0',
        };
    }
    componentDidMount = () => {

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
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00FF42' }} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                        <Tab heading={<View style={{ backgroundColor: this.state.currentTab == 0 ? '#00FF42' : 'white' }}>
                            <Text style={{ color: this.state.currentTab == 0 ? 'white' : 'black' }}>Login</Text>
                        </View>}>
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
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        };
    }
    onPressLogin() {

        if (!(this.state.username == '' || this.state.password == '')) {
            this.setState({ isLoading: true })
            fetchLogin(this.state.username, this.state.password).then(response => {
                //response == 'true'?alert('Success'):alert('Failed')
                this.setState({ isLoading: false })
                response == true ?
                    Alert.alert('Success', 'Login Successfully!', [{ text: 'OK' },], { cancelable: false })
                    :
                    Alert.alert('Failed to Login', 'Incorrect email or password..', [{ text: 'OK' },], { cancelable: false })
            }
            );
        }
    }
    render() {
        const { onSwitch, label } = this.props;
        if (this.state.isLoading == true) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }

        return (
            <View style={styles.mainTabContainer}>
                <Input placeholder='Email' secureTextEntry={false}
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                />
                <Input placeholder='Password' secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <PrimaryButton label={'Login'} onPress={() => this.onPressLogin()} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Don't have an account?  </Text>
                    <TextButton label={'Sign up'} />
                </View>
            </View>
        )

    }

}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm_password: '',
            password: '',
            name: '',
            email: '',
        };
    }
    onPressLogin() {
        this.setState({
            currentTab: 0,
           
        })
    }

    onPressSignUp() {
        this.setState({ isLoading: true })
        if (this.state.email === '' || this.state.name === '' || this.state.password === '' || this.state.confirm_password === '') {
            Alert.alert(
                'Fill in all fields',
                'Makes sure to fill in all fields',
                [
                    { text: 'OK' },
                ],
                { cancelable: false },
            )
        } else {
            if (this.state.password === this.state.confirm_password) {
                postSignup('s', this.state.password, this.state.email, this.state.name, 's');
                Alert.alert(
                    'Success',
                    'Signup Successfully!',
                    [
                        { text: 'OK' },
                    ],
                    { cancelable: false },
                )
            } else {
                Alert.alert(
                    'Mismatched',
                    'The password does not matched...',
                    [
                        { text: 'OK' },
                    ],
                    { cancelable: false },
                )
            }
        }
    }
    render() {
        return (
            <View style={styles.mainTabContainer}>
                <Input placeholder='Fullname *' secureTextEntry={false} onChangeText={name => this.setState({ name })} />
                <Input placeholder='Email *' secureTextEntry={false} onChangeText={email => this.setState({ email })} />
                <Input placeholder='Password *' secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                <Input placeholder='Confirm Password *' secureTextEntry={true} onChangeText={confirm_password => this.setState({ confirm_password })} />
                <PrimaryButton label={"Signup"} onPress={() => this.onPressSignUp()} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Don't have an account?  </Text>
                    <TextButton label={'Login'} onPress={() => this.onPressLogin()} />
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
