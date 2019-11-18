import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button, Image,ScrollView } from 'react-native'

import ImagePicker from 'react-native-image-picker'

export default class FormAnimal extends Component {

    constructor(){
        super();
        this.state = {
        nome: '',
        tipo: '',
        raca: '',
        foto: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isVisible !== prevProps.isVisible) {
          logVisibleChange(this.props.isVisible);
        }
      }
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ foto: response })
          }
        })
      }
    render() {
        const {foto} = this.state;
        return (
            <View>
                <ScrollView>
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
                            placeholder='Tipo:'
                            placeholderTextColor='#000'
                            value={this.state.tipo}
                            onChangeText={cpf => this.setState({ tipo })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Raça:'
                            placeholderTextColor='#000'
                            value={this.state.raca}
                            onChangeText={tel => this.setState({ raca })}
                        />

                    </View>
                        <View style={styles.viewFoto}>
                        <Button title='Foto' onPress={() => this.handleChoosePhoto()}/>
                        {foto !== null &&(
                        <Image source={{ uri: foto.uri }}style={styles.imagemAnimal}/>)}
                        
                    </View>
                </View>

                <View>
                    <Button title='Salvar' disabled={this.state.nome === ''}
                    onPress={() => this.props.onSave(this.state)}/>
                    <Button title='Cancelar' onPress={this.props.onCancel} />
                </View>
                </ScrollView>

                

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
        width: '100%',
        backgroundColor: 'rgba(33, 59, 255, 0.3)'
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
    },
    viewFoto:{
        alignItems: 'center',
        marginBottom: 10
    },
    imagemAnimal:{ 
        width: 100, 
        height: 100,
        marginBottom: 10
    },
})

