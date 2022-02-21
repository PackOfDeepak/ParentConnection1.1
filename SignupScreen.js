import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase'
// You can import from local files
import db from './config'
// or any pure javascript modules available in npm

export default class SignupScreen extends React.Component {
  signup = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...

    db.collection('user').add({
      email: this.state.emailId,
      password: this.state.password, 
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city
    })



    alert('User Created')
    this.props.navigation.replace('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
  }
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:'',
            firstName:'',
            lastName:'',
            country:'',
            state:'',
            city:''
        }

        
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          this.props.navigation.replace('BottomTab')
        } else {
          this.props.navigation.replace('Login')
        }
      });
    }
    render(){
  return (
      <View style = {styles.container}>
        
        <Text>Loading</Text>
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
    fontSize: 10,
    marginBottom:10
    
  }
});
