import { useState} from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import Preloader from "../AdditionalPages/Preloader";
import ErrorMessage from "../AdditionalPages/ErrorMessage";

function SignUp () {

  const history = useHistory(); 
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //делаем функцию ассинхронной
  const handleSubmit = async (e) => {
    e.preventDefault(); //предотвратить перезагрузку
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    history.push('/');
  };

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <h1>Регистрация</h1>
        <input 
          name='email' 
          onChange={handleChange} 
          placeholder='email'
          value={values.name}
        />
        <input name='password' placeholder="password" type='password' onChange={handleChange} value={values.password}/>
        <button>Submit</button>
        <Link to='/Sign in'>Войти</Link>
      </form>
    </>
  );
};
export default SignUp;