import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './index.css';

import travelImage from '../../assets/viagem-foto.jpg';
import Logo from '../../assets/ecommerce-logo.png';



function Dashboard() {
    return (
        <div className="app">
            <header className="header-container">
                <nav>
                    <img src={Logo} />
                    <ul>
                        <Link to="/products" className="navlist">Products</Link>
                        <Link to="/contacts" className="navlist">Contacts</Link>
                    </ul>
                </nav>
            </header>

            <main className="main-container">
                <img src={travelImage} />
                <section className="article-container">
                    <strong>Viagem</strong>
                    <p>A melhor viagem da sua vida está de braços aberto para você.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus et, architecto corporis blanditiis
                    eius quas! Harum, odio deleniti, quibusdam, impedit consequuntur voluptate vitae provident fugit debitis
                optio mollitia eaque porro.</p>
                </section>
            </main>

            <footer className="footer-container">
                <span>Made with love <FaHeart /> by Willian Lemann</span>
            </footer>
        </div >
    );
}

export default Dashboard;
