import React, { Component } from 'react';
import About from './AboutComponent';
import ContactUs from './ContactComponent';
import ContactDetail from './ContactDetail'
import { Contact } from '../shared/contact';
import { View, Platform} from 'react-native';
import {  createDrawerNavigator } from '@react-navigation/drawer';
import{createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'react-native-elements';


const AboutNavigator = createStackNavigator({
    About: { screen: About },
    Aboutdetail: {screen: AboutDetail}
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })
});

const MainNavigator = createDrawerNavigator({
    About: 
      { screen: AboutNavigator,
        navigationOptions: {
          title: 'About',
          drawerLabel: 'About'
        }
      },
    ContactUs: 
      { screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact'
        }, 
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

const ContactNavigator = createStackNavigator({
  Contact:{screen: ContactUs},
  Contactdetail: {screen: ContactDetail},
 

},{
  initialRouteName: 'Contact',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: "#fff"

    }

  }
})


class Main extends Component {
  
  render() {
   
    return (
       
        <View style={{flex:1, paddingTop: Platform.OS==='ios' ? 0 : Expo.Constants.statusBarHeight}}>
            
            <MainNavigator />
        </View>
    );
  }
}
  
export default Main;