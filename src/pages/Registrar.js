import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import FormPessoa from '../components/FormPessoa';
import axios from 'axios';
//import apiFake from '../api/apiFake'

export default class Registrar extends Component {
    
    handleOnsave = (valor) =>{
        fetch('http://teste-adocaoanimais.herokuapp.com/books', {
            method: 'POST',
            body: JSON.stringify(valor),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(T => T.json())
            .catch(e => console.log('error:', e.message))
    }
    render() {
        return (
            <View style={styles.container}>
                
                <FormPessoa
                    onSave={this.handleOnsave.bind(this)}
                    onCancel={() => this.props.history.push('/')} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
    },
})