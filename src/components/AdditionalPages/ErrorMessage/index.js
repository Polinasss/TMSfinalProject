import { useSelector } from 'react-redux';
import { postsErrorSelector } from '../../context/ducks/posts/selectors';

const ErrorMessage = () => {
  const postsError = useSelector(postsErrorSelector);

  const message = postsError;

  return (
    <>
    { !!message && <div>{message}</div>}
    </>
    )
};

export default ErrorMessage;
