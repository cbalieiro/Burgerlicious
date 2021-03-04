import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CallAPI from "../../services/api";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import ErrorAuth from "../../components/errors/errors";

const Register = () => {
  const userData = AllModelsObject.authAndUsers;
  const history = useHistory();

  const [user, setUser] = useState(userData);
  const [statusCode, setStatusCode] = useState('');

  useEffect(() => {
    setUser({ ...user, completeName: user.name + ' ' + user.lastName })
  }, [user.name, user.lastName])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password === user.confirmPassword) {
      createUser(user);
    }
    else {
      setStatusCode('405');
    }
  }
 
  const createUser = (props) => {
    const { email, password, role, completeName, users } = props;
    const body = `email=${email}&password=${password}&role=${role}&restaurant=Burgerlicious&name=${completeName}`;
    const method = RequestOptions.post(body);

    CallAPI(users, method)
      .then((json) => {
        localStorage.setItem(`currentUser`, JSON.stringify(json))
        localStorage.setItem(`token`, `${json.token}`)
        
        if (json.code) {
          setStatusCode('');
          setStatusCode(json.code);
        }

        if (json.role === "hall") {
          history.push("/Hall")
        }
        
        if (json.role === "kitchen") {
          history.push("/Kitchen")
        }
      })
  }

  return (
    <>
      <div className="inputs-container">
        <div className="container-logo-btn">
          <p className="back-button"><Link to="/">BACK</Link></p>
          <Logo />
        </div>

        <form onSubmit={(event) => { handleSubmit(event) }}>
          <label>
            Name:
          <input type='text' className="form-input" value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value }) }} placeholder="Name" required />
          </label>
          <label>
            Last name:
          <input type='text' className="form-input" value={user.lastName} onChange={(event) => { setUser({ ...user, lastName: event.target.value }) }} placeholder="Last name" required />
          </label>
          <label>
            Email:
          <input type='email' className="form-input" value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }) }} placeholder="email@email.com" required />
          </label>
          <label>
            Password:
          <input type='password' className="form-input" minLength="8" maxLength="12" value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }) }} placeholder="Password" required />
          </label>
          <label>
            Confirm password:
          <input type="password" className="form-input" value={user.confirmPassword} onChange={(event) => { setUser({ ...user, confirmPassword: event.target.value }) }} placeholder="Password" required />
          </label>

          <label>
            Team:
          <select className="select-style" onChange={(event) => { setUser({ ...user, role: event.target.value }) }} defaultValue='Team work'>
              <option disabled>Team work</option>
              <option value='Hall'>Hall</option>
              <option value='Kitchen'>Kitchen</option>
            </select>
          </label>

          {statusCode && <ErrorAuth />}

          <button className="form-button" type="submit"> SIGN UP </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
