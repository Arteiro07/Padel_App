import React, { Component } from 'react'
import { Text, View, TextInput , TouchableOpacity, StyleSheet, Button, Alert} from 'react-native'

var email = "";

export class Login extends Component {
    
 
    render() {        
        return (
        <View  style={styles.container}>
                <Text>ICON</Text>
                <Text>Entrar</Text>
                <TextInput placeholder="Endereço de Email " onChangeText={text => email =text}/> 
                <Text>Password</Text>
                <TextInput secureTextEntry placeholder="Palavra-Passe "/> 
                <Button title="Entra" onPress={() => this.onEntra()}/>
                <Button title="Esqueceu-se da sua password" onPress={() => Alert.alert('Simple Button pressed')}/>
                <Button title="Criar uma conta nova" onPress={() => Alert.alert('Simple Button pressed')}/>
            </View>   
        )
    }
    
    onEntra(){
        return fetch('http://localhost:3001/api', {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.error(error);
        });       
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default Login
