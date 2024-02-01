import { FormEvent, useState } from "react";
import "./LoginLayout.css";
import axios from "axios"

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResponseText("");
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: email,
        password: pass,
      });
      setResponseText(response.data);
      console.log(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponseText(error.message);
      } else {
        setResponseText(String(error));
      }
    }
  }


  return (
    <div className="container">
      <div className="inner-container">
        <p>Login </p>
        return (
  <>
  <div className="Login">
    <div className="LoginForm">
    <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e. target.value)} type="password" placeholder="*********" id="password" name="password"/>
          <button type="submit">Login</button>
      </form>
    </div>
  </div>
  
  </>
  )
      </div>
    </div>
  );
}

export default Login;
