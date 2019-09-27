import axios from 'axios'
export default function Api (){
        axios.get('http://teste-adocaoanimais.herokuapp.com/pessoas')
        .then(t => t.data).catch(error => console.log(error))
}
//http://teste-adocaoanimais.herokuapp.com/pessoas