
import React from "react";
import { Button, TextInput, View,Text, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';


const Register: React.FC = () => {
  

  return (
    <View style={styles.container}>
         <Text style={styles.messageContainer}>
            Registration form
        </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
       
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        
        
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    messageContainer: {
        width: "80%",
        height: "15%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        color: "white",
        backgroundColor: "darkgreen",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        paddingTop:30
      },
      button: {
        width: '100%',
        backgroundColor: 'orange',
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 10,
      },
      registerButton: {
        width: '100%',
        backgroundColor: 'green',
        paddingVertical: 12,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        justifyContent:"center",
        fontWeight: 'bold',
        fontSize: 16,
      },
  });
  
  export default Register;