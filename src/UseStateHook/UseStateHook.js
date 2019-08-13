import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {

  const [ email, putEmail ] = useState('');
  const [ password, putPassword ] = useState('');
  const [ isAuthorized, putAuthorized ] = useState('');
  
  function handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;

    name === 'email' ? putEmail(val) : putPassword(val);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    
    if (email && password) putAuthorized(true);
  }


  return (
    
    <React.Fragment>
      <input
        value={email}
        onChange={handleChange}
        placeholder="email"
        name="email"
        data-testid="email-input"
      />
      <input
        value={password}
        onChange={handleChange}
        placeholder="password"
        name="password"
        data-testid="password-input"
      />
      <button 
        onClick={handleSubmit} 
        data-testid="submit">
        Войти
      </button>
      { isAuthorized && <p data-testid="success-message">Вы вошли</p> }
    </React.Fragment>

  )

};
