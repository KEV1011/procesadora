import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegister = () => {
        if (username && password) {
            axios.post('/api/register', { username, password })
                .then(response => {
                    alert('Usuario registrado exitosamente');
                    history.push('/login');
                })
                .catch(error => {
                    alert('Hubo un error registrando el usuario');
                    console.error('Hubo un error registrando el usuario', error);
                });
        } else {
            alert('Por favor, complete todos los campos');
        }
    };

    return (
        <section id="register">
            <h2>Registrarse</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <button onClick={handleRegister}>Registrarse</button>
        </section>
    );
}

export default Register;