import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';

import ContactList from '../components/ContactList';

class FirstScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  constructor(props) {
    super(props);
  }

  itemSelectedHandler = key => {
    const selContact = this.props.contacts.find( contact => {
      return contact.key === key;
    });
    this.props.navigator.push({
      screen: "Birth.ContactDetailScreen",
      title: selContact.name,
      passProps: {
        selectedContact: selContact
      }
    });
  };

  render () {
    return (
      <View>
        <Text> adasdasda</Text>
        <ContactList contacts={this.props.contacts} onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(FirstScreen);