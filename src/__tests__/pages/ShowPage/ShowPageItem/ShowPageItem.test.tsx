import { render } from '@testing-library/react';
import ShowPageItem from '../../../../pages/ShowPage/ShowPageItem';
import * as reactRedux from 'react-redux';
import { ShowTypes } from '../../../../store/show';
import { EpisodeTypes } from '../../../../store/episode';

const showMock = {
  id: 1,
  name: 'Test show name',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/115/288994.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/115/288994.jpg',
  },
  summary: 'Some description',
};

describe('<ShowPageItem />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Render initial show item page', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ show: null, isLoading: true, error: null });
    useDispatchMock.mockReturnValue(dispatchMock);
    render(<ShowPageItem />);
    expect(dispatchMock).toHaveBeenCalledWith(expect.objectContaining({ type: ShowTypes.fetchShow }));
  });

  it('Render show item page with sucsessfull show fetch', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ show: showMock, isLoading: false, error: null, episodes: {} });
    useDispatchMock.mockReturnValue(dispatchMock);
    render(<ShowPageItem />);
    expect(dispatchMock).toHaveBeenCalledWith(expect.objectContaining({ type: EpisodeTypes.fetchEpisodeList }));
  });

  it('Render show item page with faild show fetch', () => {
    const dispatchMock = jest.fn();
    useSelectorMock.mockReturnValue({ show: null, isLoading: false, error: 'Error here', episodes: {} });
    useDispatchMock.mockReturnValue(dispatchMock);
    const { baseElement } = render(<ShowPageItem />);
    expect(baseElement).toMatchSnapshot();
  });
});
