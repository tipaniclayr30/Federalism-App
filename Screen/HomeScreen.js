import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Layout from '../Constant/Layout'
import { ArticleCard } from '../Components/Buttons';
import { fetchListofArticle } from '../Fetchs/fetchListofArticle';

class HomeScreen extends React.Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
        },
        title: 'Home',

    };

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

                fetchListofArticle()
                .then(response => {
                    console.log(response)
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
            <View style={{ flex: 1 }}>
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

                <View style={{flex:1}}>
                    <ArticleCard data={this.state.data}/>
                </View>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    logoContainer: {
        // backgroundColor: 'red',
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