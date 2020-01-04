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
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={prop.data}
            renderItem={({ item, index }) =>
                <TouchableOpacity style={styles.imageButtonContainer} onPress={() => prop.navigation.navigate((Routes.aboutDescriptionScreen), { index: index })}>
                    <ImageBackground style={styles.GridViewImage} source={{ uri: item.images[0] }}>
                        <View style={styles.GridViewInfo}>
                            <Text style={styles.imageTitle}>{item.title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            }
            keyExtractor={(item, index) => index.toString()}
        // onEndReached={prop.onEndReached}
        // onEndReachedThreshold={0.2}
        // ListFooterComponent={prop.ListFooterComponent}
        />
    );
}

export const ArticleCard = (prop) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={prop.data}
            renderItem={({ item, index }) =>
                // <TouchableOpacity style={} onPress={() => prop.navigation.navigate((Routes.aboutDescriptionScreen), { index: index })}>
                //     <ImageBackground style={styles.articleViewImage} source={{ uri: item.images[0] }}>
                        <View style={styles.articleContainer}>
                            
                            <Text style={styles.articleTitle}>{item.title}</Text>
                        </View>
                        
                //     </ImageBackground>
                // </TouchableOpacity>
            }
            keyExtractor={(item, index) => index.toString()}
        // onEndReached={prop.onEndReached}
        // onEndReachedThreshold={0.2}
        // ListFooterComponent={prop.ListFooterComponent}
        />
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
        // paddingBottom: '1.5%',
        marginBottom: '2%'
    },

    GridViewInfo: {
        alignItems: 'center',
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
    imageTitle: {
        alignItems: 'center',
        width: Layout.window.width - 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    articleContainer: {
        // flexShrink: 1,
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: Layout.window.height / 4.2,
        borderRadius: 15,
        backgroundColor: 'transparent',
        // paddingBottom: '1.5%',
        marginBottom: '2%'
    },

    articleViewInfo: {
        flex:1,
        alignItems: 'center',
        height: 60,
        width: Layout.window.width - 10,
        bottom: -0.3,
        justifyContent: 'center',
        backgroundColor: 'green',
        position: 'absolute',
    },

    articleViewImage: {
        height: Layout.window.height / 4.2,
        width: Layout.window.width - 30,
    },
    articleTitle: {
        alignItems: 'center',
        width: Layout.window.width - 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
});