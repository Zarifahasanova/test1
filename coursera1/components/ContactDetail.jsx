import React, { Component } from 'react';
import {Text,View, StyleSheet,FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {Contact} from  '../shared/contact';

function RenderContact(props) {

    const contact = props.contact;
    
        if (contact != null) {
            return(
                <Card
                featuredTitle={contact.Address}>
                    <Text style={{margin: 10}}>
                        {contact.Location}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}


export default class ContactDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titleText: "Contact Information",
        contacts: Contact
      };
    }static navigationOptions = {
        title: 'Contact Us'
    };
  
    render() {
        const contactId =this.props.navigation.getParam('contactId','')
       
        return(<RenderContact contact={this.state.contacts[+contactId]} />);
     
    }
  }
  
  