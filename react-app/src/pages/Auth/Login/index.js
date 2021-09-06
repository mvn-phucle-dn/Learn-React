import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email && form.password) {
      auth.login(form.email, form.password).then(e => {
        console.log(e);
      });
    }
  }

  return (
    <div className="container">
      <h1 className="title-page">Login page</h1>
      <form className="form-control login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input type="text" name="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div>
        <div className="button-action">
          <button className="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
