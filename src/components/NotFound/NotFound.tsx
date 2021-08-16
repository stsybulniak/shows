import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound: FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Not found</h1>
      <button onClick={() => history.push('/')}>
        Back home page
      </button>
    </>
  );
};

export default NotFound;
