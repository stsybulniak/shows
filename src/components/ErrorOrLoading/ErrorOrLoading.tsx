import { FC } from 'react';
import Error from './Error/Error';
import Loader from './Loader/Loader';

interface IErrorOrLoadingProps {
  isLoading: boolean;
  error: string | null;
}

const ErrorOrLoading: FC<IErrorOrLoadingProps> = (props) => {
  const { isLoading, error, children } = props;
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} />;
  }

  return <>{children}</>;
};

export default ErrorOrLoading;
