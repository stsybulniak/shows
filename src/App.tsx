import { FC } from 'react';
import Layout from './components/Layout/Layout';
import Routes from './routes';
import './assets/scss/styles.scss';

const App: FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
