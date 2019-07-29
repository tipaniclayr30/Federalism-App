import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

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
       color:'white',
    },
    textButtonStyle:{
        alignItems:'center',
        backgroundColor:'transparent'
    },
    textButtonTextStyle:{
        color:'#00FF42'

    }
});