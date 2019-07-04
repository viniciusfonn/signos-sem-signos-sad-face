import React, { Component } from 'react';


import { Container, LeftButton, RightButton, Flex } from './style';

import Signos from '../../components/Signo';

import api from '../../services/api';

export default class Main extends Component {

    state = {
        signos: [
            'vuejs/vue',
            'facebook/react',
            'angular/angular'
        ],
        loading: false,
        // signos: [
        //     'aquario',
        //     'touro',
        //     'virgem'
        // ],
        cont: 0,
        signosResponse: [],
    }
    componentDidMount() {
        this.handleSigno();
    }

    handleSigno = async () => {
        this.setState({ loading: true});
        try {
            const response = await api.get(`${this.state.signos[this.state.cont]}`);
            // const response = await api.get(`/${this.state.signos[this.state.cont]}/semana`)

            this.setState({
                signosResponse: response.data
            });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false});
        }
    }
    handleContPlus = async () => {

        this.state.cont = this.state.cont + 1;
        if (this.state.cont === 3){
            this.state.cont = 0;
        }
        this.handleSigno();

    }
    handleContMinor = async () => {
        
        this.state.cont = this.state.cont - 1;
        if (this.state.cont === -1){
            this.state.cont = 2;
        }
        this.handleSigno();

    }

    render() {
        return (
            <Container>
                <h1> Signos</h1>
                <Flex>
                    <LeftButton onClick={this.handleContMinor}></LeftButton>
                    <RightButton onClick={this.handleContPlus}></RightButton>
                </Flex>
                <Signos signos={this.state.signosResponse} loading = {this.state.loading} />
            </Container>
        );
    }
}


