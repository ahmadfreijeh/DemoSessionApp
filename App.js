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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import SplashScreen from './src/screens/SplashScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.initDataBase();
  }

  initDataBase = async () => {
    try {
      const users = await AsyncStorage.getItem('users');
      if (users !== null) {
        await AsyncStorage.setItem('user',[]);
      }

      const tasks = await AsyncStorage.getItem('tasks');
      if (tasks !== null) {
        await AsyncStorage.setItem('tasks',[]);
      }
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  }

  
  render(){
    const Stack = createStackNavigator();
    return(
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;