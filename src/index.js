import React, { Component } from 'react'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Registrar from './pages/Registrar'
import AdicionarPessoa from './pages/AdicionarPessoa'
import ListaPessoas from './pages/ListaPessoas'
import EditarPessoa from './pages/EditarPessoa'
import Login from './pages/Login'
import ListaAnimais from './pages/ListaAnimais'
import AdicionarAnimal from './pages/AdicionarAnimal'
import Inicio from './pages/Inicio'
import Ajuda from './pages/Ajuda';

export default class Rotas extends Component{
    render() {
        return (
          <NativeRouter>
            <View >
              <Switch>
                <Route path='/cadastro' component={Registrar} />
                <Route path='/cadastroanimal' component={AdicionarAnimal} />
                {/* <Route path='/:pageId' component={EditarPessoa} /> */}
                {/* <Route path='/inicio' component={ListaPessoas} /> */}
                <Route path='/adicionar' component={AdicionarPessoa} />
                <Route path='/login' component={Login} />
                <Route path='/ajuda' component={Ajuda} />
                <Route path='/' component={Inicio} />
              </Switch>
            </View>
          </NativeRouter>
        )
      }
    }