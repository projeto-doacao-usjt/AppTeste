import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default class FormPessoa extends Component {
    state = this.props.value || {
        nome: '',
        endereco: '',
        complemento: '',
        cep: '',
        tel: '',
        cpf: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isVisible !== prevProps.isVisible) {
          logVisibleChange(this.props.isVisible);
        }
      }
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome:'
                            placeholderTextColor='#000'
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='CPF:'
                            placeholderTextColor='#000'
                            value={this.state.cpf}
                            onChangeText={cpf => this.setState({ cpf })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Telefone:'
                            placeholderTextColor='#000'
                            value={this.state.tel}
                            onChangeText={tel => this.setState({ tel })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço:'
                            placeholderTextColor='#000'
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                        />

                    </View>

                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Complemento:'
                            placeholderTextColor='#000'
                            value={this.state.complemento}
                            onChangeText={complemento => this.setState({ complemento })}
                        />
                    </View>

                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='CEP'
                            placeholderTextColor='#000'
                            value={this.state.cep}
                            onChangeText={cep => this.setState({ cep })}
                        />

                    </View>  
                </View>

                <View>
                    <Button title='Salvar' disabled={this.state.nome === ''}
                    onPress={() => this.props.onSave(this.state)}/>
                    <Button title='Cancelar' onPress={this.props.onCancel} />
                </View>

            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5, 
        width: '100%'
    },
    conteudo:{
        flexDirection: 'row',
        paddingBottom: 20
       
    }, texto:{
        paddingBottom: 10,
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10
    },
    picker:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    }
})

