import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import FormPessoa from '../components/FormPessoa'
import apiFake from '../api/apiFake'

export default class AdicionarPessoa extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.texto} > Cadastrar Pessoa </Text>
                <FormPessoa
                    onSave={apiFake.bind(this)}
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