import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import ban from '../../../images/banner.png'

export default class Confirmar extends Component {
    constructor(){
        super();
        this.state =  {
            codigo: ''
        }
    }
    onConfirma(dados) {
        console.log(dados)
        this.props.history.push('/novosdados')
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}> 
                        <View style={styles.viewBanner}>
                            <ImageBackground source={ban} style={styles.banner} />
                        </View>
                        <Text style={styles.text}>Digite o código enviado no campo abaixo, para
                        recuperar sua conta de acesso. </Text>
                        <TextInput 
                            placeholder='Código'
                            style ={styles.input}/>
                        <View style={styles.viewBotao}>
                            <TouchableOpacity  
                                style={styles.botao}
                                onPress={() =>this.onConfirma('aa')}>
                                <Text style={styles.textBotao}>Confirme</Text>
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
        alignItems: 'center',
    },
    viewBanner:{
        alignContent: 'center', 
        alignItems: 'center',
        width: 130, 
        height: 130,
       
    },
    banner:{
        width: '100%',
        height: '100%',
        alignContent: 'center'
    },
    text:{
        marginTop: '15%',
        color: '#666666',
        width: '80%',
        //textAlign: 'justify'
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        width: '80%',
        marginTop: '15%',
        marginBottom: '5%'
    },
    viewBotao:{
        height: 50,
        width: '100%',
        alignItems: 'center'
        
    },
    botao:{
        backgroundColor: '#6624FB',
        width: '50%',
        height: '80%',
        borderRadius: 3,
        marginLeft: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBotao:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18
    },
});
