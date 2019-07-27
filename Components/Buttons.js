import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export const PrimaryButton = (prop) => {
    return (
        <TouchableOpacity style={styles.primaryBtnStyle} onPress={prop.onPress}>
            <Text style={styles.primaryTextStyle} >{prop.label}</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    primaryBtnStyle: {
        width: Dimensions.get('window').width - 100,
        height: '13%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    primaryTextStyle: {
       color:'white',
    }
});