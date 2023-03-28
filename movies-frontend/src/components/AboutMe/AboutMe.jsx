function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__name">Егор</h3>
        <p className="about-me__text about-me__text_for_subtitle">Фронтенд-разработчик, 23 года</p>
        <p className="about-me__text"></p>
        <a className="about-me__link" href="https://github.com/IWToIT" target="_blank" rel="noreferrer">
          Github
        </a>
        <div className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;