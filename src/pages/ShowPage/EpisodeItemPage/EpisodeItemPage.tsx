import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Episode from '../../../components/Episode/Episode';
import ErrorOrLoading from '../../../components/ErrorOrLoading/ErrorOrLoading';
import { IApplicationState } from '../../../store';
import * as episodeActions from '../../../store/episode/actions';
import { viewportWidth } from '../../../utils';

const EpisodeItemPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { episodes, isLoading, error } = useSelector((state: IApplicationState) => state.episode);
  const episode = episodes[parseInt(id)];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(episodes).length && !error) {
      dispatch(episodeActions.fetchEpisodeList());
    }
  }, [episodes, error, dispatch]);

  return (
    <ErrorOrLoading isLoading={isLoading} error={error}>
      {episode && <Episode episode={episode} viewportWidth={viewportWidth} />}
    </ErrorOrLoading>
  );
};

export default EpisodeItemPage;
