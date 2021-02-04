/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
      this.checkCred();
  }

  checkCred = async () => {
    const userCred = await AsyncStorage.getItem('userCred');
    this.props.navigation.navigate(userCred ? 'Home' : 'Login');
  }

  render(){
    return(
      <View style={styles.container}>
            <ActivityIndicator size="large"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:7
  },
});

export default SplashScreen;