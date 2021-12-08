import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Gap, Input } from '../../components';
import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.registerPage}>
      <div className="container flex-grow-1">
        <div className="row px-3">
          <div className="col-lg-4 mx-auto bg-white p-4 rounded-3 position-relative">
            <h1>Masuk</h1>
            <Gap height={20}/>
            <form onSubmit={handleLogin}>
              <Input
                label="Email"
                type="email"
                placeholder="cth: user@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Gap height={10}/>
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Gap height={30}/>
              <Button title="Masuk" type="submit"/>
            </form>
            <Gap height={10}/>
            <div className={styles.hr}>
              <hr/>
              <p>Baru pertama kali di .Org?</p>
            </div>
            <Gap height={10}/>
            <Link to="/">
              <Button className={styles.btnGray} title="Buat akun .Org"/>
            </Link>
            <Gap height={5}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;