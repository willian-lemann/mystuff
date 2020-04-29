import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import backgroundImage from '../../assets/background.jpg';

function Login() {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push('/dashboard')
    };

    return (
        <div className="login-container">
            <img src={backgroundImage} />
            <section className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Digite seu login'

                    />
                    <input
                        type="password"
                        placeholder='Digite sua senha'
                    />
                    <button type='submit'>Entrar</button>
                </form>
            </section>
        </div>
    );
}

export default Login;
