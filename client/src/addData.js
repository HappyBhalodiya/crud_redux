 
import React , {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Api from "../service";
import axios from 'axios';

class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: "",
      password: "",
      username:"",
    };
  }
  componentDidMount(){
    console.log("call component");
   fetch('http://192.168.43.176:5000/getUser')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.log("error=====",error);
  });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <View
      style={{
        flexDirection: "column",
        flex: 4
      }}
      />
      <View
        style={{
        flexDirection: "column",
        flex: 7,
        justifyContent: "center",
        alignItems: "center"
      }}
      >
      <Text
          style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
      Add Data
      </Text>
      <View style={styles.inputContainer}>
      <Icon name={"lock-outline"} size={20} color="#606060" style={{margin:10}} />
      <TextInput
      style={styles.inputs}
      ref={input => {
        this.password = input;
      }}
      placeholder="username"
      underlineColorAndroid="transparent"
      onChangeText={text => this.setState({ username: text })}
      />
      </View>
      <View style={styles.inputContainer}>
      <Icon name={"email-outline"} size={20} color="#606060" style={{margin:10}} />

      <TextInput
      style={styles.inputs}
      placeholder="Email"
      keyboardType="email-address"
      underlineColorAndroid="transparent"
      onChangeText={text => this.setState({ email: text })}
      />
      </View>

      <View style={styles.inputContainer}>
      <Icon name={"lock-outline"} size={20} color="#606060" style={{margin:10}} />
      <TextInput
      style={styles.inputs}
      ref={input => {
        this.password = input;
      }}
      placeholder="Password"
      secureTextEntry={true}
      underlineColorAndroid="transparent"
      onChangeText={text => this.setState({ password: text })}
      />
      </View>

      <View style={styles.inputContainer1}>
      <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={() => this.props.signup(this.state)}
      >
      <Text style={styles.signUpText}>Add Data</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={() => getdata()}
      >
      <Text style={styles.signUpText}>get</Text>
      </TouchableOpacity>
      </View>
      <View
      style={{
        flexDirection: "column",
        flex: 4
      }}
      />
      </View>

      );
  }
}
function getdata() {
  console.log("call function");
  fetch('http://192.168.43.176:5000/getUser')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.log("error=====",error);
  });
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
    username:state.username,
  };
}

function mapDispatchToProps(dispatch, onProps) {
  return {
    signup: text => {
      var body = {
        email: text.email,
        password: text.password,
        username: text.username,
      };
      console.log("bodyy=====", body);
      Api.addUser(body)
      .then(res => {
        console.log("=====res>>>>>>>=",res);
        Toast.show("successfully Data added.");
        // dispatch({ type: "ADD", payload: body });
      })
      .catch(err => {
        console.log("Error========", err);
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddData);

  const styles = StyleSheet.create({
    container: {
    
      flex: 1,
      // alignItems: "center",
      // justifyContent: "center",
      backgroundColor: "#000"
    },

    inputContainer: {
      borderBottomColor: "#F5FCFF",
      backgroundColor: "#e7e7e7",

      width: 280,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
    },
    inputContainer1: {
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginLeft: 15,
      justifyContent: "center"
    },
    buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 150,
     
    },
    loginButton: {
      backgroundColor: "#372e5f"
    },
    signupButton: {
      backgroundColor: "#372e5f",
      marginLeft: 10
    },
    signUpText: {
      color: "white"
    },
    text: {
      fontSize: 20,
      color: "white",
      justifyContent: "center",
      marginTop: 40
    }
  });
