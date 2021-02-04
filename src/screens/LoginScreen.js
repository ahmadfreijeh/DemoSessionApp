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
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }


  login = async () => {
    const usersTable = await AsyncStorage.getItem('users');
    const users = JSON.parse(usersTable);
    
    let userCred = {
      email:this.state.email,
      password:this.state.password,
    }
    try {
      users.push(JSON.stringify(userCred));
      users.forEach(async (user) => {
        if(userCred.email === user.email){
          return;
        }else{
          await AsyncStorage.setItem('users',JSON.stringify(users));
          this.props.navigation.navigate('Home', {userCred:userCred});
        }
      })
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder="Email" onChangeText={(val) => this.setState({email:val})}/>
        <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(val) => this.setState({password:val})}/>
        <Button title="Login" onPress={() => this.login()}></Button>
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

export default LoginScreen;