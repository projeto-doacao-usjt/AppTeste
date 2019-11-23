import React, { Component } from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity, 
} from 'react-native';
import ban from '../../images/banner.png';
import donate from '../../images/donate.png';
import animais from '../../images/animais.png';
import perdido from '../../images/perdido.png'

export default class Inicio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewBanner}>
                    <ImageBackground source={ban} style={styles.banner} />
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.viewLogo}>
                    <ImageBackground source={animais} resizeMode='contain' 
                        resizeMethod='resize' style={styles.logo} />
                    </View>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() =>this.props.history.push('/login')}>
                        <Text style={styles.textoBotao}> Cadastrar Animal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.viewLogo}>
                        <ImageBackground source={perdido} resizeMode='contain' 
                            resizeMethod='resize' style={styles.logo} />
                    </View>
                    <TouchableOpacity style={styles.botao}
                    onPress={() =>this.props.history.push('/animais')}>
                        <Text style={styles.textoBotao}> Buscar Animal Perdido</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.viewLogo}>
                        <ImageBackground source={donate} resizeMode='contain' 
                        resizeMethod='resize' style={styles.logo} />
                    </View>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}> Nos Ajude</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewSair}>
                    <TouchableOpacity style={styles.botaoSair}>
                        <Text style={styles.textoBotao}> Sair</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        );
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
    logo:{
        width: '100%',
        height:'100%',
    },
    viewLogo:{
        width: 100, 
        height: 100,
    },
    botao:{
        backgroundColor: '#6624FB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 5,
        width: '80%',
        height: 45,
        marginLeft: '10%'
    },
    botaoSair:{
        backgroundColor: '#6624FB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: '90%',
        height: '100%',
        textAlign: 'center'
        
    },
    viewSair:{
        height: '7%',
        width: '60%',
        marginLeft: '65%',
    },
    textoBotao:{
        color: '#FFF',
        fontSize: 20,
    }, 
    conteudo:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '20%'
    },
    texto:{
        paddingRight:'10%'
    },
});
