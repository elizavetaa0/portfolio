const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
              <h1 className="title-1">Контакты</h1>
              <ul className="content-list">
                <li className="content-list__item">
                  <h2 className="title-2">E-mail</h2>
                  <p><a href="mailto:kurochkina.e.a@rambler.ru">kurochkina.e.a@rambler.ru</a></p>
                </li>
                <li className="content-list__item">
                  <h2 className="title-2">Telegram</h2>
                  <p><a href="https://t.me/elizavetaakur">@elizavetaakur</a></p>
                </li>
                <li className="content-list__item">
                  <h2 className="title-2">Местоположение</h2>
                  <p>Москва, Россия</p>
                </li>
              </ul>
      </div>
    </main>
  );
}

export default Contacts;