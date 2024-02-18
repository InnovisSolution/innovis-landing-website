import React from 'react';
import './index.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://media.licdn.com/dms/image/D560BAQEevLyjpnd0yA/company-logo_200_200/0/1701157740884/innovis_solution_logo?e=1715817600&v=beta&t=NSfRIz0_LcBQLGfM5YdELvYn1fsMnlRPD8fh_Rx8p4g' />
                <span>Innovis</span>
            </div>
            <nav>
                <ul className='nav_list'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
