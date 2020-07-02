import React, { Component } from 'react';
import {Text,View, StyleSheet,FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {About} from  '../shared/about';

function RenderAbout(props) {

    const about = props.about;
    
        if (about != null) {
            return(
                <Card
                featuredTitle={about.History}>
                    <Text style={{margin: 10}}>
                        {About.History}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}


export default class AboutDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titleText: "About Information",
        abouts: About
      };
    }static navigationOptions = {
        title: 'About Us'
    };
  
    render() {
        const AboutId =this.props.navigation.getParam('AboutId','')
       
        return(<RenderAbout About={this.state.Abouts[+AboutId]} />);
     
    }
  }
  