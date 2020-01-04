import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { ImageButton } from '../Components/Buttons';
import Layout from '../Constant/Layout';
import Colors from '../Constant/Colors';
import { fetchListofAbout } from '../Fetchs/fetchListofAbout';

data = [
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
]


class AboutScreen extends React.Component {
    static navigationOptions = () => {
        return {
            header: null,

        };
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({ isLoading: true })
                fetchListofAbout().then(response => {
                    this.setState({ data: response, isLoading: false })
                });
            }
        );

    }
    componentWillUnmount() {
        this.willFocusSubscription.remove();
    }
    render() {
        console.log(this.state.data)
        return (
            <View style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <View style={{ justifyContent: 'center' }} >
                        <Image style={styles.imageLogo} source={{ uri: 'https://federalism-app.000webhostapp.com/Photos/kkpp_logo.png' }} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>Kilusan ng mga kabataan</Text>
                        <Text style={{ color: 'black' }} >para sa Pagbabago</Text>
                    </View>
                </View>
                {this.state.isLoading ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size='large' color={Colors.primary} />
                    </View>
                    :
                    <View style={styles.secondContainer}>
                        <ImageButton data={this.state.data} navigation={this.props.navigation} />
                    </View>}
            </View>
        );
    }
}

export default AboutScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    firstContainer: {
        height: Layout.window.height / 5,
        width: Layout.window.width,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondContainer: {
        flex: 1,
        // height: Layout.window.height,
        // width: Layout.window.width,
        marginTop: '5%',
        alignItems: 'center',
    },
    imageLogo: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        marginTop: '3%',
        marginLeft: '7%'
    }, tabContainer: {
        marginTop: '4%'
    },

})