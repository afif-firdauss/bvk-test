import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Gap, Input } from '../../components';
import styles from './Register.module.css'

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.registerPage}>
      <div className="container flex-grow-1">
        <div className="row px-3">
          <div className="col-lg-4 mx-auto bg-white p-4 rounded-3">
            <h1>Buat Akun</h1>
            <Gap height={20}/>
            <form onSubmit={handleSubmit}> 
              <Input 
                label="Nama Lengkap"
                type="text"
                placeholder="masukkan nama lengkap anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Gap height={10}/>
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
                placeholder="password minimal 6 karakter"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="error-msg"></p>
              <Gap height={15}/>
              <Button title="Daftar" type="submit"/>
            </form>
            <Gap height={15}/>
            <div className={styles.login}>
              <p>Sudah memiliki akun?</p>&nbsp;
              <Link className="link-item" to="/login">Masuk</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register;