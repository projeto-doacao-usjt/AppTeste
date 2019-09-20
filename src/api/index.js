export default function Api (){
    async function listaPessoas(){
        await fetch('http://localhost:3003', { method: 'GET' } )
        .then(T => T.json())
        .then(lembretes => this.setState({ lembretes }))
    }
    function adicionaPessoa(){
        
    }
}