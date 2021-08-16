import { render } from '@testing-library/react';
import EpisodeItemPage from '../../../../pages/ShowPage/EpisodeItemPage/EpisodeItemPage';
import * as reactRedux from 'react-redux';
import { EpisodeTypes } from '../../../../store/episode';

const episodeMock = {
  id: 1156862,
  name: 'Mini Golf Madness',
  season: 2,
  number: 8,
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/115/288994.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/115/288994.jpg',
  },
  summary: '<p>Buttercup takes her game.</p>',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1156862',
  }),
}));

describe('<EpisodeItemPage />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Render initial episode item page', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ episodes: {}, isLoading: true, error: null });
    useDispatchMock.mockReturnValue(dispatchMock);
    render(<EpisodeItemPage />);
    expect(dispatchMock).toHaveBeenCalledWith(expect.objectContaining({ type: EpisodeTypes.fetchEpisodeList }));
  });

  it('Render episode item page with sucsessfull episodes fetch', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ episodes: { 1156862: episodeMock }, isLoading: false, error: null });
    useDispatchMock.mockReturnValue(dispatchMock);
    const { baseElement } = render(<EpisodeItemPage />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Render episode item page with erro episodes fetch', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ episodes: {}, isLoading: false, error: 'some error' });
    useDispatchMock.mockReturnValue(dispatchMock);
    const { baseElement } = render(<EpisodeItemPage />);
    expect(baseElement).toMatchSnapshot();
  });
});
