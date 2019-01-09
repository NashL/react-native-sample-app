import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from "./src/screens/Login";
import FirstScreen from "./src/screens/FirstScreen";
import SecondScreen from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import ContactDetailScreen from "./src/screens/ContactDetail";
import configureStore from './src/store/configureStore';

const store = configureStore();

// REGISTER SCREENS

Navigation.registerComponent("Birth.LoginScreen", () => LoginScreen, store, Provider);
Navigation.registerComponent("Birth.FirstScreen", () => FirstScreen, store, Provider);
Navigation.registerComponent("Birth.SecondScreen", () => SecondScreen, store, Provider);
Navigation.registerComponent("Birth.ThirdScreen", () => ThirdScreen, store, Provider);
Navigation.registerComponent("Birth.ContactDetailScreen", () => ContactDetailScreen, store, Provider);

// Start an app

Navigation.startSingleScreenApp({
  screen: {
    screen: "Birth.LoginScreen",
    title: "Login"
  }
});

// import React, { Component } from 'react';

// import {
//   StyleSheet,
//   View
//  } from 'react-native';
// import { connect } from 'react-redux';

// import ContactInput from "./src/components/ContactInput";
// import ContactList from "./src/components/ContactList";
// import ContactDetail from "./src/components/ContactDetail";
// import { addContact, deleteContact, selectContact, deselectContact } from './src/store/actions/index'
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


// import { createStackNavigator, createAppContainer } from "react-navigation";
// import { HomeWelcome } from "./components/HomeWelcome";
// import { HomeBirthday} from "./components/HomeBirthday";
// import { HomeInformation } from "./components/HomeInformation";
// import { MainScreen } from "./components/MainScreen";

// class App extends Component {
//
//   contactAddedHandler = name => {
//     this.props.onAddContact(name)
//   };
//
//   contactDeletedHandler = () => {
//     this.props.onDeleteContact();
//   };
//
//   modalClosedHandler = () => {
//     this.props.onDeselectContact();
//   };
//
//   contactSelectedHandler = key => {
//     this.props.onSelectContact(key);
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <ContactDetail
//           selectedContact={this.props.selectedContact}
//           onItemDeleted={this.contactDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <ContactInput onContactAdded={this.contactAddedHandler} />
//         <ContactList
//           contacts={this.props.contacts}
//           onItemSelected={this.contactSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', {name: 'Jane'})}
//       />
//     );
//   }
// }

// const AppNavigator = createStackNavigator(
//   {
//     HomeWelcome: HomeWelcome,
//     HomeInformation: HomeInformation,
//     HomeBirthday: HomeBirthday,
//     MainScreen: MainScreen
//   },
//   {
//     initialRouteName: "HomeWelcome"
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);
//
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     // flexDirection: 'column', DEFAULT
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#aa201a',
//     // fontSize: 20,
//     // color: 'white',
//     // fontWeight: 'bold',
//   },
//   heading: {
//     marginTop: 40,
//     fontSize: 40
//   },

  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#aa201a',
  //   fontSize: 20,
  //   color: 'white',
  //   fontWeight: 'bold',
  //
  // },
  // welcomeText: {
  //   alignItems: 'center',
  //   fontSize: 40,
  //   color: 'white',
  // },
  // welcomeButton: {
  //   backgroundColor: "#007aff",
  //   paddingHorizontal: 20,
  //   paddingVertical: 5,
  //   borderRadius: 30
  // },
  /* Here, style the text of your button */
  // welcomeButtonText: {
  //   fontSize: 25,
  //   fontWeight: '400',
  //   color: "#000000",
  // },
  // button: {
    // position: 'absolute',
    // bottom: 0,
  //   backgroundColor: "#e4edff",
  //   paddingHorizontal: 20,
  //   paddingVertical: 5,
  //   borderRadius: 30
  // },
  // bottom: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // marginBottom: 36,
//
//   }
//
// });
//
// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.contacts,
//     selectedContact: state.contacts.selectedContact
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddContact: (name) => dispatch(addContact(name)),
//     onDeleteContact: () => dispatch(deleteContact()),
//     onSelectContact: (key) => dispatch(selectContact(key)),
//     onDeselectContact: () => dispatch(deselectContact())
//   };
// };
//
// export default connect (mapStateToProps, mapDispatchToProps) (App);