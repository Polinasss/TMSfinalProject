import { useState} from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import Preloader from "../AdditionalPages/Preloader";
import ErrorMessage from "../AdditionalPages/ErrorMessage";
import { StyledLogInOut, StyledInputs, StyledButton } from "../../styles";

function SignUp () {

  const history = useHistory(); 
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //делаем функцию ассинхронной
  const handleSubmit = async (e) => {
    e.preventDefault(); //предотвратить перезагрузку
    setLoading(true);
    try {
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    history.push('/');
    setLoading(false);
    } catch(error) {
      setLoading(false);
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 10000);
    }
  };

  return (
    <>
    {!loading ? 
      (<form onSubmit = {handleSubmit} style={StyledLogInOut}>
        <h1>Sign up</h1>
        {error && <ErrorMessage/>}
        <input 
          name='email' 
          onChange={handleChange} 
          placeholder='email'
          value={values.name}
          style={StyledInputs}
        />
        <input style={StyledInputs} name='password' placeholder="password" type='password' onChange={handleChange} value={values.password}/>
        <StyledButton>Submit</StyledButton>
        <Link to='/Sign in'>Sign in</Link>
      </form>) : <Preloader/>
    }
    </>
  );
};
export default SignUp;