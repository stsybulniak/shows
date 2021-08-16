import { fireEvent, render, screen } from '@testing-library/react';
import NotFound from '../../../components/NotFound/NotFound';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<NotFound />', () => {
  it('NotFound test click with Router trigger', async () => {
    const { baseElement } = render(<NotFound />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
    expect(baseElement).toMatchSnapshot();
  });
});
