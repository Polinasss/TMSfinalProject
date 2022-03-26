import { useState} from "react";
import { auth } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

import { StyledLogInOut, StyledInputs, StyledButton } from "../../styles";
import Preloader from "../AdditionalPages/Preloader";
import ErrorMessage from "../AdditionalPages/ErrorMessage";

function SignIn () {

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError(null);
      await auth.signInWithEmailAndPassword(values.email, values.password);
      history.push('/'); //если всё хорошо, то делаем редирект
      setLoading(false);
    } catch (error) { 
      setLoading(false);
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 10000);
    }
  };

  return (
    <>
      {!loading ? 
        (
          <form onSubmit = {handleSubmit} style={StyledLogInOut}>
            <h1>Sign in</h1>
            {error && <ErrorMessage/>}
            <input style={StyledInputs}
            name='email' 
            placeholder='email'
            onChange={handleChange} 
            value={values.name}
            />
            <input style={StyledInputs} name='password' placeholder='password' type='password' onChange={handleChange} value={values.password}/>
            <StyledButton>Submit</StyledButton>
            <Link to='/Sign up'>Sign up</Link>
          </form>
        ) : <Preloader/>
      }
    </>
  );
};

export default SignIn;