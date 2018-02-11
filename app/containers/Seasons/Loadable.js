/**
 *
 * Asynchronously loads the component for Seasons
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
