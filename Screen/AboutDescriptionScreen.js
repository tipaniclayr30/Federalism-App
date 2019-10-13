import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ImageButton } from '../Components/Buttons';
import Layout from '../Constant/Layout';
import Colors from '../Constant/Colors';

data = [
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
    { image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968' },
]
class AboutDescriptionScreen extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <View style={{ justifyContent: 'center' }} >
                        <Image style={styles.imageLogo} source={require('../assets/images/kkpp_logo.png')} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{color: 'black'}}>Kilusan ng mga kabataan</Text>
                        <Text style={{color: 'black'}} >para sa Pagbabago</Text>
                    </View>
                </View>

                <View style={styles.secondContainer}>
                    <ImageButton data={data} />
                </View>
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
        height: Layout.window.height / 5,
        width: Layout.window.width,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondContainer: {
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