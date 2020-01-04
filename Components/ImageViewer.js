import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Layout from '../Constant/Layout';
import Routes from '../Constant/Routes';
import Swiper from 'react-native-swiper'
import Colors from '../Constant/Colors';

export const ImageSwipper = (prop) => {
    console.log('here', prop.images)
    return (
        // <Text>HA</Text>
        <Swiper style={styles.wrapper} showsButtons={false}>
            {
                prop.images.map((element, index) => {
                    return (
                        <View style={styles.slide1} key={index}>
                            <Image style={styles.imageStyle} source={{ uri: element }} key={index} />
                        </View>
                    )
                })
            }

        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        // height: null,
        // width: Layout.window.width,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    }
});