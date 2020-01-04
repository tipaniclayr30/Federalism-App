import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Constant/Colors';
import Layout from '../Constant/Layout';


class ContactUsScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
        },
        title: 'Contact',
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: '#fff', margin: '3%', elevation: 2, shadowOpacity: 2,
                }}>
                    <View style={{ margin: '5%', height: '3%', flexDirection: 'row', alignItems: 'center' }} >
                        <Icon color={Colors.primary} name='account' size={22} />
                        <Text style={{ fontSize: 18, marginLeft: 5, color: 'black' }}> Johannah Jane Doromal</Text>
                    </View>

                    <View style={{ margin: '5%', height: '3%', flexDirection: 'row', alignItems: 'center' }} >
                        <Icon color={Colors.primary} name='phone' size={22} />
                        <Text style={{ fontSize: 18, marginLeft: 5, color: 'black' }}> +63 923 4009 234</Text>
                    </View>

                    <View style={{ margin: '5%', height: '3%', flexDirection: 'row', alignItems: 'center' }} >
                        <Icon color={Colors.primary} name='email' size={22} />
                        <Text style={{ fontSize: 18, marginLeft: 5, color: 'black' }}> johannahdoromal@gmail.com</Text>
                    </View>
                </View>

                <Text style={{ margin: '3%', fontSize: 20, color: 'black', fontWeight: 'bold' }}>Social Media Links</Text>
                <View style={{
                    backgroundColor: '#fff', margin: '3%', elevation: 2, shadowOpacity: 2,
                }}>
                    <View style={{ margin: '5%', height: '3%', flexDirection: 'row', alignItems: 'center' }} >
                        <Icon color={'#38539B'} name='facebook-box' size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 7, color: '#0099FF', textDecorationLine: 'underline', }} onPress={() => Linking.openURL('https://www.facebook.com/Kilusan-ng-mga-Kabataan-Para-sa-Pederalismo-1992600477708018/')}>Kilusan ng mga Kabataan Para sa Pederalismo </Text>
                    </View>
                    <View style={{ margin: '5%', height: '3%', flexDirection: 'row', alignItems: 'center' }} >
                        <Icon color={'#CF493B'} name='gmail' size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 7, color: 'black' }} >federalismkkpp1@gmail.com</Text>
                    </View>
                </View>

                <Text style={{ position: 'absolute', bottom: 100, alignSelf: 'center' }}>Partnership with</Text>
                <View style={styles.logoContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={require('../assets/images/dabaw_logo.jpg')} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={require('../assets/images/dilg_logo.jpg')} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={require('../assets/images/minda_logo.jpg')} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={require('../assets/images/pmcd_logo.jpg')} />
                    </View>
                </View>
            </View >
        );
    }
}

export default ContactUsScreen;

const styles = StyleSheet.create({
    logoContainer: {
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        height: '15%',
        width: Layout.window.width,
        justifyContent: 'center'
    },
    imageContainer: {
        height: 60,
        width: 60,
        overflow: 'hidden',
        marginRight: '2%'
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null
    }
})