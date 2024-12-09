import { useState } from 'react'
import './App.css';

function App() {
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginError, setLoginError] = useState('')
  const loginRegex = /^[a-z][a-z0-9._]*$/

  const [nameError, setNameError] = useState('')
  const [surnameError, setSurnameError] = useState('')
  const nameRegex = /^[A-Z][a-z]*$/

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  

  const handleInputLogin = (ev) => {
    const value = ev.target.value
    setLogin(value)

    if(value !== "" && !/^[a-z]/.test(value)){
      setLoginError('First symbol must be lowercase')
    }
    else if(value !== "" && !loginRegex.test(value)) {
      setLoginError("Only lowercase letters, numbers and . _ could contain")
    }
    else if (value !== "" && value.length < 8){
      setLoginError('Input must be more than 8 symbols')
    }
    else {
      setLoginError('')
    }
  }

  const handleInputName = (ev) => {
    const value = ev.target.value
    setName(value)

    if (value !== "" && !/^[A-Z]/.test(value)) {
      setNameError('Input must start with uppercase')
    } else if (value !== "" && !/^[A-Za-z]+$/.test(value)) {
      setNameError('Input must contain only letters')
    } else if (value !== "" && !nameRegex.test(value)) {
      setNameError('Rest of the letters should be in lowercase')
    } else {
      setNameError('')
    }
  }

  const handleInputSurname = (ev) => {
    const value = ev.target.value
    setSurname(value)

    if (value !== "" && !/^[A-Z]/.test(value)) {
      setSurnameError('Input must start with uppercase')
    } else if (value !== "" && !/^[A-Za-z]+$/.test(value)) {
      setSurnameError('Input must contain only letters')
    } else if (value !== "" && !nameRegex.test(value)) {
      setSurnameError('Rest of the letters should be in lowercase')
    } else {
      setSurnameError('')
    }
  }

  const handleInputEmail = (ev) => {
    const value = ev.target.value
    setEmail(value)

    if (value !== "" && !/^[a-zA-Z]/.test(value)){
      setEmailError('İnput must start with letter')
    }
    else if (value !== "" && !/^[a-zA-Z0-9._@]+$/.test(value)) {
      setEmailError('Input must consist of letters, numbers, . or _')
    }    
      else if(value !== "" && !/@/.test(value)){
        setEmailError('have to has @')
      }
      else if(value !== "" && !/[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
        setEmailError('must be 2 letters after dot')
      }
      else {
        setEmailError('')
      }
    }

  const handleInputPassword = (ev) => {
    const value = ev.target.value
    setPassword(value)

    if(value !== "" && !/^[A-Z]/.test(value)){
      setPasswordError('first symbol must be uppercase')
    }
    else if(value !== "" && !/[a-z0-9._]*/.test(value)){
      setPasswordError('must be only words,numbers, . and _')
    }
    else if(value !== "" && /^[A-Z][a-z0-9._]{7,}$/.test(value)){
      setPasswordError('more than 8')
    }
    else {
      setPasswordError('')
    }
  }


  return (
    <div>
      <form>
        <div>
          <input
            onInput={handleInputLogin}
            type="text"
            name="login"
            placeholder="login"
          />
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>

        <div>
          <input
            onInput={handleInputName}
            type="text"
            name="name"
            placeholder="name"
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>

        <div>
          <input
            onInput={handleInputSurname}
            type="text"
            name="surname"
            placeholder="surname"
          />
          {surnameError && <p style={{ color: 'red' }}>{surnameError}</p>}
        </div>

        <div>
          <input
            onInput={handleInputEmail}
            type="text"
            name="email"
            placeholder="email"
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <div>
          <input
            onInput={handleInputPassword}
            type="text"
            name="password"
            placeholder="password"
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>

        <button>REGISTER</button>
      </form>
    </div>
  );
}

export default App
