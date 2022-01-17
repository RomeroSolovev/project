import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
                <div className="footer-container">
                    <div className="footer-text">
                        Проект ООО «Инитлаб», Краснодар, Россия. <br /> Drupal является
                        зарегистрированной торговой маркой Dries Buytaert.<br/>
                        Козин Александр, Олеся Виноградова, Никита Батурин.
                    </div>
                </div>
                <div className='space-for-navbar'></div>
        </footer>
    );
}

export default Footer;
