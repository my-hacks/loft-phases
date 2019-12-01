import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Calculator from './pages/Calculator';
import Maps from './pages/Maps';
import Immobile from './pages/Immobile';
import ImmobileDetails from './pages/Immobile/ImmobileDetails';

const ImmobileView = createStackNavigator({
  ImmobileDetails,
  Immobile,
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      ImmobileView,
      Calculator,
      Maps,
      Login,
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
