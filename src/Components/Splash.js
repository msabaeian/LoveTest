//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,StatusBar, Image, Dimensions } from 'react-native';
import FloatingHearts from 'react-native-floating-hearts'
import {AppName , AppIcon} from './../Data'
// create a component
class Splash extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
        setTimeout(() => {
            this.setState({count:1})
        },150);
        setTimeout(() => {
            this.setState({count:2})
        },200);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FloatingHearts count={this.state.count} />
                <StatusBar backgroundColor='transparent' translucent />
                <View style={styles.logoContainer}>
                    <Image source={require('./../images/icon.png')} style={styles.logo} />
                    <Text style={styles.appName}>{AppName}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200
    },
    appName: {
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 28,
        color: '#000'
    },
    pattern: {
        opacity: 0.7
    }
});

//make this component available to the app
export default Splash;
