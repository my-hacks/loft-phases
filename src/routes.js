import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Calculator from './pages/Calculator';
import Maps from './pages/Maps';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Calculator,
      Login,
      Maps,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
