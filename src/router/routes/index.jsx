import AuthRoutes from './Auth';
import UserRoutes from './User';
import ProductRoutes from './Product';
import OrderRoutes from './Order';
import MiscRoutes from './MiscRoutes';

const AppRoutes = [
  ...AuthRoutes,
  ...UserRoutes,
  ...ProductRoutes,
  ...OrderRoutes,
  ...MiscRoutes
];

export { AppRoutes };