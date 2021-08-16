import { render } from '@testing-library/react';
import Header from '../../../../components/Layout/Header/Header';

describe('<Header />', () => {
  it('Header matches snapshot', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
})
