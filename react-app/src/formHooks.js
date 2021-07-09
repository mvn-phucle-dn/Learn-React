import React, { useState } from 'react';

let id = 0;

const FormHooks = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    des: ''
  });
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    id += 1;
    const user = {...form, id}
    setUsers([...users, user]);
  }

  function handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleRemove(id) {
    const newUsers = users.filter(e => e.id !== id);
    setUsers(newUsers);
  }


  return (
    <div className="container form-wrap">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input type="text" name="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Your country</label>
          <select name="country" onChange={handleChange}>
            <option value="">Please choose</option>
            <option value="quangnam">Quanng Nam</option>
            <option value="danang">Da Nang</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group" onChange={handleChange}>
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
          <textarea name="des" rows="6" onChange={handleChange}></textarea>
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
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.email}</td>
                <td>{e.country}</td>
                <td>{e.gender === '0' ? 'Male' : 'Female'}</td>
                <td>{e.des}</td>
                <td><button onClick={() => handleRemove(e.id)}>Remove</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default FormHooks
