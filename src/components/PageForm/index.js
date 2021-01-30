import React from 'react';
import Select from '../Select';
import './styles.css';
import axios from 'axios';

export default class PageForm extends React.Component {
  constructor() {
    
    super();
    this.state = {
      name: '',
      value: '',
      reason: '',
      date: '',
      options: [
          {
              name: '',
              value: '',
          }
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      value: this.state.value,
      reason: this.state.reason,
      date: this.state.date,
      options: this.state.options,
    };

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  } 
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-content">
            
            <div className="select-block">
            <label htmlFor="name">Client</label>
            <select name="name" onChange={this.handleChange} id="name">
                <Select/>
            </select>
            </div>
            <div className="input-block">
                <label htmlFor="reason">Reason</label>
                <input placeholder="Ex: Dívida com cartão de crédito." type="text" id="reason" name="reason" onChange={this.handleChange} />
            </div>
            <div id="input-grid">
            <div className="input-block">
                <label htmlFor="value">Value</label>
                <input placeholder="Ex: R$ 250,00" type="text" id="value" name="value" onChange={this.handleChange} />
            </div>
            <div className="input-block">
                <label htmlFor="value">Date</label>
                <input type="date" id="date" name="date" onChange={this.handleChange} />
            </div>
            </div>
            <hr />
            <div id="buttons-grid">
                <button type="submit" id="save-button">Salvar</button>
                <button id="delete-button">Deletar</button>
            </div>
        </form>
    );
}
}