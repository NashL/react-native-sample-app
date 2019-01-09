import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ContactInput from '../components/ContactInput';
import { addContact } from '../store/actions/index'

class ThirdScreen extends Component {

  contactAddedHandler = name => {
    this.props.onAddContact(name)
  };

  render () {
    return (
      <View>
        <ContactInput onContactAdded={this.contactAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name) => dispatch(addContact(name))
  }
}

export default connect(null, mapDispatchToProps)(ThirdScreen);