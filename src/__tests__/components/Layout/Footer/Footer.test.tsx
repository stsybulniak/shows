import { render } from '@testing-library/react';
import Footer from '../../../../components/Layout/Footer/Footer';

describe('<Footer />', () => {
  it('Footer matches snapshot', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toMatchSnapshot();
  });
})
