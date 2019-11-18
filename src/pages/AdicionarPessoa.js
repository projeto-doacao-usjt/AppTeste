import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import FormPessoaTeste from '../components/FormPessoaTeste'
import axios from 'axios'
//import apiFake from '../api/apiFake'

export default class AdicionarPessoa extends Component {
    onSalvar(valor){
        let dados = JSON.stringify(valor);
      axios.put('http://teste-postgresql.herokuapp.com/pessoa/add/pessoa', { dados}).then(t => t.JSON)
        .then(console.log(dados)).catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.texto} > Cadastrar Pessoa </Text>
                <FormPessoaTeste
                    onSave={this.onSalvar.bind(this)}
                    onCancel={() => this.props.history.push('/')} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 20,
        borderWidth: 1,
        borderColor: '#000',
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