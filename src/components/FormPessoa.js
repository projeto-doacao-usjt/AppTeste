import React, { Component } from 'react'
import { 
    View, 
    TextInput, 
    StyleSheet, 
    Button, 
    ScrollView, 
    ImageBackground, 
    Text,
    TouchableOpacity
} from 'react-native'
import ban from '../images/banner.png'

export default class FormPessoa extends Component {

    constructor(){
        super();
        this.state =  {
            nome: '',
            cpf: '',
            tel: '',
            cep:'',
            uf: '',
            endereco: '',
            complemento:'',
            numero:'',
            bairro: '',
            cidade: '',
        }
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isVisible !== prevProps.isVisible) {
          logVisibleChange(this.props.isVisible);
        }
      }
    render() {
        return (
            <View >
                <ScrollView style = {styles.scroll}>
                    <View style={styles.container}>
                    <View style={styles.viewBanner}>
                        <ImageBackground source={ban} style={styles.banner} />
                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o nome completo'
                            placeholderTextColor='#666666'
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite o email'
                            placeholderTextColor='#666666'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Confirmar email'
                            placeholderTextColor='#666666'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Telefone com DDD'
                            placeholderTextColor='#666666'
                            value={this.state.tel}
                            onChangeText={tel => this.setState({ tel })}
                        />
                    </View>
                    <View style={styles.viewCep}>
                        <TextInput
                            style={styles.inputCep}
                            placeholder='CEP'
                            placeholderTextColor='#666666'
                            value={this.state.cep}
                            onChangeText={cep => this.setState({ cep })}
                        />
                        <TouchableOpacity style={styles.botaoCep}>
                            <Text style={styles.textoBotao}>Buscar</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.inputUf}
                            placeholder='UF'
                            placeholderTextColor='#666666'
                            value={this.state.uf}
                            onChangeText={uf => this.setState({ uf })}
                        />
                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço'
                            placeholderTextColor='#666666'
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.inputBairro}
                            placeholder='Complemento'
                            placeholderTextColor='#666666'
                            value={this.state.complemento}
                            onChangeText={complemento => this.setState({ complemento })}
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.inputCidade}
                            placeholder='Número'
                            placeholderTextColor='#666666'
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                            secureTextEntry
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.inputBairro}
                            placeholder='Bairro'
                            placeholderTextColor='#666666'
                            value={this.state.bairro}
                            onChangeText={bairro => this.setState({ bairro })}
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.inputCidade}
                            placeholder='Cidade'
                            placeholderTextColor='#666666'
                            value={this.state.cidade}
                            onChangeText={cidade => this.setState({ cidade })}
                            secureTextEntry
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Cadastro de senha'
                            placeholderTextColor='#666666'
                            value={this.state.senha}
                            onChangeText={senha => this.setState({ senha })}
                            secureTextEntry
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Confirme sua senha'
                            placeholderTextColor='#666666'
                            value={this.state.tel}
                            onChangeText={tel => this.setState({ tel })}
                        />

                    </View>
                     
                    

                    <View style={styles.viewBotao}>
                        <TouchableOpacity  
                            style={styles.botao}
                            onPress={() =>this.props.onCancel()}>
                            <Text style={styles.textoBotao}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  
                            style={styles.botao}
                            onPress={() => this.props.onSave(this.state)}>
                            <Text style={styles.textoBotao}>Cadastrar</Text>
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
    scroll:{
    },
    textCabecalho:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical:'2%'
    },
    input:{
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
        width: '80%',
    },
    conteudo:{
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
       
    }, texto:{
        paddingBottom: 10,
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10
    },
    viewCep:{
        width: '80%',
        flexDirection: 'row',
    },
    inputCep:{
        width: '40%',
        height: '80%',
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
    },
    inputUf:{
        width: '15%',
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
        height: '80%',
    },
    inputBairro:{
        width: '45%',
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
        height: '80%',
        //marginLeft:'10%',
        
        
    },
    inputCidade:{
        marginLeft:'5%',
        width: '25%',
        borderBottomWidth:1 ,
        borderBottomColor: '#666666',
        height: '80%'
    },
    botaoCep:{
        width: '25%',
        height: '80%',
        backgroundColor: '#6624FB',
        borderRadius: 4,
        textAlign: 'center',
        alignItems: 'center',
        marginHorizontal:'10%'
    },
    viewBotao:{
        flexDirection: 'row',
        height: 50,
    },
    botao:{
        backgroundColor: '#6624FB',
        width: '30%',
        height: '80%',
        borderRadius: 3,
        marginLeft: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    textoBotao:{
        fontSize: 20,
        color: '#FFF',
    },
})

