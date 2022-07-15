import AuthRoutes from './Auth';
import UserRoutes from './User';
import ProductRoutes from './Product';
import OrderRoutes from './Order';

const DefaultRoute = '/home';

const AppRoutes = [
  ...AuthRoutes,
  ...UserRoutes,
  ...ProductRoutes,
  ...OrderRoutes
];

export { DefaultRoute, AppRoutes };