import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Layout from '../Constant/Layout';
import Routes from '../Constant/Routes';

export const PrimaryButton = (prop) => {
    return (
        <TouchableOpacity style={styles.primaryBtnStyle} onPress={prop.onPress}>
            <Text style={styles.primaryTextStyle} >{prop.label}</Text>
        </TouchableOpacity>
    );
}

export const TextButton = (prop) => {
    return (
        <TouchableOpacity style={styles.textButtonStyle} onPress={prop.onPress}>
            <Text style={styles.textButtonTextStyle} >{prop.label}</Text>
        </TouchableOpacity>
    );
}

export const ImageButton = (prop) => {
    console.log(prop.data)
    return (
        // <FlatList
        //     showsHorizontalScrollIndicator={false}
        //     data={prop.data}
        //     renderItem={({ item }) =>
        <TouchableOpacity style={styles.imageButtonContainer} onPress={() => prop.navigation.navigate((Routes.aboutDescriptionScreen))}>
            <ImageBackground style={styles.GridViewImage} source={{ uri: data[0].image }}>
                <View style={styles.GridViewInfo}>
                    <Text>WOO</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
        // }
        //     keyExtractor={(item, index) => index.toString()}
        //     onEndReached={prop.onEndReached}
        //     onEndReachedThreshold={0.2}
        //     ListFooterComponent={prop.ListFooterComponent}
        // />
    );
}

const styles = StyleSheet.create({
    primaryBtnStyle: {
        width: Dimensions.get('window').width - 100,
        height: '10%',
        backgroundColor: '#00FF42',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%'
    },
    primaryTextStyle: {
        color: 'white',
    },
    textButtonStyle: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    textButtonTextStyle: {
        color: '#00FF42'

    },
    imageButtonContainer: {
        // flexShrink: 1,
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: Layout.window.height / 4.2,
        backgroundColor: 'transparent',
        paddingBottom: '1.5%',
    },

    GridViewInfo: {
        height: 60,
        width: Layout.window.width - 10,
        bottom: -0.3,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        position: 'absolute',
    },

    GridViewImage: {
        height: Layout.window.height / 4.2,
        width: Layout.window.width - 30,
    },
});