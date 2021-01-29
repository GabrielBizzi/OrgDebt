import React from 'react';
import Logo from '../../assets/images/logo.png';
import './styles.css';

function PageHeader() {
    return (
        <header className="page-header">
            <nav className="navbar">
                <img src={Logo} alt="OrgDebt"/>
                <a href="">
                    <svg viewBox="0 0 100 50" width="40" height="40">
                        <rect width="80" fill="#9188ff" height="15" rx="8"></rect>
                        <rect y="25" fill="#9188ff" width="80" height="15" rx="8"></rect>
                        <rect y="50" fill="#9188ff" width="80" height="15" rx="8"></rect>
                    </svg>
                </a>
                <ul>
                    <li><a href="#">Debt</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default PageHeader;