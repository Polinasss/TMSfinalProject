import { useSelector } from 'react-redux';
import { postsErrorSelector } from '../../context/ducks/posts/selectors';

const ErrorMessage = () => {
  const postsError = useSelector(postsErrorSelector);

  const message = postsError;

  return (
    <>
    <div>
      <p>Error!</p>
      <p>{message}</p>
    </div>
    </>
    )
};

export default ErrorMessage;
