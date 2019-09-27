import React, { Component } from 'react'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import AdicionarPessoa from './pages/AdicionarPessoa'
import ListaPessoas from './pages/ListaPessoas'

export default class Rotas extends Component{
    render() {
        return (
          <NativeRouter>
            <View >
              <Switch>
                <Route path='/cadastro' component={AdicionarPessoa} />
                <Route path='/' component={ListaPessoas} />
              </Switch>
            </View>
          </NativeRouter>
        )
      }
    }