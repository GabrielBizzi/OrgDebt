import React from 'react';
import axios from 'axios';
import Input from './components/Input';

export default class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      value: '',
      reason: '',
      date: '',
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
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <Input type="text" name="name" label="Teste" onChange={this.handleChange} />
          </label><br/>
          <label>
            Value Name:
            <input type="text" name="value" onChange={this.handleChange} />
          </label><br/>
          <label>
            Reason:
            <input type="text" name="reason" onChange={this.handleChange} />
          </label><br/>
          <label>
            Date:
            <input type="text" name="date" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}