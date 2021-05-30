import React, { Component } from 'react'
import {Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, } from 'react-native'

export default class App extends Component {
  
  clica = () => {
     Alert.alert("Login Palmeiras", "Você virou Palmeirense");
  }
  render(){
        return (
      <View style={styles.container}>
        
        <Image
          source={require('src\assets\logo.png')}
          style={styles.logo}
          />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        />

        <TouchableOpacity
        style={styles.botao}
        onPress={()=>{this.clica()} }
        >
        <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

        </View>
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009933'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100

  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent:'center'
  },
  botaoText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#009933'
}
});