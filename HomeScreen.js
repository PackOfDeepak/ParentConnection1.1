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
import firebase from 'firebase';
// You can import from local files
import MyStack from './navigation'
// or any pure javascript modules available in npm

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }


  }
  getData = async () => {
    var response = await db.collection('activities').get()
    response.docs.map((a) => {
      var tempArray = this.state.activities
      tempArray.push(a.data())
      this.setState({ activities: tempArray })

      console.log(a.data())
    })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    if (this.state.activities.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>Home</Text>
          <Text style={{ color: 'white', marginTop: '20%', marginLeft: '20%' }}>Your Upcoming Activities will show up here! Add some now!</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddActivities')} style={styles.login}>
            <Text style={styles.logintext}>Add Activities</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (

        <View style={styles.container}>
          <Text style={styles.heading}>Home</Text>
          <ScrollView>

            {this.state.activities.map((d) => {
              return (
                <View style={{
                  alignSelf: 'center',
                  backgroundColor: '#33bbff',
                  width: '81%',
                  height: '40%',
                  borderRadius: 10,

                  marginTop: '2%',
                  marginBottom: '1%'
                }}>
                  <View style={{ flexDirection: 'row', backgroundColor: '#e68a00', borderRadius: '10%' }}>
                    <Text style={{
                      color: 'black',
                      marginLeft: '8%',
                      marginTop: '5%',
                      marginBottom: '2%',
                      fontFamily: 'Arial',
                      fontSize: 17,
                      fontWeight: 'bold'
                    }}>{d.title}</Text>
                    <Text style={{
                      color: 'black',
                      marginLeft: '10%',
                      marginTop: '6%',
                      fontFamily: 'Arial',
                      fontSize: 15,
                    }}>{d.time}</Text>
                  </View>
                  <View>
                    <Text style={{
                      color: 'black',
                      marginLeft: '9%',
                      marginTop: '2%',
                      fontFamily: 'Arial',
                      fontSize: 20,
                    }}>Location: {d.location}</Text>
                    <Text style={{
                      color: 'black',
                      marginLeft: '9%',
                      marginTop: '5%',
                      fontFamily: 'Arial',
                      fontSize: 15,
                    }}>{d.notes}</Text>
                  </View>

                </View>
              )
            })}

          </ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddActivities')} style={styles.login}>
            <Text style={styles.logintext}>Add Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              firebase.auth().signOut().then(() => {
                this.props.navigation.replace('Login')
              }).catch((error) => {
                // An error happened.
                alert('error happened')
              });
            }}
          >
            <Text style={styles.logintext}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    marginTop: '10%'
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
