import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorOrLoading from '../../components/ErrorOrLoading/ErrorOrLoading';
import Show from '../../components/Show/Show';
import { IApplicationState } from '../../store';
import * as showActions from '../../store/show/actions';
import { viewportWidth } from '../../utils';

const ShowPage: FC = () => {
  const { show, isLoading, error } = useSelector((state: IApplicationState) => state.show);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!show) {
      dispatch(showActions.fetchShow());
    }
  }, [show]);

  return (
    <ErrorOrLoading isLoading={isLoading} error={error}>
      {show && <Show show={show} viewportWidth={viewportWidth} />}
    </ErrorOrLoading>
  );
};

export default ShowPage;
