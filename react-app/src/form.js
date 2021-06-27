import React, { Component } from 'react';
import UserRow from './userRow';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        des: ''
      },
      users: []
    };
    this.id = 0;
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.id = this.id + 1;
    const user = {...this.state.form, id: this.id}
    this.setState(prev => ( {
      users: [
        ...prev.users,
        user
      ]
    }))
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'radio' ? target.checked : target.value
    const name = target.name

    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }

  handleRemove(id) {
    console.log(id);
    const { users } = this.state;
    const newUsers = users.filter(e => e.id !== id);

    this.setState(prev => ({
      users: newUsers
    }))
  }

  render() {
    const { form, users } = this.state;
    return (
      <div>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input type="text" name="email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Your country</label>
            <select name="country" onChange={this.handleChange}>
              <option value="">Please choose</option>
              <option value="quangnam">Quanng Nam</option>
              <option value="danang">Da Nang</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group" onChange={this.handleChange}>
              <label>
                <input type="radio" value="0" name="gender"/>
                Male
              </label>
              <label>
                <input type="radio" value="1" name="gender"/>
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Orther</label>
            <textarea name="des" rows="6" onChange={this.handleChange}></textarea>
          </div>
          <div className="button-action">
            <button className="btn-submit">Submit</button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email address</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(e => (
                <UserRow key={e.id} data={e} remove={this.handleRemove}></UserRow>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form
