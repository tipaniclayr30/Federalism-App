import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Layout from '../Constant/Layout';
import Colors from '../Constant/Colors';
import { ImageSwipper } from '../Components/ImageViewer';
import { fetchListofAbout } from '../Fetchs/fetchListofAbout';
import { Item } from 'native-base';

data = [
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
]
class AboutDescriptionScreen extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            height: Layout.window.height / 16,

        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false
        };
    }

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                const { navigation } = this.props;
                const i = navigation.getParam('index', 'no value');
                this.setState({ isLoading: true })
                fetchListofAbout().then(response => {
                    console.log(response[i])
                    this.setState({ data: response[i], isLoading: false })
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
                {this.state.isLoading ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size='large' color={Colors.primary} />
                    </View>
                    :
                    <View>
                        <View style={styles.firstContainer}>
                            {this.state.data.images === undefined ? null :
                                <ImageSwipper images={this.state.data.images} />
                            }
                        </View>
                        <View style={{ backgroundColor: 'white', position: "absolute", top: Layout.window.height * .37, width: Layout.window.width, height: Layout.window.height, alignItems: 'center', borderRadius: 15 }}>
                            <View style={{ width: Layout.window.width * .80, marginTop: '3%' }}>
                                <Text style={{ color: Colors.textColor, marginBottom: '3%', alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{this.state.data.title}</Text>
                                <Text style={{ alignSelf: 'center', textAlign: 'center' }}>{this.state.data.description}</Text>
                            </View>
                        </View>
                    </View>
                }


            </View>
        );
    }
}

export default AboutDescriptionScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    firstContainer: {
        height: Layout.window.height * .40,
        width: Layout.window.width,
    },
    secondContainer: {
        flex: 1,
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