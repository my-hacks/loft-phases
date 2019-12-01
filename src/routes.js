import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Calculator from './pages/Calculator';
import Maps from './pages/Maps';
import Immobile from './pages/Immobile';
import ImmobileDetails from './pages/Immobile/ImmobileDetails';
import BuyNow from './pages/BuyNow';
import ImALofter from './pages/ImALofter';

const ImmobileView = createStackNavigator({
  Immobile,
  ImmobileDetails,
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Calculator,
      ImmobileView,
      Maps,
      Login,
      ImALofter,
      BuyNow,
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
