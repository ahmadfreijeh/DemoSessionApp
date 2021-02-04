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
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
class HomeScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:"No Email",
    }
  }

  componentDidMount(){
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userCred');
      if (value !== null) {
        let userCred = JSON.parse(value);
        this.setState({
          email:userCred.email
        })
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  logout = async () => {
    try {
      await AsyncStorage.removeItem('userCred');
      this.props.navigation.navigate('Login');
    } catch (error) {
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.email}</Text>
        <Button title="Logout" onPress={() => this.logout()}></Button>
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

export default HomeScreen;