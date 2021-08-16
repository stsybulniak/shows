import { fireEvent, render, screen } from '@testing-library/react';
import Episode from '../../../components/Episode/Episode';

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

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Episode />', () => {
  it('Episode matches snapshot with origin image', () => {
    const { baseElement } = render(<Episode episode={episodeMock} viewportWidth={1200} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Episode matches snapshot with medium image', () => {
    const { baseElement } = render(<Episode episode={episodeMock} viewportWidth={640} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Episode test click with Router trigger', async () => {
    render(<Episode episode={episodeMock} viewportWidth={640} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
