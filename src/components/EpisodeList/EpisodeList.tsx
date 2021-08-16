import { FC } from 'react';
import { IEpisode } from '../../store/episode';
import EpisodesTable from './EpisodesTable/EpisodesTable';
import './EpisodeList.scss';

interface IEpisodeListProps {
  groupedEpisodesBySeason: { [key: string]: IEpisode[] };
}

const EpisodeList: FC<IEpisodeListProps> = ({ groupedEpisodesBySeason }) => {
  return (
    <div className='EpisodeList'>
      {Object.keys(groupedEpisodesBySeason).map((season) => {
        return (
          <div className="EpisodeList__wrapper" key={season}>
            <h3 className="EpisodeList__title">Season {season}</h3>
            <EpisodesTable episodes={groupedEpisodesBySeason[season]} />
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;
