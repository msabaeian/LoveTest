/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar, Image, Dimensions, Keyboard , StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Platform, Alert, Share
} from 'react-native';
import Splash from './src/Components/Splash'
import FloatingHearts from 'react-native-floating-hearts'
import Icon from 'react-native-vector-icons/Ionicons'
import { EnterNamesMessage, AdmobUnitId , EnterNamesButton, EnterNamesTitle, GirlBackgroundColor, BoyBackgroundColor, ShareIconColor, GirlHint, BoyHint, InfoIconColor, InformationMessage, InformationTitle, InformationButton } from './src/Data'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { AdMobBanner } from 'react-native-admob'

export default class LoveTest extends Component {
  constructor() {
    super()
    this.state = {
      home: false,
      boyName: '',
      girlName: '',
      progress: 0,
      indeterminate: true,
      random: 0,
      endOfProgress: false
    }
    setTimeout(() => {
      this.setState({ home: true });
      clearInterval(this.intervalId);
    }, 2500);
  }

  render() {
    var images = [],
      imgWidth = 7,
      winWidth = Dimensions.get('window').width;
    for (var i = 0; i < Math.ceil(winWidth / imgWidth); i++) {
      images.push((
        <Image source={require('./src/images/HeartPattern4x3.png')} key={i} />
      ))
    }
    /* 
{
        images.map(function(img,i){
          return img;
        })
}
    */

    if (this.state.home) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} duration={600} >
          <StatusBar backgroundColor='transparent' translucent />
          <Animatable.View style={[styles.container, { left: 0 }]} ref='main'>
            <View style={styles.girl}>
              <TextInput
                style={styles.nameInput}
                onChangeText={(girlName) => this.setState({ girlName })}
                value={this.state.girlName}
                placeholder={GirlHint}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}
                blurOnSubmit
                placeholderTextColor='rgba(0,0,0,0.7)'
                onSubmitEditing={() => this.boyInput.focus()}
              />
              <Image source={require('./src/images/girl-512.png')} style={styles.sexImage} />


            </View>
            <View style={styles.boy}>
              <TextInput
                style={styles.nameInput}
                onChangeText={(boyName) => this.setState({ boyName })}
                value={this.state.boyName}
                placeholder={BoyHint}
                returnKeyType='go'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}
                blurOnSubmit
                placeholderTextColor='rgba(0,0,0,0.7)'
                ref={(input) => this.boyInput = input}
              />
              <Image source={require('./src/images/male3-512.png')} style={styles.sexImage} />
            </View>
            <TouchableWithoutFeedback onPress={() => this.showTest()}><Animatable.View animation="pulse" duration={600} easing="ease-out" style={styles.testBtn} iterationCount="infinite" ><Icon name="ios-heart" style={styles.testText} /></Animatable.View></TouchableWithoutFeedback>

          </Animatable.View>


          <Animatable.View style={[styles.container, { left: Dimensions.get('window').width }]} ref='test'>
            <TouchableOpacity onPress={() => this.showMain()} activeOpacity={0.5} style={{ position: 'absolute', left: 15, top: 20 }}><Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color="#000" size={28} /></TouchableOpacity>
            <Progress.Pie
              style={styles.progress}
              progress={this.state.progress}
              indeterminate={this.state.indeterminate}
              color='#c62828'
              size={160}
            />
            <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.sexBox}>
                <Icon name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'} color="#000" size={50} />
                <Text>{this.state.boyName}</Text>
              </View>
              <Animatable.View animation="pulse" duration={600} easing="ease-out" iterationCount="infinite" style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} ><Icon name="ios-heart" style={{ color: '#c62828', fontWeight: 'bold', fontSize: 28 }} /><Text style={{ color: '#c62828', fontWeight: 'bold', fontSize: 28 }}> {Math.floor((this.state.progress) * 100)}% </Text><Icon name="ios-heart" style={{ color: '#c62828', fontWeight: 'bold', fontSize: 28 }} /></Animatable.View>
              <View style={styles.sexBox}>
                <Icon name={Platform.OS === 'ios' ? 'ios-woman' : 'md-woman'} color="#000" size={50} />
                <Text>{this.state.girlName}</Text>
              </View>
            </View>

            <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' }}>
              <TouchableOpacity onPress={() => this._share()} activeOpacity={0.5}>
                <Animatable.View animation="flash" iterationCount="infinite" duration={1500} ref='icons'>
                  <Icon name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'} color={this.state.endOfProgress ? ShareIconColor : '#fff'} size={35} />
                </Animatable.View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert(InformationTitle, InformationMessage, [{ text: InformationButton }])} activeOpacity={0.5} style={{ marginLeft: 25 }}>
                <Animatable.View animation="flash" iterationCount="infinite" duration={1500} ref='icons'>
                  <Icon name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} color={this.state.endOfProgress ? InfoIconColor : '#fff'} size={35} />
                </Animatable.View>
              </TouchableOpacity>
            </View>

            <AdMobBanner
              bannerSize="banner"
              adUnitID={AdmobUnitId}
              testDeviceID="EMULATOR" />
              <View style={{position:'absolute',bottom:0}}>
                <Image source={require('./src/images/standing_hearts.png')} style={{width:Dimensions.get('window').width,height:120}} />
              </View>
              <View style={{position:'absolute',top:0,right:0}}>
                <Image source={require('./src/images/top_right_heart.png')} style={{width:Dimensions.get('window').width/1.5,height:100}} />
              </View>
            <FloatingHearts count={Math.floor((this.state.progress) * 30)} />
          </Animatable.View>

        </View>

      );
    }
    return <Splash />
  }



  showTest() {
    Keyboard.dismiss();
    if (this.state.boyName && this.state.girlName ) {
      this.refs.main.transitionTo({ left: -Dimensions.get('window').width });
      this.refs.test.transitionTo({ left: 0 });
      this.animate();
    } else {
      Alert.alert(EnterNamesTitle, EnterNamesMessage, [{ text: EnterNamesButton }]);
    }
  }

  showMain() {
    this.setState({ endOfProgress: false ,indeterminate:true })
    this.refs.main.transitionTo({ left: 0 });
    this.refs.test.transitionTo({ left: Dimensions.get('window').width });
  }

  animate() {
    let progress = 0;
    this.setState({ progress, random: Math.random() });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      this.interval = setInterval(() => {
        progress += Math.random() / 5;
        if (progress > this.state.random) {
          progress = this.state.random;
          this.setState({ progress, endOfProgress: true })

          clearInterval(this.interval)
        }
        this.setState({ progress });
      }, 500);
    }, 1800);
  }

  _share() {
    Share.share({
      message: `The percentage of ♥ between ${this.state.boyName} and ${this.state.girlName} is ${Math.floor((this.state.progress) * 100)}% , check out Love test on GooglePlay (http://someapplink.com) `,
      title: 'Share LOVE percentage'
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute'
  },
  girl: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GirlBackgroundColor,
    width: Dimensions.get('window').width
  },
  boy: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BoyBackgroundColor,
    width: Dimensions.get('window').width
  },
  nameInput: {
    height: 40,
    width: Dimensions.get('window').width / 1.7,
    color: '#000',
    borderRadius: 20,
    elevation: 2,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: '#fff',
    marginTop: 15
  },
  sexImage: {
    width: 160,
    height: 160,
    marginTop: 10
  },
  testText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  testBtn: {
    width: 60,
    backgroundColor: '#c62828',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 27,
    left: (Dimensions.get('window').width / 2) - 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sexBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

AppRegistry.registerComponent('LoveTest', () => LoveTest);
