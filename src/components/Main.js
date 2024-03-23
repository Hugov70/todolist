import React, { Component } from 'react'
import Form from "./Form";
import Lista from './Lista';
import './Main.css';

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1

    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas })
    };

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;
        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        const { index } = this.state;

        if (index === -1) {
            novaTarefa = novaTarefa.trim()
            if (novaTarefa === '' || tarefas.indexOf(novaTarefa) !== -1) return;

            const novasTarefas = [...tarefas, novaTarefa];

            this.setState({
                tarefas: [...novasTarefas],
                novaTarefa: '',
            })
        } else {
            const novasTarefas = [...tarefas]
            novasTarefas[index] = novaTarefa;
            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
            })
        }




    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1)

        this.setState({
            tarefas: [...novasTarefas]
        })
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index],
        })
    }

    render() {
        const { novaTarefa, tarefas } = this.state;


        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />
                <Lista
                    tarefas={tarefas}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
            </div>
        )
    }
}