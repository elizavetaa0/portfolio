import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
          <h1 className='header__title'>
              Добро пожаловать! <br />
              Меня зовут <span className='header__title-accent'>Елизавета</span> <br />
              Я - Frontend разработчик
          </h1>
          <div className='header__text'>
              <p>Кликнув на кнопку, можно получить мое резюме</p>
          </div>
          <a href='https://drive.google.com/file/d/1FuyifFtTakzUEE8ICD0zT7fIPbS4DYZm/view?usp=sharing' className='btn' target ='_blank' download>Скачать резюме</a>
      </div>
    </header>
  );
}

export default Header;