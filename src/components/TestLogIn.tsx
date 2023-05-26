import { useRef, useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/auth/login',
});

const LOGIN_URL = '/auth';

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err?.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err?.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <NavLink to="/">Go to Home</NavLink>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                inputRef={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </FormControl>
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              <NavLink to="#">Sign Up</NavLink>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
