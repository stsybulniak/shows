import { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/ErrorOrLoading/Loader/Loader';

const ShowItem = lazy(() => import('./pages/ShowPage/ShowPageItem'));
const EpisodeItem = lazy(() => import('./pages/ShowPage/EpisodeItemPage/EpisodeItemPage'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const Routes: FC = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path='/' component={ShowItem} />
      <Route exact path='/episodes/:id' component={EpisodeItem} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
