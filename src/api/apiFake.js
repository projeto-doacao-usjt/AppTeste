import pessoa from '../../json/pessoas.json';
import React from 'react';
import {Alert, Text} from 'react-native';

export default function adicionar(valor){
    let dados = JSON.stringify(valor);
    function gravarDados(){
        console.log(dados)
        
    }
    
let formatada = `Nome: ${valor.nome}
CPF: ${valor.cpf}
Telefone: ${valor.telefone}
Endereco: ${valor.endereco}
CEP: ${valor.cep}`;

     return (
        Alert.alert(
            'Confirmar dados?',
            formatada,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => gravarDados() },
            ],
            {cancelable: false},
          )
     );
}

