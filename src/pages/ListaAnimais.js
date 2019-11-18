import React, { Component } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, StatusBar } 
from 'react-native';
//import Json from '../../json/pessoas.json';
//import Api from '../api'

export default class ListaAnimais extends Component {
    
    state = {
        animais: [{
            tipo: 'Cachorro',
            raca: 'Basset'
        }]
    }

    componentDidMount() {
        // const p = Api()
        // console.log(p)

        // axios.get('http://teste-adocaoanimais.herokuapp.com/animais')
        // .then(ani => ani.data).then(animais => this.setState({animais}))
        // .catch(error => console.log(error))
    }
    // onDelete(id) {
    //     Alert.alert(
    //         'Exclusão de pessoas',
    //         'Você confirma a exclusão desta pessoa?', [
    //             { text: 'Não', style: 'cancel' },
    //             {
    //                 text: 'Sim',
    //                 onPress: () => {
    //                     axios.delete(`http://teste-adocaoanimais.herokuapp.com/pessoas/${id}`).then(this.setState({
    //                         pessoas: this.state.pessoas.filter(T => T.id !== id)
    //                     }))
                        
    //                 }
    //             }
    //         ])
    // }
    render() {

        const { animais } = this.state;
        console.log(animais)

        return (

            <View  style={styles.container}>
                <StatusBar backgroundColor='#000' /> 
                <ScrollView>
                    <Text style={styles.textoBranco}>Animais Cadastrados</Text>
                    <View style={styles.botoes}>
                    <TouchableOpacity style={styles.adicionar}  
                    onPress={() => this.props.history.push('/cadastroanimal')}>
                        <Text style={styles.textoBotoes}>Cadastrar Animal</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.styleScroll}>

                    {animais.map((p, key) => (
                        <View style={styles.styleKey} key={key}>
                        <Text style={styles.textoLembrete}>Animal: {p.tipo}</Text>
                        <Text style={styles.textoLembrete}>Raça: {p.raca} </Text>
                        <View style={styles.botoes}>     
                            <TouchableOpacity 
                            style={styles.botao}
                            onPress={() => this.props.history.push('/' + p.id)}> 
                                <Text style={styles.textoBotoes}>Mais Detalhes</Text>
                            </TouchableOpacity>
                        </View>  
                    </View> 
                    ))}
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoLembrete:{
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        color: '#000',
        paddingLeft: 10
    },
    styleScroll:{
        margin: 30
    },
    adicionar:{
        backgroundColor: '#384183',
        height: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 10,
        borderRadius: 5,
    },
    botao:{
        backgroundColor: '#364183',
        height: 40,
        width: 100,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textoBotoes:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    texto:{
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textoBranco:{
        backgroundColor: '#000',
        color: '#FFF',
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
    styleKey: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginVertical: 10,
    }
})


