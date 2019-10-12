import pessoa from '../../json/pessoas.json';
import React from 'react';
import axios from 'axios'
import {Alert} from 'react-native';

export default function adicionar(valor){
    let dados = JSON.stringify(valor);
      axios.post('http://teste-adocaoanimais.herokuapp.com/books', { dados}).then(t => t.JSON)
        .then(console.log(dados)).catch(error => console.log(error))

// let formatada = `Nome: ${valor.nome}
// CPF: ${valor.cpf}
// Telefone: ${valor.tel}
// Endereco: ${valor.endereco}
// Número: ${valor.numero}
// CEP: ${valor.cep}
// Número: ${valor.numero}`;

//      return (
//         Alert.alert(
//             'Confirmar dados?',
//             formatada,
//             [
//               {
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel',
//               },
//               {text: 'OK', onPress: () => gravarDados() },
//             ],
//             {cancelable: false},
//           )
//      );

}

