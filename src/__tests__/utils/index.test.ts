import { convertEpisodeToMap, groupedEpisodesBySeason } from '../../utils';

const respDataMock = [
  {
    id: 1,
    name: 'Mini Golf Madness',
    season: 2,
    number: 8,
    image: null,
    summary: '<p>Buttercup takes her game.</p>',
  },
  {
    id: 2,
    name: 'some name',
    season: 2,
    number: 9,
    image: null,
    summary: '<p>Buttercup takes her game.</p>',
  },
];

describe('UTILS', () => {
  it('convertEpisodeToMap', () => {
    const data = convertEpisodeToMap(respDataMock);
    const [firstItem, secondItem] = respDataMock;
    expect(data).toEqual({ [firstItem.id]: firstItem, [secondItem.id]: secondItem });
  });

  it('groupedEpisodesBySeason', () => {
    const stateData = convertEpisodeToMap(respDataMock);
    const groupedData = groupedEpisodesBySeason(stateData);
    const [firstItem, secondItem] = respDataMock;
    expect(groupedData).toEqual({ [firstItem.season]: [firstItem, secondItem] });
  });
});
