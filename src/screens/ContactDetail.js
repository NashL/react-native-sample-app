import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions/index'

import Icon from 'react-native-vector-icons/Ionicons';

class ContactDetail extends Component {
  contactDeletedHandler = () => {
    this.props.onDeleteContact(this.props.selectedContact.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedContact.image} style={styles.contactImage} />
          <Text style={styles.contactName}>{this.props.selectedContact.name}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.contactDeletedHandler} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
            <Icon size={30} name="ios-trash" color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1,
    flexDirection: 'column'
  },
  contactImage: {
    width: "100%",
    height: 200
  },
  contactName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  buttons: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center"
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'red'
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'blue'
  },
  buttonText: {
    fontSize: 25,
    color: 'white'
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'

  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (key) => dispatch(deleteContact(key))
  };
};

export default connect(null, mapDispatchToProps) (ContactDetail);
