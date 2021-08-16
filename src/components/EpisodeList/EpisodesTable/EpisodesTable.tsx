import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IEpisode } from '../../../store/episode';
import './EpisodesTable.scss';

interface IEpisodesTableProps {
  episodes: IEpisode[];
}

const EpisodesTable: FC<IEpisodesTableProps> = ({ episodes }) => {
  return (
    <table className="EpisodesTable">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(({ number, name, id }) => (
          <tr key={id}>
            <td>{number}</td>
            <td>
              <Link to={{ pathname: `/episodes/${id}` }}>{name}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
