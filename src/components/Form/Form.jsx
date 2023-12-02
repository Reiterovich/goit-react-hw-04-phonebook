import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.conactList(contactData);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
          <br />
          <h2>Number</h2>
          <input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <br />
        <h2>Contacts</h2>
      </>
    );
  }
}
