colocaDados = null
       onColocaDados = ()=>{
           this.colocaDados = (<View>
        <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Endereço:'
                            placeholderTextColor='#08af9e'
                            value={this.state.logradouro}
                        />

                    </View>

                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Complemento:'
                            placeholderTextColor='#08af9e'
                            value={this.state.complemento}
                        />
                    </View>

                    <View style={styles.conteudo}>
                        <TextInput
                            style={styles.input}
                            placeholder='Número:'
                            placeholderTextColor='#08af9e'
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                        />

                    </View>
    </View>)
       }
    onSearchCep =  (valor) =>{
        var cep = valor.replace(/\D/g, '');
         fetch(`http://www.viacep.com.br/ws/${cep}/json`,{
            method: 'GET'
    }).then(response => response.json())
    .then(dados => this.setState(dados))
    .then(() => console.log(this.state))
    .catch(e => console.log('error:', e.message))
    this.onColocaDados();
    }

    {this.colocaDados !== null ? this.colocaDados : null}