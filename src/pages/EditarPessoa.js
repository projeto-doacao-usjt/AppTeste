import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import FormPessoa from '../components/FormPessoa';
import axios from 'axios';
//import apiFake from '../api/apiFake'

export default class EditarPessoa extends Component {
    constructor(){
        super();
        this.state = {
            pessoa: undefined
        }
    }
    handleOnsave = (valor) =>{
        const pageId = this.props.match.params.pageId
        fetch('http://teste-adocaoanimais.herokuapp.com/books/'+ pageId, {
            method: 'PUT',
            body: JSON.stringify(valor),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(T => T.json())
            .then(() => this.props.history.push('/')).catch(e => console.log('error:', e.message))
    }
    componentDidMount(){
        const pageId = this.props.match.params.pageId;
        fetch('http://teste-adocaoanimais.herokuapp.com/pessoas/'+ pageId, { method: 'GET' })
            .then(T => T.json())
            .then(pessoa => this.setState({pessoa}))
    }
    render() {
        const pessoa = this.state.pessoa;
        console.log(pessoa)
        return (
            <View style={styles.container}>
                <Text style={styles.texto}> Editar Pessoa </Text>
                {!pessoa && (
                    <Text>Não há dados</Text>
                )}
                {pessoa && (
                    <FormPessoa value={this.state} onSave={() => this.handleOnSave.bind(this)} onCancel={
                        () => this.props.history.push('/')} />
                )}
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