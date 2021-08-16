import { FC } from 'react';
import { IEpisode } from '../../store/episode';
import { useHistory } from 'react-router-dom';
import './Episode.scss';
import placeholderImage from '../../assets/img/test.png';
import { BREAKPOINT_TO_USE_MEDIUM_IMG } from '../../utils/constants';

interface IEpisodeProps {
  episode: IEpisode;
  viewportWidth: number;
}

const Episode: FC<IEpisodeProps> = ({ episode, viewportWidth }) => {
  const history = useHistory();

  return (
    <div className='Episode'>
      <button className='Episode__backButton' onClick={() => history.push('/')}>
        Back to list
      </button>
      <h1>{episode.name}</h1>
      <img
        src={
          (viewportWidth > BREAKPOINT_TO_USE_MEDIUM_IMG ? episode.image?.original : episode.image?.medium) ||
          placeholderImage
        }
        alt={episode.name}
      />
      <div className='Episode__description' dangerouslySetInnerHTML={{ __html: episode.summary }} />
    </div>
  );
};

export default Episode;
