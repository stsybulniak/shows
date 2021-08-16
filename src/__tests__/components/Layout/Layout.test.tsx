import { render } from '@testing-library/react';
import Layout from '../../../components/Layout/Layout';

describe('<Layout />', () => {
  it('Layout matches snapshot', () => {
    const { baseElement } = render(<Layout><b>Layout content</b></Layout>);
    expect(baseElement).toMatchSnapshot();
  });
})
