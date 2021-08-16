import { render } from '@testing-library/react';
import ErrorOrLoading from '../../../components/ErrorOrLoading/ErrorOrLoading';

describe('<ErrorOrLoading />', () => {
  it('ErrorOrLoading shows Loading component', () => {
    const { baseElement } = render(
      <ErrorOrLoading isLoading error={null}>
        Some child
      </ErrorOrLoading>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('ErrorOrLoading shows Error component', () => {
    const { baseElement } = render(
      <ErrorOrLoading isLoading={false} error={'Some error'}>
        Some child
      </ErrorOrLoading>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('ErrorOrLoading shows child component', () => {
    const { baseElement } = render(
      <ErrorOrLoading isLoading={false} error={null}>
        Some child
      </ErrorOrLoading>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
