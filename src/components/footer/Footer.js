import './style.css';

import github from '../../img/icons/gitHub.svg';
import telegram from '../../img/icons/telegram.svg';
import email from '../../img/icons/email.svg';

const Footer = () => {
return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <ul className='social'>
                    <li className='social__item'><a href='https://github.com/elizavetaa0' target='_blank'><img src={github} alt='Ссылка на репозиторий на GitHub' /></a></li>
                    <li className='social__item'><a href='https://t.me/elizavetaakur' target='_blank'><img src={telegram} alt='Ссылка на телеграм' /></a></li>
                    <li className='social__item'><a href='mailto:kurochkina.e.a@rambler.ru' target='_blank'><img src={email} alt='Ссылка на почту' /></a></li>
                </ul>
                <div className='copyright'>
                    <p>© 2024</p>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;