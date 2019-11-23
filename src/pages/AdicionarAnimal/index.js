import React, { Component } from 'react'
import { 
    View, 
    TextInput, 
    StyleSheet,  
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    ScrollView,
    Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import ImagePicker from 'react-native-image-picker';

import ban from '../../images/banner.png';
import axios from 'axios';
import qs from 'qs';

export default class FormAnimal extends Component {

    constructor(){
        super();
        this.state = {
        nomeAnimal: '',
        tipoAnimal: 'cachorro',
        sexoAnimal:'F',
        obsAnimal:'',
        idadeAnimal:''
        }
    }
    handleOnsave = async(valor) =>{
        //Alert.alert('teste', JSON.stringify(valor))
        if(valor.nomeAnimal === '')
            Alert.alert("Erro", 'Digite um nome')
            else{
                let data = new URLSearchParams(valor).toString()
                await axios.put(`https://teste-postgresql.herokuapp.com/animal/add/animal?${data}`, {
                      headers: {
                        Accept: "application/json",
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                      },
                })
                    .then(()=> Alert.alert('Cadastrado com sucesso'))
                    .then(()=> this.props.history.push('/'))
                    .catch(e => Alert.alert('erro',JSON.stringify(e)))
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
        const { 
            tipoAnimal,
            sexoAnimal 
        } = this.state;
        const foto = '';
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                <View style={styles.viewBanner}>
                            <ImageBackground source={ban} style={styles.banner} />
                        </View>
                    <View style={styles.conteudo}>
                        <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
                            <View style={styles.viewFoto}>
                                {foto !== null &&(
                                    <Image source={{ uri: foto.uri }}
                                    style={styles.imagemAnimal}
                                    resizeMethod='resize' resizeMode='contain'/>
                                )}  
                            </View>
                        </TouchableOpacity>
                        
                        <TextInput
                            style={styles.inputNome}
                            placeholder='Nome:'
                            placeholderTextColor='#666666'
                            value={this.state.nomeAnimal}
                            onChangeText={nome => this.setState({ nomeAnimal:nome })}
                        />

                    </View>
                    <View style={styles.conteudo}>
                        <View style={styles.viewRadio}>
                            <Text style={styles.texto}>Tipo</Text>
                            <View style={styles.radio}>
                                <Text>Cachorro</Text>
                                <RadioButton
                                value="cachorro"
                                status={tipoAnimal === 'cachorro' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ tipoAnimal:'cachorro'}); }}
                                />
                            </View>
                            <View style={styles.radio}>
                                <Text>Gato        </Text>
                                <RadioButton
                                value="gato"
                                status={tipoAnimal === 'gato' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ tipoAnimal: 'gato' }); }}
                                />
                            </View>
                        </View>
                        <View style={styles.viewRadio}>
                            <Text style={styles.texto}>Sexo</Text>
                            <View style={styles.radio}>
                                <Text>Macho</Text>
                                <RadioButton
                                value="macho"
                                status={sexoAnimal === 'M' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ sexoAnimal:'M'}); }}
                                />
                            </View>
                            <View style={styles.radio}>
                                <Text>Fêmea</Text>
                                <RadioButton
                                value="F"
                                status={sexoAnimal === 'F' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ sexoAnimal: 'F' }); }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.conteudo}>
                        
                        <TextInput
                            style={styles.inputObs}
                            placeholder='Observações'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({obsAnimal:text})}
                            value={this.state.obsAnimal}/>

                    </View>
                    <View style={styles.conteudo}>
                        
                        <TextInput
                            style={styles.inputObs}
                            placeholder='Idade do animal'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({idadeAnimal:text})}
                            value={this.state.idadeAnimal}/>

                    </View>
                        
                </View>

                <View style={styles.viewBotoes}>
                    <TouchableOpacity style={styles.botao}
                    onPress={()=>this.handleOnsave(this.state)}>
                        <Text style={styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:'#FFF'
    },
    container: {

        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBanner:{
        alignContent: 'center', 
        alignItems: 'center',
        width: 130, 
        height: 130,
       
    },
    inputObs:{
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        width: '100%',
    },
    banner:{
        width: '100%',
        height: '100%',
        alignContent: 'center'
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        width: '60%',
        marginLeft:'10%', 
    },
    inputNome:{
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        width: '50%',
        marginLeft:'10%',
    },
    conteudo:{
        flexDirection: 'row',
        padding: 10,
        width: '100%'
       
    }, 
    viewRadio:{
        flexDirection: 'column',
        padding: 10,
    },
    radio:{
        flexDirection:'row',
        alignItems: 'center',
        
    },
    viewPicker:{
        flexDirection: 'column', 
        borderWidth: 1,
        borderRadius:2,
        borderColor: '#666666',
        width: 140,
        height:40,
        backgroundColor:'rgba(102,102,102,0.5)',
        justifyContent:'center'
    },
    picker:{
        height: '100%', 
        width: 100,
        color: '#666666', 
        fontWeight: 'bold',
        
    },
    texto:{
        color:'#000'
    },
    picker:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    viewFoto:{
        alignItems: 'center',
        marginRight: 10,
        borderWidth:1,
        borderColor: '#666666'
    },
    imagemAnimal:{ 
        width: 100, 
        height: 100,
    },
    textFoto:{
        color:'#666666'
    },
    viewBotoes:{
        alignItems: 'center',
        paddingTop: '10%',
        width: '100%',
        marginTop: '5%',
        
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
})

