import React, { Component } from 'react'
import axios from 'axios'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Alert, 
    ScrollView, 
    StatusBar,
    Image, 
    TextInput } 
from 'react-native';

import icon1 from '../../images/perdido.png'

export default class ListaAnimais extends Component {
    
    state = {
        animais: []
    }

    componentDidMount() {

        axios.get('https://teste-postgresql.herokuapp.com/animal/get/animais')
        .then(ani => ani.data).then(animais => this.setState({animais}))
        .catch(error => console.log(error))
    }
    render() {

        const { animais } = this.state;
        const nome = 
        console.log(animais)

        return (

            <View  style={styles.container}>
                <StatusBar backgroundColor='#000' /> 
                <ScrollView>

                    <View style={styles.styleScroll}>
                    {animais.map((p, key) => (
                        <View style={styles.styleKey} key={key}>
                        <View style={styles.viewFoto}>
                            <Image source={icon1}
                            style={styles.imagemAnimal}
                            resizeMethod='resize' resizeMode='contain'/>
                        </View>
                        <View>
                        <Text style={styles.textoLembrete}>Nome: {p.nomeAnimal}</Text>
                        <Text style={styles.textoLembrete}>Animal: {p.tipoAnimal}</Text>
                        <Text style={styles.textoLembrete}>Idade: {p.idadeAnimal} </Text>
                        <Text style={styles.textoLembrete}>Tipo: {p.tipoAnimal} </Text>
                        <Text style={styles.textoLembrete}>Obs: {p.obsAnimal} </Text>
                        </View>
                        
                        
                    </View> 
                    ))}
                    <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} 
                    onPress={()=> this.props.history.push('/')}>
                        <Text style={styles.textoBotoes}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
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
    imagemAnimal:{ 
        width: 100, 
        height: 100,
    },
    viewFoto:{
        alignItems: 'center',
        marginRight: 10,
        width:100,
        borderWidth:1,
        borderColor: '#666666'
    },
    imagemAnimal:{ 
        width: 100, 
        height: 100,
    },
    textoBotoes:{
        color: '#fff',
        flexDirection:'row',
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
        flexDirection:'row',
        marginVertical: 10,
    },
    viewData:{
        flexDirection:'row',
    },
})


