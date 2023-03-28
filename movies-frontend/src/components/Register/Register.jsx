import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/validationForms';

function Register({isBlockButton, resStatus, onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    if (!isValid) return;
    onRegister(name, email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label">
        Имя
        <input
          minLength="2"
          onChange={handleChange}
          value={values.name || ''}
          name="name"
          placeholder="Имя"
          type="text"
          className={`form__input ${errors.name ? 'form__input_type_error' : ''}`}
          pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
          required
        />
        <span className="form__text-error">{errors.name || ''}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          onChange={handleChange}
          value={values.email || ''}
          name="email"
          placeholder="E-mail"
          type="email"
          className={`form__input ${errors.email ? 'form__input_type_error' : ''}`}
          required
        />
        <span className="form__text-error">{errors.email || ''}</span>
      </label>
      <label className="form__label" placeholder="Пароль">
        Пароль
        <input
          onChange={handleChange}
          value={values.password || ''}
          name="password"
          placeholder="Пароль"
          minLength="6"
          type="password"
          className={`form__input ${errors.password ? 'form__input_type_error' : ''}`}
          required
        />
        <span className="form__text-error">{errors.password || ''}</span>
      </label>
      <span className="form__text-error form__text-error_type_submit">
        {resStatus === false && 'Произошла ошибка запроса регистрации.'}
      </span>
      <button
        className={`form__button ${!isValid ? 'form__button_type_error' : ''}`}
        disabled={!isValid && isBlockButton}
        type="submit"
      >
        Зарегистрироваться
      </button>
      <p className="form__text">
        Зарегистрированы?
        <Link className="form__link" to="/signin">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
