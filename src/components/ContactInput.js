import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class ContactInput extends Component {
  state = {
    name: ""
  };

  componentDidMount() {

  }

  contactNameChangedHandler = val => {
    this.setState({
      name: val
    });
  };

  contactSubmitHandler = () => {
    if (this.state.name.trim() === "") {
      return;
    }

    this.props.onContactAdded(this.state.name);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={this.state.name}
          onChangeText={this.contactNameChangedHandler}
          style={styles.nameInput}
        />
        <Button
          title="Add"
          style={styles.nameButton}
          onPress={this.contactSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameInput: {
    width: "70%"
  },
  nameButton: {
    width: "30%"
  }
});

export default ContactInput;
