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
import firebase from 'firebase';
// You can import from local files

// or any pure javascript modules available in npm

export default class ForgotpasswordScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:''
        }

        
    }
    render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
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
      <TouchableOpacity 
    style = {styles.login} 
    onPress = {() => {
      firebase.auth().sendPasswordResetEmail(this.state.emailId)
  .then(() => {
    // Password reset email sent!
    alert('Reset email sent')
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
    }}
    >
    <Text style = {styles.logintext}>Logout</Text>
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
