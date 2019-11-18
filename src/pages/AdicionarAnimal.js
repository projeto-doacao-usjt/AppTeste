import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import FormPessoa from '../components/FormPessoa';
import axios from 'axios';
import FormAnimal from '../components/FormAnimal';
//import apiFake from '../api/apiFake'

export default class AdicionarAnimal extends Component {
    handleOnsave = (valor) =>{
        // fetch('http://teste-adocaoanimais.herokuapp.com/books', {
        //     method: 'POST',
        //     body: JSON.stringify(valor),
        //     headers: {
        //         Accept: "application/json",
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(T => T.json())
        //     .catch(e => console.log('error:', e.message))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.texto} > Cadastrar Animal </Text>
                <FormAnimal
                    onSave={this.handleOnsave.bind(this)}
                    onCancel={() => this.props.history.push('/inicio')} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 20,
        backgroundColor: '#B0B9FF',
        
    },
    texto:{
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center'
    }
})