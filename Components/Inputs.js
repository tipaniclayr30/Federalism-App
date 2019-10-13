import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native';

export const Input = (prop) => {
    return (
        <TextInput
        placeholder={prop.placeholder}
        secureTextEntry= {prop.secureTextEntry}
        style={styles.inputStyle}
        value={prop.value}
        onChangeText={prop.onChangeText}/>
    );
}


const styles = StyleSheet.create({
    inputStyle:{
        height: 30,
        fontSize:15,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width - 100,
        borderBottomColor: '#00FF42',
        borderBottomWidth: 2,
        marginBottom: '8%'
    },
});

