import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        axios.post('/api/login', { username, password })
            .then(response => {
                alert('Sesión iniciada');
                history.push('/');
            })
            .catch(error => {
                alert('Usuario o contraseña incorrectos');
                console.error('Hubo un error iniciando sesión', error);
            });
    };

    return (
        <section id="login">
            <h2>Iniciar Sesión</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </section>
    );
}

export default Login;