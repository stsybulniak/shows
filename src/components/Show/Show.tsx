import { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IShow } from '../../store/show';
import * as episodeActions from '../../store/episode/actions';
import { IApplicationState } from '../../store';
import EpisodeList from '../EpisodeList/EpisodeList';
import ErrorOrLoading from '../ErrorOrLoading/ErrorOrLoading';
import './Show.scss';
import { groupedEpisodesBySeason } from '../../utils';
import { BREAKPOINT_TO_USE_MEDIUM_IMG } from '../../utils/constants';

interface IShowProps {
  show: IShow;
  viewportWidth: number;
}

const Show: FC<IShowProps> = ({ show, viewportWidth }) => {
  const { episodes, error, isLoading } = useSelector((state: IApplicationState) => state.episode);
  const dispatch = useDispatch();

  const groupedEpisodes = useMemo(() => groupedEpisodesBySeason(episodes), [episodes]);

  useEffect(() => {
    if (!Object.keys(episodes).length && !error) {
      dispatch(episodeActions.fetchEpisodeList());
    }
  }, [episodes]);

  return (
    <div className='Show'>
      <h1 className='Show__title'>{show.name}</h1>
      <div className='Show__content'>
        <img src={viewportWidth > BREAKPOINT_TO_USE_MEDIUM_IMG ? show.image.original : show.image.medium} alt={show.name} />
        <div className='Show__content-description' dangerouslySetInnerHTML={{ __html: show.summary }} />
        <ErrorOrLoading isLoading={isLoading} error={error}>
          <EpisodeList groupedEpisodesBySeason={groupedEpisodes} />
        </ErrorOrLoading>
      </div>
    </div>
  );
};

export default Show;
