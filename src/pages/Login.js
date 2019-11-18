import React, { Component } from 'react'
import { 
    StyleSheet ,
    Text, 
    View, 
    TextInput, 
    ImageBackground, 
    TouchableOpacity
} from 'react-native'

import ban from '../images/banner.png'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewBanner}>
                    <ImageBackground source={ban} style={styles.banner} />
                </View>
                   
                <TextInput  
                placeholder='USUARIO'
                    style={styles.input}
                    placeholderTextColor='#666666' 
                />
                <TextInput 
                    placeholder='SENHA'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor='#666666' 
                />
                <View style={styles.viewBotoes}>
                    <TouchableOpacity style={styles.botao}
                    onPress={() =>this.props.history.push('/cadastroanimal')}>
                        <Text style={styles.textoBotao}>ACESSAR</Text>
                    </TouchableOpacity>
                    <Text style={styles.textoEntreBotoes}>ou</Text>
                    <TouchableOpacity style={styles.botao} onPress={() =>this.props.history.push('/cadastro')}>
                        <Text style={styles.textoBotao}>NÃO É CADASTRADO?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.history.push('/ajuda')}>
                    <View style={styles.rodape}>
                        <Text style={styles.textoFim}>Problema com acesso? Clique aqui</Text>
                    </View>
                </TouchableOpacity>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        //justifyContent: 'flex-start',
        margin: 0,
        width: '100%',
        height: '100%',
        paddingHorizontal: '10%'
    },
    viewBanner:{
        alignContent: 'center', 
        width: 130, 
        height: 130,
       
    },
    banner:{
        width: '100%',
        height: '100%',
        marginTop: '10%',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: '6%'
    },
    input:{
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
        width: '100%',
        margin: '5%',
        color: '#666666'
    },
    viewBotoes:{
        alignItems: 'center',
        paddingTop: '20%',
        width: '100%',
        marginTop: '5%'
    },
    botao:{
        backgroundColor: '#6624FB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 5,
        width: '80%',
        height: 45,
    },
    textoBotao:{
        color: '#FFF',
        fontSize: 20,
    },
    textoEntreBotoes:{
        fontSize: 16,
        color:'#08af9e',
        padding: '5%',
    },
    rodape:{
        alignItems: 'center',
        textAlign: 'center',
        width: '100%'
    },
    textoFim:{
        color: '#666666',
        fontSize: 16,
        paddingTop: '25%',
        
    },
})
