import { useState} from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

import Preloader from "../AdditionalPages/Preloader";
import ErrorMessage from "../AdditionalPages/ErrorMessage";

function SignIn () {

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      history.push('/'); //если всё хорошо, то делаем редирект
    } catch (e) {
      console.dir(e); 
    }
  };

  return (
    <>
    <ErrorMessage/>
    <Preloader/>
    <form onSubmit = {handleSubmit}>
      <h1>Вход</h1>
      <input 
      name='email' 
      placeholder='email'
      onChange={handleChange} 
      value={values.name}
      />
      <input name='password' placeholder='password' type='password' onChange={handleChange} value={values.password}/>
      <button>Submit</button>
      <Link to='/Sign up'>Зарегистрироваться</Link>
    </form>
    </>
  );
};
export default SignIn;