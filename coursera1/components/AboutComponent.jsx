import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { About } from '../shared/about';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            abouts: About
        };
    }

    static navigationOptions = {
        title: 'About'
    };

    render() {
  

    const renderMenuItem = ({item, index}) => {

        return (
                
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('About',{aboutId:item.id})}
            
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

export default About;