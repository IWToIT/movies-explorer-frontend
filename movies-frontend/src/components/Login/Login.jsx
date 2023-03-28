import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/validationForms';

function Login({ isBlockButton, resStatus, onLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!isValid) return;
    onLogin(email, password);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="form">
      <label className="form__label">
        E-mail
        <input
          className={`form__input ${errors.email ? 'form__input_type_error' : ''}`}
          onChange={handleChange}
          value={values.email || ''}
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <span className="form__text-error">{errors.email || ''}</span>
      </label>
      <label className="form__label" placeholder="Пароль">
        Пароль
        <input
          className={`form__input ${errors.password ? 'form__input_type_error' : ''}`}
          onChange={handleChange}
          value={values.password || ''}
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="6"
          required
        />
        <span className="form__text-error">{errors.password || ''}</span>
      </label>
      <span className="form__text-error form__text-error_type_submit">
        {resStatus === false && 'Произошла ошибка запроса авторизации.'}
      </span>
      <button
        className={`form__button ${!isValid ? 'form__button_type_error' : ''}`}
        disabled={!isValid && isBlockButton}
        type="submit"
      >
        Войти
      </button>
      <p className="form__text">
        Ещё не зарегистрированы?
        <Link className="form__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
