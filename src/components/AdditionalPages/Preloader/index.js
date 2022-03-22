import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../context/ducks/posts/selectors';
import './style.css';

const Preloader = () => {
  const isPostsLoading = useSelector(isLoadingSelector);
  const isLoading = isPostsLoading;

  return (
    <>
      {!!isLoading && (<div className='loading'> Loading...</div>)}
    </>
  )
};

export default Preloader;
