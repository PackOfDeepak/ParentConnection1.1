import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import MyStack from './navigation';
import firebase from 'firebase';
// You can import from local files

// or any pure javascript modules available in npm

export default class LoadingScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:''
        }

        
    }
    login =() => {
      firebase.auth().signInWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in
    alert('Welcome Back')
    this.props.navigation.navigate('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
    }
    render(){
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/Maria_OSHO-removebg-preview.png')}
      />
      <Text style={styles.heading}>Log in</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => Alert.alert('Work in Progress')}>
        <AntDesign
          style={{ marginLeft: '22%', marginTop: '3%' }}
          name="google"
          size={16}
          color="white"
        />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textinput}
        placeholder="johndoe@gmail.com"
        keyboardType="email-address"
        onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
        }}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        onChangeText={(text)=>{
            this.setState({
              password: text
            })
        }}
      />
      <TouchableOpacity onPress={() => this.login()} style = {styles.login}>
      <Text style = {styles.logintext}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
      <Text style = {styles.signup}> Dont have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
      <Text style = {styles.signup}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
    
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    alignSelf: 'center',
    width: '40%',
    height: '40%',
  },
  heading: {
    color: 'white',
    marginLeft: '10%',
    fontWeight: 'bold',
    fontSize: 25,
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,
    
    marginTop: '5%',
    flexDirection: 'row',
  },
  googleText: {
    color: 'white',
    marginLeft: '3%',
    marginTop: '3%',
    fontFamily: 'Arial',
    
  },
  text: {
    color: 'white',
    marginLeft: '10%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  textinput: {
    backgroundColor: '#444444',
    width: '81%',
    height: '6%',
    borderRadius: 10,
    
    marginTop: '3%',
    alignSelf: 'center',
    padding: '3%',
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#0099FF',
    width: '81%',
    height: '8%',
    borderRadius: 10,
    
    marginTop: '5%',
    flexDirection: 'row',
  },
  logintext: {
    color: 'white',
    marginLeft: '40%',
    marginTop: '5%',
    fontFamily: 'Arial',
  },
  signup: {
    color: 'white',
    marginLeft: '30%',
    marginTop: '3%',
    fontFamily: 'Arial',
    fontSize: 10
  }
});
