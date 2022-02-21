import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import MyStack from './navigation';
import firebase from 'firebase';
import db from './config'
import { render } from 'react-dom';
// You can import from local files

// or any pure javascript modules available in npm

export default class UpcomingEventsScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            events:[]
        }

        
    }
   getData= async ()=>{
     var response = await db.collection('ideas').get()
     response.docs.map((d)=>{
       var tempArray = this.state.events
       tempArray.push(d.data())
      this.setState({ events:tempArray})


     })
   }
   componentDidMount(){
     this.getData()
   }
  
    render(){
      if(this.state.events.length === 0){
         return(
           <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
             <Text>Your Upcoming Events will show up here! Add some now!</Text>
           </View>
         )
      }
      else{
   
      
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Upcoming Events</Text>
      <ScrollView>

       {this.state.events.map((a)=>{
         return(
           <View style = {{alignSelf: 'center',
           backgroundColor: '#33bbff',
           width: '81%',
           height: '40%',
           borderRadius: 10,
           
           marginTop: '2%',
           marginBottom:'1%'}}>
             <View style = {{flexDirection:'row', backgroundColor:'#e68a00', borderRadius:'10%'}}>
             <Text style = {{color: 'black',
    marginLeft: '8%',
    marginTop: '5%',
    marginBottom:'2%',
    fontFamily: 'Arial',
    fontSize:'17%',
    fontWeight:'bold'}}>{a.title}</Text>
    <Text style = {{color: 'black',
    marginLeft: '10%',
    marginTop: '6%',
    fontFamily: 'Arial',
    fontSize:'15%',
    }}>{a.time}</Text>
             </View> 
             <View>
               <Text style = {{color: 'black',
    marginLeft: '9%',
    marginTop: '2%',
    fontFamily: 'Arial',
    fontSize:'20%',
    }}>Location: {a.location}</Text>
               <Text style = {{color: 'black',
    marginLeft: '9%',
    marginTop: '5%',
    fontFamily: 'Arial',
    fontSize:'15%',
    }}>{a.notes}</Text>
             </View>

           </View>
         )
       })}

      </ScrollView>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AddEvents')} style = {styles.login}>
      <Text style = {styles.logintext}>Add Event</Text>
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
    marginTop:'10%',
    marginBottom:'2%'
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
    marginBottom:'5%'
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
