import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: __filename.split('/').slice(-1)[0],

  getInitialState() {
    return {
      fields: {},
      people: [],
    };
  },

  onFormSubmit(evt) {
    console.log(this.state.fields)
    const people = [
      ...this.state.people,
      this.state.fields,
    ];
    this.setState({ people, fields: {} });
    evt.preventDefault();
  },

  onInputChange(evt) {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  },

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='fName'
            name='fname'
            value={this.state.fields.fname}
            onChange={this.onInputChange}
          />

          <input
            placeholder='lName'
            name='lname'
            value={this.state.fields.lname}
            onChange={this.onInputChange}
          />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />



          <input type='submit' />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            { this.state.people.map(({ fname, lname, email }, i) =>
              <li key={i}>{fname} {lname} ({ email })</li>
            ) }
          </ul>
        </div>
      </div>
    );
  },
});
