import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Contact } from '../shared/contact';

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: Contact
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
  

    const renderMenuItem = ({item, index}) => {

        return (
                
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('ContactUs',{contactId:item.id})}
            
          />
        );
    };
 
    const { navigate } = this.props.navigation;
        
    return (
            <FlatList 
                data={props.Contacts}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}
}

export default ContactUs;